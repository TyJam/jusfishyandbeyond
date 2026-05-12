import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) { return builder.image(source); }

export const metadata: Metadata = {
  title: "Brooklyn Seafood Stories | Modern Caribbean Heritage | Jus Fishy & Beyond",
  description: "The definitive guide to Flatbush seafood. Read about our signature BBQ Salmon, Snapper, and the soul of Brooklyn Caribbean catering.",
  alternates: { canonical: "https://www.jusfishyandbeyond.com/stories" },
};

export default async function BlogStories() {
  const posts = await client.fetch(`*[_type == "post"] | order(_createdAt desc){ _id, title, description, slug, _createdAt, mainImage }`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Jus Fishy Seafood Stories",
    "description": "Authentic Caribbean food stories and catering guides.",
    "url": "https://www.jusfishyandbeyond.com/stories"
  };

  return (
    <main className="bg-white min-h-screen p-6 md:p-20 pb-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <header className="max-w-6xl mx-auto mb-20 border-b border-stone-100 pb-10">
        <h1 className="text-7xl font-serif text-[#1B4D3E] mb-6 tracking-tighter">Stories<span className="text-[#A8B475]">.</span></h1>
        <p className="text-stone-500 text-xs tracking-[0.3em] uppercase font-bold">The Craft • The Culture • The Catch</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 max-w-6xl mx-auto">
        {posts.map((post: any) => (
          <article key={post._id} className="group">
            <Link href={`/stories/${post.slug.current}`}>
              <div className="overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-video mb-8 relative shadow-sm group-hover:shadow-xl transition-all duration-700">
                {post.mainImage && (
                  <Image src={urlFor(post.mainImage).url()} alt={post.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" unoptimized />
                )}
              </div>
              <time className="text-[10px] font-black tracking-[0.4em] text-[#A8B475] uppercase mb-4 block">
                {new Date(post._createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </time>
              {/* FIXED: Title is now bold Green, Description is dark Slate */}
              <h2 className="text-4xl font-serif italic text-[#1B4D3E] group-hover:text-black transition-colors leading-tight mb-4">
                {post.title}
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed line-clamp-3 font-medium">
                {post.description}
              </p>
              <div className="mt-6 h-[1px] w-12 bg-[#A8B475] group-hover:w-24 transition-all duration-500" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}