import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  return posts.map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{title, description}`, { slug });
  if (!post) return { title: "Story Not Found" };
  return {
    title: `${post.title} | Jus Fishy & Beyond Brooklyn`,
    description: post.description,
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title, description, mainImage, body, _createdAt
  }`;
  
  const post = await client.fetch(query, { slug });

  if (!post) {
    if (slug === "welcome-to-jus-fishy") {
        return <div className="p-20 text-center">Stories Coming Soon...</div>
    }
    notFound();
  }

  // 1. BLOGPOSTING SCHEMA
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post._createdAt,
    "author": { "@type": "Organization", "name": "Jus Fishy & Beyond" }
  };

  // 2. LOCAL SEO SCHEMA (Targets Kings Theatre Searchers)
  const locationLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Jus Fishy & Beyond",
    "description": "The best grilled shrimp and seafood destination near Kings Theatre Brooklyn.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1059 Flatbush Ave",
      "addressLocality": "Brooklyn",
      "addressRegion": "NY",
      "postalCode": "11226"
    },
    "relatedService": {
      "@type": "LocalBusiness",
      "name": "Kings Theatre",
      "address": "1027 Flatbush Ave"
    }
  };

  return (
    <article className="bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40">
      {/* Injecting both Schemas for Google's Brain */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationLd) }} />
      
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <p className="text-[#A8B475] font-black tracking-[0.5em] text-[10px] uppercase mb-8">
            {new Date(post._createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] leading-[1.1] mb-12 italic">{post.title}</h1>
          
          {post.mainImage && (
            <div className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl mb-16 border-8 border-white">
              <Image 
                src={urlFor(post.mainImage).url()} 
                alt={post.title} 
                fill 
                className="object-cover" 
                unoptimized 
                priority
              />
            </div>
          )}
        </header>

        <div className="max-w-3xl">
          <p className="text-2xl font-serif italic text-stone-500 leading-relaxed mb-16 border-l-4 border-[#A8B475] pl-8">
            {post.description}
          </p>
          
          {/* THE PRODUCTION CONTENT BODY */}
          <div className="text-stone-800 leading-[2.2] text-lg space-y-8 font-light prose prose-stone lg:prose-xl max-w-none">
            <PortableText value={post.body} />
          </div>
        </div>

        {/* REVENUE CONVERSION LINK */}
        <div className="mt-20 pt-10 border-t border-stone-100 flex justify-between items-center">
           <Link href="/stories" className="text-[10px] font-black tracking-widest text-[#1B4D3E] uppercase hover:text-[#A8B475] transition-all flex items-center gap-4 group">
             <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Stories
           </Link>
           <Link href="/menu" className="bg-[#1B4D3E] text-white px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-black transition-all">
             View Full Menu
           </Link>
        </div>
      </div>
    </article>
  );
}