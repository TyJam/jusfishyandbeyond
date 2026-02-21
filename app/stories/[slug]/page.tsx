import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import imageUrlBuilder from '@sanity/image-url';

// 1. SET UP THE SANITY IMAGE BUILDER
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// 2. MANDATORY FOR STATIC EXPORT
export const dynamicParams = false;

// 3. THE SEO ENGINE: DYNAMIC METADATA
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{title, description}`, { slug });
  
  if (!post) return { title: "Story Not Found | Jus Fishy" };

  return {
    title: `${post.title} | Jus Fishy & Beyond Brooklyn`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://www.jusfishyandbeyond.com/stories/${slug}`,
      images: [{ url: "/images/gallery/bbq-chicken-brooklyn-flatbush-jus-fishy.webp" }],
    }
  };
}

// 4. THE BUILD ENGINE: GENERATE STATIC PATHS
export async function generateStaticParams() {
  try {
    const query = `*[_type == "post"]{ "slug": slug.current }`;
    const posts = await client.fetch(query);

    if (!posts || posts.length === 0) {
      console.log("⚠️ BUILD WARNING: No posts found in Sanity.");
      return [{ slug: "welcome-to-jus-fishy" }];
    }

    return posts.map((post: { slug: string }) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("BUILD ERROR:", error);
    return [{ slug: "welcome-to-jus-fishy" }];
  }
}

// 5. THE PAGE COMPONENT
export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // FETCH DATA
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    mainImage,
    _createdAt
  }`;

  const post = await client.fetch(query, { slug });

  // 6. NOT FOUND HANDLER
  if (!post && slug !== "welcome-to-jus-fishy") {
    notFound();
  }

  // Fallback for build-time dummy
  if (!post && slug === "welcome-to-jus-fishy") {
    return (
      <main className="p-20 text-center bg-white min-h-screen">
        <h1 className="text-4xl font-serif text-[#1B4D3E]">Our Story is Launching soon.</h1>
        <p className="mt-4 text-stone-400">We are currently syncing our Brooklyn heritage to the cloud.</p>
        <Link href="/stories" className="mt-12 inline-block bg-[#1B4D3E] text-white px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase">Back to Stories</Link>
      </main>
    );
  }

  // 7. JSON-LD STRUCTURED DATA (The SEO Secret Sauce)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post._createdAt,
    "author": { "@type": "Organization", "name": "Jus Fishy & Beyond" },
    "publisher": {
      "@type": "Restaurant",
      "name": "Jus Fishy & Beyond",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1059 Flatbush Ave",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY"
      }
    }
  };

  return (
    <article className="bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
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

          {/* DYNAMIC IMAGE FROM SANITY */}
          {post.mainImage && (
            <div className="relative w-full h-[350px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl mb-16">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                priority
                className="object-cover"
                unoptimized={true} 
              />
            </div>
          )}
        </header>

        <div className="max-w-3xl">
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
              Stay tuned for more updates as we continue to document our culinary 
              journey on Flatbush Avenue.
            </p>
          </div>
        </div>

        {/* NAVIGATION BACK */}
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