import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/content/posts';
import { FadeUp, StaggerGrid, StaggerItem } from '@/components/motion';

export const metadata = {
  title: "Blog | Parenting Tips & Child Development — Brixton's Little Haven",
  description:
    "Practical parenting tips, child development insights, and school readiness guides from the team at Brixton's Little Haven in Lapu-Lapu City, Philippines.",
  alternates: { canonical: '/blog' },
  openGraph: {
    title: "Blog — Brixton's Little Haven",
    description: "Parenting tips, sensory play ideas, and school readiness guides for Filipino families.",
  },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-PH', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <section className="bg-gradient-to-b from-navy to-navy/90 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-bold">Blog</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Tips, Ideas & Insights
            </h1>
            <p className="mt-3 text-base text-white/70">
              Practical guides for parents navigating early childhood, school readiness, and child development.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <StaggerGrid className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full rounded-3xl bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                {/* Cover image */}
                <div className="relative h-48 w-full overflow-hidden bg-amber-50">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-5xl">📝</div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="rounded-full bg-coral/10 px-2.5 py-0.5 text-xs font-semibold text-coral">
                      {post.category}
                    </span>
                    <span className="text-xs text-navy/40">{post.readTime}</span>
                  </div>

                  <h2 className="text-base font-bold text-navy leading-snug mb-2 group-hover:text-coral transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {post.title}
                  </h2>
                  <p className="text-xs text-navy/60 leading-relaxed flex-1">{post.excerpt}</p>

                  <div className="mt-4 flex items-center justify-between text-xs text-navy/40">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="font-semibold text-coral group-hover:underline">Read more →</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </>
  );
}
