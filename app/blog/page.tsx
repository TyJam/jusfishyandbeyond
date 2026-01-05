"use client";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import { motion } from "framer-motion";

export default function BlogListPage() {
  return (
    <div className="bg-white min-h-screen p-10 md:p-20">
      <h1 className="text-5xl font-serif text-[#1B4D3E] mb-20 border-b border-stone-100 pb-10">Articles.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <motion.div whileHover={{ y: -5 }}>
              <p className="text-[9px] font-black tracking-[0.4em] text-[#A8B475] uppercase mb-4">{post.date}</p>
              <h2 className="text-3xl font-serif italic text-jusBlack group-hover:text-[#1B4D3E] transition-colors mb-4 leading-tight">
                {post.title}
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="mt-6 h-[1px] w-12 bg-stone-200 group-hover:w-full transition-all duration-500" />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}