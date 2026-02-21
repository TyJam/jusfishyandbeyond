import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export const metadata: Metadata = {
  title: "Brooklyn Seafood Stories | Jus Fishy & Beyond",
  description: "Discover the heritage of Flatbush seafood. From our signature BBQ Salmon to the freshest Caribbean Snapper, read the stories behind the soul of Brooklyn.",
  alternates: { canonical: "https://www.jusfishyandbeyond.com/stories" },
};

export default async function BlogStories() {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id, title, description, slug, _createdAt, mainImage
  }`;
  const posts = await client.fetch(query);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Jus Fishy Seafood Stories",
    "url": "https://www.jusfishyandbeyond.com/stories",
    "hasPart": posts.map((post: any) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `https://www.jusfishyandbeyond.com/stories/${post.slug.current}`
    }))
  };

  return (
    <main className="bg-white min-h-screen p-6 md:p-20 pb-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <header className="max-w-6xl mx-auto mb-20">
        <h1 className="text-7xl font-serif text-[#1B4D3E] mb-6 border-b border-stone-100 pb-10">Stories.</h1>
        <p className="text-stone-400 text-xs tracking-[0.3em] uppercase font-bold">The Craft • The Culture • The Catch</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 max-w-6xl mx-auto">
        {posts.map((post: any) => (
          <article key={post._id} className="group">
            <Link href={`/stories/${post.slug.current}`}>
              <div className="overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-video mb-8 relative">
                {post.mainImage ? (
                  <Image src={urlFor(post.mainImage).url()} alt={post.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" unoptimized />
                ) : (
                  <div className="w-full h-full bg-[#1B4D3E]/5 flex items-center justify-center">
                    <span className="text-[10px] font-black tracking-widest text-[#1B4D3E]/20 uppercase">TyWebStudio Engine</span>
                  </div>
                )}
              </div>
              <time className="text-[10px] font-black tracking-[0.4em] text-[#A8B475] uppercase mb-4 block">
                {new Date(post._createdAt).toLocaleDateString()}
              </time>
              <h2 className="text-4xl font-serif italic text-jusBlack group-hover:text-[#1B4D3E] transition-colors leading-tight mb-4">{post.title}</h2>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}