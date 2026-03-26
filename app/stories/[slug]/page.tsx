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

// --- MASTER SEO: RENDERING ENGINE FOR IMAGES INSIDE BLOG CONTENT ---
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-[300px] md:h-[500px] my-12 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
          <Image
            src={urlFor(value).url()}
            alt="Process and Soul of Jus Fishy Seafood"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-5xl font-black text-[#1B4D3E] mt-16 mb-8 tracking-tighter">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mt-12 mb-4 italic">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-stone-600 leading-[2.1] text-lg mb-6 font-light">
        {children}
      </p>
    ),
  },
};

export const dynamicParams = false;

// 1. GENERATE STATIC PARAMS (Build-time optimization)
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  
  if (!posts || posts.length === 0) {
    return [{ slug: "welcome-to-jus-fishy" }];
  }
  
  return posts.map((post: any) => ({ slug: post.slug }));
}

// 2. DYNAMIC SEO METADATA (Bypassing Pearl Street & Dominating Brooklyn)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{title, description}`, { slug });
  
  if (!post) return { title: "Story Not Found | TyWebStudio" };
  
  return {
    title: `${post.title} | Jus Fishy & Beyond Brooklyn`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: "/jus-fishy-seafood-restaurant-flatbush-brooklyn.webp" }],
      type: 'article',
    }
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
        return <div className="p-40 text-center font-serif italic text-2xl">Refining our latest seafood stories...</div>
    }
    notFound();
  }

  // 3. JSON-LD MASTER SCHEMA (The "Out of this World" SEO Logic)
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post._createdAt,
    "author": { "@type": "Organization", "name": "TyWebStudio Digital News" },
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

  const locationLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Jus Fishy & Beyond",
    "description": "Brooklyn's #1 Seafood Place and Caribbean Soul destination near Kings Theatre.",
    "url": "https://www.jusfishyandbeyond.com",
    "telephone": "347-442-1172",
    "hasMap": "https://www.google.com/maps/dir/?api=1&destination=1059+Flatbush+Ave+Brooklyn+NY+11226"
  };

  return (
    <article className="bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationLd) }} />
      
      <div className="max-w-4xl mx-auto">
        <header className="mb-20">
          <Link href="/stories" className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase hover:text-[#1B4D3E] transition-all mb-8 block">
            ← Back to Stories
          </Link>
          <p className="text-stone-400 font-black tracking-[0.4em] text-[10px] uppercase mb-6">
            The Craft • {new Date(post._createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
          <h1 className="text-6xl md:text-9xl font-serif text-[#1B4D3E] leading-[0.95] mb-12 tracking-tighter italic">
            {post.title}
          </h1>
          
          {post.mainImage && (
            <div className="relative w-full h-[450px] md:h-[700px] rounded-[3.5rem] overflow-hidden shadow-2xl mb-16 border-8 border-white group">
              <Image 
                src={urlFor(post.mainImage).url()} 
                alt={post.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                unoptimized 
                priority
              />
            </div>
          )}
        </header>

        <div className="max-w-3xl">
          {/* THE SUB-TITLE / EXCERPT */}
          <p className="text-3xl md:text-4xl font-serif italic text-stone-400 leading-snug mb-20 border-l-4 border-[#A8B475] pl-10">
            {post.description}
          </p>
          
          {/* THE CONTENT BODY ENGINE */}
          <div className="prose prose-stone lg:prose-xl max-w-none">
            <PortableText value={post.body} components={ptComponents} />
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="mt-32 pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-center md:text-left">
              <p className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase mb-2">Ready to taste?</p>
              <p className="text-lg font-serif italic text-[#1B4D3E]">1059 Flatbush Ave, Brooklyn</p>
           </div>
           <Link href="/menu" className="bg-[#1B4D3E] text-white px-12 py-5 rounded-full font-black text-[10px] tracking-widest uppercase hover:bg-black transition-all shadow-xl">
             Explore Our Signature Menu
           </Link>
        </div>
      </div>
    </article>
  );
}