import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";

// 1. This tells Next.js exactly which pages to build at compile time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. We define the Page as a Server Component (No "use client")
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // In Next.js 15+, params is a Promise
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#fdfcf8] min-h-screen p-10 md:p-20 pb-40">
      <div className="max-w-3xl mx-auto">
        <header className="mb-20">
          <p className="text-[#A8B475] font-black tracking-[0.5em] text-[10px] uppercase mb-8">
            {post.date}
          </p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] leading-[1.1] mb-12">
            {post.title}
          </h1>
          <div className="h-96 w-full rounded-[3rem] overflow-hidden bg-stone-200 shadow-xl relative">
            <img 
              src={post.image} 
              className="w-full h-full object-cover" 
              alt={post.title} 
            />
          </div>
        </header>

        <div className="max-w-none">
          <p className="text-xl font-serif italic text-stone-800 leading-loose mb-12 border-l-4 border-[#A8B475] pl-8">
            {post.excerpt}
          </p>
          <div className="text-stone-600 leading-[2.2] text-lg space-y-8 font-light">
            {/* The actual content from your blogData */}
            {post.content}
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-20 pt-10 border-t border-stone-100">
           <a href="/blog" className="text-[10px] font-black tracking-widest text-[#1B4D3E] uppercase hover:text-[#A8B475] transition-colors">
             ← Back to Articles
           </a>
        </div>
      </div>
    </article>
  );
}