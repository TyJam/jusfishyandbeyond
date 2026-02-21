import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

// 1. MANDATORY FOR STATIC EXPORT: Tells Next.js to NOT generate pages on the fly
export const dynamicParams = false;

// 2. THE BUILD ENGINE: This is the function the error was screaming for.
// It fetches all slugs from Sanity at build time.
export async function generateStaticParams() {
  try {
    const query = `*[_type == "post"]{ "slug": slug.current }`;
    const posts = await client.fetch(query);

    if (!posts || posts.length === 0) {
      console.log("⚠️ No posts found in Sanity. Using build-time dummy.");
      return [{ slug: "welcome-to-jus-fishy" }];
    }

    return posts.map((post: { slug: string }) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [{ slug: "welcome-to-jus-fishy" }];
  }
}

// 3. DYNAMIC SEO METADATA: Targets search keywords for each individual story
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{title, description}`, { slug });
  
  if (!post) return { title: "Story Not Found" };

  return {
    title: `${post.title} | Jus Fishy & Beyond Brooklyn`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://www.jusfishyandbeyond.com/stories/${slug}`,
    }
  };
}

// 4. THE PAGE COMPONENT
export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch the full post data
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    _createdAt
  }`;
  
  const post = await client.fetch(query, { slug });

  // Handle cases where the slug isn't found
  if (!post) {
    if (slug === "welcome-to-jus-fishy") {
      return (
        <main className="p-20 text-center bg-white min-h-screen">
          <h1 className="text-4xl font-serif text-[#1B4D3E]">Stories Coming Soon</h1>
          <p className="mt-4 text-stone-400 uppercase tracking-widest text-[10px]">Soul of Brooklyn • Heritage since 2018</p>
          <Link href="/" className="mt-12 inline-block bg-[#1B4D3E] text-white px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase">Back to Home</Link>
        </main>
      );
    }
    notFound();
  }

  // --- JSON-LD STRUCTURED DATA (The Secret SEO Engine) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post._createdAt,
    "author": {
      "@type": "Organization",
      "name": "Jus Fishy & Beyond"
    },
    "publisher": {
      "@type": "Restaurant",
      "name": "Jus Fishy & Beyond",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1059 Flatbush Ave",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11226"
      }
    }
  };

  return (
    <article className="bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40">
      {/* Inject Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto">
        <header className="mb-20">
          <p className="text-[#A8B475] font-black tracking-[0.5em] text-[10px] uppercase mb-8">
            {new Date(post._createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            })}
          </p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] leading-[1.1] mb-12">
            {post.title}
          </h1>
          <div className="h-[1px] w-24 bg-[#A8B475]" />
        </header>

        <div className="prose prose-stone lg:prose-xl max-w-none">
          <p className="text-2xl font-serif italic text-stone-800 leading-relaxed mb-12 border-l-4 border-[#A8B475] pl-8">
            {post.description}
          </p>
          
          <div className="text-stone-600 leading-[2.2] text-lg space-y-8 font-light">
            <p>
              Experience the heritage and soul of Brooklyn. Every dish at Jus Fishy 
              is a testament to our commitment to freshness and the ethical working 
              practices of our fishermen since 2018.
            </p>
            <p>
              From our famous BBQ Salmon to our signature steamed snapper, we bring 
              the best of the ocean to 1059 Flatbush Ave. Stay tuned for more 
              behind-the-scenes stories from our kitchen.
            </p>
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-20 pt-10 border-t border-stone-100">
           <Link 
             href="/stories" 
             className="text-[10px] font-black tracking-widest text-[#1B4D3E] uppercase hover:text-[#A8B475] transition-all flex items-center gap-4 group"
           >
             <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Stories
           </Link>
        </div>
      </div>
    </article>
  );
}