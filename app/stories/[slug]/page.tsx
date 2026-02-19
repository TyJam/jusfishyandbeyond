import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Link from "next/link";

// 1. Tell Next.js which slugs to build at compile time
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

// 2. The Page Component (Must be async for Next.js 15)
export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch the individual post from Sanity
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    mainImage,
    body,
    _createdAt
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#fdfcf8] min-h-screen p-10 md:p-20 pb-40">
      <div className="max-w-3xl mx-auto">
        <header className="mb-20">
          <p className="text-[#A8B475] font-black tracking-[0.5em] text-[10px] uppercase mb-8">
            {new Date(post._createdAt).toLocaleDateString()}
          </p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] leading-[1.1] mb-12">
            {post.title}
          </h1>
        </header>

        <div className="max-w-none">
          <p className="text-xl font-serif italic text-stone-800 leading-loose mb-12 border-l-4 border-[#A8B475] pl-8">
            {post.description}
          </p>
          <div className="text-stone-600 leading-[2.2] text-lg space-y-8 font-light">
            {/* If using PortableText, you'd add it here. For now, we use a placeholder */}
            <p>The full story of {post.title} is being prepared with Brooklyn soul...</p>
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-20 pt-10 border-t border-stone-100">
          <Link 
             href="/stories" 
             className="text-[10px] font-black tracking-widest text-[#1B4D3E] uppercase hover:text-[#A8B475] transition-colors"
           >
             ← Back to Stories
           </Link>
        </div>
      </div>
    </article>
  );
}