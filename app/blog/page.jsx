import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/content/posts';
import { FadeUp, StaggerGrid, StaggerItem } from '@/components/motion';
import PageHero from '@/components/PageHero';
import Icon from '@/components/Icon';
import { formatDate } from '@/lib/format';

export const metadata = {
  title: 'Parenting Tips & Child Development',
  description:
    'Practical parenting tips, child development insights, and school readiness guides from our team in Lapu-Lapu City, Philippines.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: "Blog | Brixton's Little Haven",
    description: "Parenting tips, sensory play ideas, and school readiness guides for Filipino families.",
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const [featured, ...rest] = sorted;

  return (
    <>
      <PageHero
        accent="leaf"
        icon="books"
        title="Tips, ideas, and insights"
        intro="Practical guides for parents navigating early childhood, school readiness, and child development."
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {sorted.length === 0 ? (
          <FadeUp>
            <div className="rounded-3xl bg-leaf-tint p-10 text-center [box-shadow:var(--shadow-soft)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-leaf-ink">
                <Icon name="books" size={28} />
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-navy [text-wrap:balance]">
                No posts yet
              </h2>
              <p className="mx-auto mt-2 max-w-2xl leading-relaxed text-navy-soft [text-wrap:pretty]">
                We are busy writing our first guides for parents. Check back soon, or say hello on Facebook in the meantime.
              </p>
            </div>
          </FadeUp>
        ) : (
          <>
            {/* Featured (newest) post */}
            <FadeUp>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-3xl bg-white transition [box-shadow:var(--shadow-soft)] hover:[box-shadow:var(--shadow-lift)] md:grid-cols-5"
              >
                <div className="relative h-56 w-full overflow-hidden bg-leaf-tint md:col-span-2 md:h-full md:min-h-[16rem]">
                  {featured.coverImage ? (
                    <Image
                      src={featured.coverImage}
                      alt={featured.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-leaf-ink">
                      <Icon name="books" size={48} />
                    </div>
                  )}
                </div>

                <div className="flex flex-col p-6 sm:p-8 md:col-span-3">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-coral-tint px-3 py-0.5 text-xs font-bold text-coral-ink">
                      {featured.category}
                    </span>
                    <span className="text-sm text-navy-soft">{featured.readTime}</span>
                  </div>

                  <h2 className="font-heading text-2xl font-bold leading-snug text-navy transition-colors [text-wrap:balance] group-hover:text-coral-ink sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-soft [text-wrap:pretty] sm:text-base">
                    {featured.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-5 text-sm text-navy-soft">
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                    <span className="font-bold text-coral-ink group-hover:underline">Read more</span>
                  </div>
                </div>
              </Link>
            </FadeUp>

            {/* Remaining posts */}
            {rest.length > 0 && (
              <StaggerGrid className="mt-8 grid gap-8 sm:grid-cols-2">
                {rest.map((post) => (
                  <StaggerItem key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white transition [box-shadow:var(--shadow-soft)] hover:[box-shadow:var(--shadow-lift)]"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-leaf-tint">
                        {post.coverImage ? (
                          <Image
                            src={post.coverImage}
                            alt={post.coverAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-leaf-ink">
                            <Icon name="books" size={40} />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-coral-tint px-3 py-0.5 text-xs font-bold text-coral-ink">
                            {post.category}
                          </span>
                          <span className="text-sm text-navy-soft">{post.readTime}</span>
                        </div>

                        <h2 className="font-heading text-lg font-bold leading-snug text-navy transition-colors [text-wrap:balance] group-hover:text-coral-ink">
                          {post.title}
                        </h2>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-soft [text-wrap:pretty]">
                          {post.excerpt}
                        </p>

                        <div className="mt-4 flex items-center justify-between text-sm text-navy-soft">
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                          <span className="font-bold text-coral-ink group-hover:underline">Read more</span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            )}
          </>
        )}
      </div>
    </>
  );
}
