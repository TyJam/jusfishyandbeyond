import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Link from "next/link";

// --- 1. DYNAMIC SEO METADATA ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
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
    }
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });

  if (!post) notFound();

  // --- 2. JSON-LD STRUCTURED DATA (The Secret SEO Engine) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
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
    <article className="bg-[#fdfcf8] min-h-screen p-6 md:p-20">
      {/* Add the JSON-LD to the page head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="max-w-3xl mx-auto mb-16">
        {/* Semantic HTML: Use H1 for the main broad keyword */}
        <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] leading-[1.1] mb-8">
          {post.title}
        </h1>
        <p className="text-[#A8B475] font-black tracking-widest text-[10px] uppercase">
          Brooklyn • Authentic • Fresh
        </p>
      </header>

      <div className="max-w-3xl mx-auto prose prose-stone lg:prose-xl">
        <p className="text-xl font-serif italic text-stone-800 leading-relaxed mb-12">
          {post.description}
        </p>
        {/* Your Article content goes here */}
      </div>
      
      <div className="mt-20 max-w-3xl mx-auto pt-10 border-t border-stone-100">
         <Link href="/stories" className="text-[10px] font-black tracking-widest text-[#1B4D3E] uppercase hover:text-[#A8B475] transition-colors">
           ← Back to Stories
         </Link>
      </div>
    </article>
  );
}