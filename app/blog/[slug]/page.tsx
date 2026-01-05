"use client";
import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";


export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound()
  return (
    <article className="bg-[#fdfcf8] min-h-screen p-10 md:p-20 pb-40">
      <div className="max-w-3xl mx-auto">
        <header className="mb-20">
          <p className="text-[#A8B475] font-black tracking-[0.5em] text-[10px] uppercase mb-8">{post.date}</p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] leading-tight mb-12">
            {post.title}
          </h1>
          <div className="h-96 w-full rounded-[3rem] overflow-hidden bg-stone-200 shadow-xl">
            <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
          </div>
        </header>

        <div className="prose prose-stone max-w-none">
          <p className="text-xl font-serif italic text-jusBlack leading-loose mb-8">
            {post.excerpt}
          </p>
          <div className="text-stone-600 leading-[2] text-lg space-y-6">
            {/* Using raw content for now - you can add more logic here later */}
            {post.content}
          </div>
        </div>
      </div>
    </article>
  );
}