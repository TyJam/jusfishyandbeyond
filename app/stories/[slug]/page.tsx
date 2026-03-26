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

// 1. MANDATORY FOR STATIC EXPORT: Fixes the "Missing generateStaticParams" error
export const dynamicParams = false;

// 2. THE RENDER ENGINE: This tells the site how to handle images INSIDE your text
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-[350px] md:h-[600px] my-16 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
          <Image
            src={urlFor(value).url()}
            alt="Jus Fishy Exquisite Culinary Process"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-4xl md:text-6xl font-black text-[#1B4D3E] mt-20 mb-10 tracking-tighter italic">
        {children}
      </h2>
    ),
    normal: ({ children }: any) => (
      <p className="text-stone-600 leading-[2.2] text-lg md:text-xl mb-8 font-light">
        {children}
      </p>
    ),
  },
};

// 3. GENERATE STATIC PARAMS: Build-time optimization for 100/100 Speed
export async function generateStaticParams() {
  try {
    const query = `*[_type == "post"]{ "slug": slug.current }`;
    const posts = await client.fetch(query);
    
    if (!posts || posts.length === 0) {
      return [{ slug: "welcome-to-jus-fishy" }];
    }
    
    return posts.map((post: any) => ({ slug: post.slug }));
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [{ slug: "welcome-to-jus-fishy" }];
  }
}

// 4. DYNAMIC SEO METADATA: Dominating Dumbo and Flatbush
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
        return <div className="p-40 text-center font-serif italic text-2xl bg-white min-h-screen">Architecting our latest stories...</div>
    }
    notFound();
  }

  // 5. MASTER JSON-LD SCHEMA: The "Out of this World" SEO Secret
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

  return (
    <article className="bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
      
      <div className="max-w-4xl mx-auto">
        <header className="mb-24">
          <Link href="/stories" className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase hover:text-[#1B4D3E] transition-all mb-12 block group">
            <span className="inline-block group-hover:-translate-x-2 transition-transform mr-2">←</span> Back to Stories
          </Link>
          
          <p className="text-stone-400 font-black tracking-[0.5em] text-[10px] uppercase mb-8">
            {new Date(post._createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
          
          <h1 className="text-6xl md:text-9xl font-serif text-[#1B4D3E] leading-[0.95] mb-16 tracking-tighter italic">
            {post.title}
          </h1>
          
          {post.mainImage && (
            <div className="relative w-full h-[450px] md:h-[750px] rounded-[4rem] overflow-hidden shadow-2xl mb-24 border-8 border-white group">
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
          <p className="text-3xl md:text-5xl font-serif italic text-stone-800 leading-snug mb-24 border-l-8 border-[#A8B475] pl-12">
            {post.description}
          </p>
          
          {/* THE CONTENT BODY ENGINE (FIXED: Added ptComponents) */}
          <div className="prose prose-stone lg:prose-2xl max-w-none">
            <PortableText value={post.body} components={ptComponents} />
          </div>
        </div>

        {/* REVENUE CONVERSION FOOTER */}
        <div className="mt-40 pt-20 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="text-center md:text-left">
              <p className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase mb-2">The Standard of Excellence</p>
              <p className="text-2xl font-serif italic text-[#1B4D3E]">1059 Flatbush Ave, Brooklyn</p>
           </div>
           <Link href="/menu" className="bg-[#1B4D3E] text-white px-16 py-6 rounded-full font-black text-xs tracking-widest uppercase hover:bg-black transition-all shadow-2xl">
             Explore Our Signature Menu
           </Link>
        </div>
      </div>
    </article>
  );
}