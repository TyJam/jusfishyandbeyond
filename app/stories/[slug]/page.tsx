import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react"; // CRITICAL FOR CONTENT

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
    title: `${post.title} | Jus Fishy & Beyond`,
    description: post.description,
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // FIXED QUERY: We specifically ask for "body"
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title, description, mainImage, body, _createdAt
  }`;
  
  const post = await client.fetch(query, { slug });

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post._createdAt,
    "author": { "@type": "Organization", "name": "Jus Fishy & Beyond" }
  };

  return (
    <article className="bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <p className="text-[#A8B475] font-black tracking-[0.5em] text-[10px] uppercase mb-8">
            {new Date(post._createdAt).toLocaleDateString()}
          </p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] leading-[1.1] mb-12">{post.title}</h1>
          
          {post.mainImage && (
            <div className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl mb-16">
              <Image src={urlFor(post.mainImage).url()} alt={post.title} fill className="object-cover" unoptimized />
            </div>
          )}
        </header>

        <div className="max-w-3xl">
          <p className="text-2xl font-serif italic text-stone-400 leading-relaxed mb-16 border-l-4 border-[#A8B475] pl-8">
            {post.description}
          </p>
          
          {/* THE CONTENT BODY FIX */}
          <div className="text-stone-800 leading-[2.2] text-lg space-y-8 font-light prose prose-stone lg:prose-xl">
            <PortableText value={post.body} />
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-stone-100">
           <Link href="/stories" className="text-[10px] font-black tracking-widest text-[#1B4D3E] uppercase hover:text-[#A8B475] transition-all flex items-center gap-4 group">
             <span>←</span> Back to Stories
           </Link>
        </div>
      </div>
    </article>
  );
}