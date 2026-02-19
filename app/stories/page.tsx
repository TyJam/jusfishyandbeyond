import { client } from "@/lib/sanity";
import Link from "next/link";
import { Metadata } from "next";

// 1. ADVANCED METADATA (Static for the List Page)
export const metadata: Metadata = {
  title: "Brooklyn Seafood Stories & Catering Insights | Jus Fishy & Beyond",
  description: "Explore the authentic flavors of Flatbush. From our famous BBQ salmon secrets to corporate catering guides, read the stories behind the soul of Brooklyn seafood.",
  alternates: {
    canonical: "https://www.jusfishyandbeyond.com/stories",
  },
  openGraph: {
    title: "Seafood & Soul: The Jus Fishy Stories",
    description: "Authentic Caribbean flavors and Brooklyn heritage.",
    url: "https://www.jusfishyandbeyond.com/stories",
    type: "website",
  }
};

export default async function BlogStories() {
  const posts = await client.fetch(`*[_type == "post"] | order(_createdAt desc)`);

  // 2. JSON-LD STRUCTURED DATA (Tells Google this is a collection of articles)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Jus Fishy Seafood Stories",
    "description": "A collection of articles about Caribbean seafood, BBQ salmon, and catering in Brooklyn.",
    "url": "https://www.jusfishyandbeyond.com/stories",
    "hasPart": posts.map((post: any) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `https://www.jusfishyandbeyond.com/stories/${post.slug.current}`
    }))
  };

  return (
    <div className="bg-white min-h-screen p-6 md:p-20 pb-40">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="max-w-6xl mx-auto mb-20">
        <h1 className="text-7xl font-serif text-[#1B4D3E] mb-6 border-b border-stone-100 pb-10">
          Stories<span className="text-[#A8B475]">.</span>
        </h1>
        <p className="text-stone-400 text-xs tracking-[0.3em] uppercase font-bold">
          The Craft • The Culture • The Catch
        </p>
      </header>

      {/* 3. SEMANTIC HTML: Using <article> for each post */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 max-w-6xl mx-auto">
        {posts.map((post: any) => (
          <article key={post._id} className="group flex flex-col items-start">
            <Link href={`/stories/${post.slug.current}`} className="w-full">
              <div className="overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-video mb-8 shadow-sm group-hover:shadow-md transition-all duration-500">
                {/* Fallback color block or image if you add them to the query later */}
                <div className="w-full h-full bg-[#1B4D3E]/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                   <span className="text-[10px] font-black tracking-widest text-[#1B4D3E]/20 uppercase">TyWebStudio Engine</span>
                </div>
              </div>

              <header>
                <time 
                  dateTime={post._createdAt} 
                  className="text-[10px] font-black tracking-[0.4em] text-[#A8B475] uppercase mb-4 block"
                >
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
                <h2 className="text-4xl font-serif italic text-jusBlack group-hover:text-[#1B4D3E] transition-colors leading-tight mb-4">
                  {post.title}
                </h2>
              </header>

              <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.description}
              </p>

              <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-[#1B4D3E] uppercase">
                <span>Read Story</span>
                <div className="h-[1px] w-8 bg-[#A8B475] group-hover:w-16 transition-all duration-500" />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}