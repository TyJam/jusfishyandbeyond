import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import imageUrlBuilder from "@sanity/image-url"; // Correct default import

// 1. IMAGE BUILDER SETUP
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// 2. ADVANCED METADATA (For Google Search Dominance)
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
    images: [{ url: "/images/gallery/fry-salmon-jus-fishy-flatbush-brooklyn.jpg" }],
    type: "website",
  }
};

export default async function BlogStories() {
  // 3. FETCH DATA FROM SANITY
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
    title,
    description,
    slug,
    _createdAt,
    mainImage
  }`;

  const posts = await client.fetch(query);

  // 4. JSON-LD STRUCTURED DATA (Tells Google this is a collection of high-value articles)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Jus Fishy Seafood Stories",
    "description": "A collection of articles about Caribbean seafood, BBQ salmon, and catering in Brooklyn.",
    "url": "https://www.jusfishyandbeyond.com/stories",
    "hasPart": posts.map((post: any) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `https://www.jusfishyandbeyond.com/stories/${post.slug?.current || ''}`
    }))
  };

  // DEBUG LOG (Visible in your terminal)
  console.log("SUCCESS: Fetched posts from Sanity cloud.");

  if (!posts || posts.length === 0) {
    return (
      <div className="p-20 bg-white min-h-screen flex items-center justify-center text-[#1B4D3E]">
        <p className="font-serif italic text-xl">Our stories are being prepared. Check back soon.</p>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen p-6 md:p-20 pb-40">
      {/* Google Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER SECTION */}
      <header className="max-w-6xl mx-auto mb-20">
        <h1 className="text-7xl font-serif text-[#1B4D3E] mb-6 border-b border-stone-100 pb-10">
          Stories<span className="text-[#A8B475]">.</span>
        </h1>
        <p className="text-stone-400 text-xs tracking-[0.3em] uppercase font-bold">
          The Craft • The Culture • The Catch
        </p>
      </header>

      {/* 5. GRID LISTING (Semantic HTML for SEO) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 max-w-6xl mx-auto">
        {posts.map((post: any) => (
          <article key={post._id} className="group flex flex-col items-start">
            <Link href={`/stories/${post.slug?.current}`} className="w-full">
              
              {/* IMAGE WRAPPER */}
              <div className="overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-video mb-8 shadow-sm group-hover:shadow-md transition-all duration-500 relative">
                {post.mainImage ? (
                  <Image 
                    src={urlFor(post.mainImage).url()} 
                    alt={post.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    unoptimized={true}
                  />
                ) : (
                  <div className="w-full h-full bg-[#1B4D3E]/5 flex items-center justify-center transition-transform group-hover:scale-105 duration-700">
                    <span className="text-[10px] font-black tracking-widest text-[#1B4D3E]/20 uppercase">TyWebStudio Engine</span>
                  </div>
                )}
              </div>

              {/* POST METADATA */}
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

              {/* ACTION LINK */}
              <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-[#1B4D3E] uppercase">
                <span>Read Story</span>
                <div className="h-[1.5px] w-8 bg-[#A8B475] group-hover:w-16 transition-all duration-500" />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}