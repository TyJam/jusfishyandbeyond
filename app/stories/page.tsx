import { client } from "@/lib/sanity";
import Link from "next/link";

export default async function BlogStories() {
  const posts = await client.fetch(`*[_type == "post"] | order(_createdAt desc)`);

  return (
    <div className="bg-white min-h-screen p-10 md:p-20">
      <h1 className="text-7xl font-serif text-[#1B4D3E] mb-20 border-b border-stone-100 pb-10">Stories.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
        {posts.map((post: any) => (
          <Link href={`/stories/${post.slug.current}`} key={post._id} className="group">
            <p className="text-[10px] font-black tracking-[0.4em] text-[#A8B475] uppercase mb-4">
              {new Date(post._createdAt).toLocaleDateString()}
            </p>
            <h2 className="text-3xl font-serif italic text-jusBlack group-hover:text-[#1B4D3E] transition-colors leading-tight">
              {post.title}
            </h2>
            <p className="mt-4 text-stone-500 text-sm leading-relaxed">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}