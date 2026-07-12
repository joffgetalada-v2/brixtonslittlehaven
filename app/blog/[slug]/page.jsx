import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts } from '@/content/posts';
import { business } from '@/content/site';
import { formatDate } from '@/lib/format';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Brixton's Little Haven Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.coverAlt }] : [],
    },
  };
}

// Render a paragraph. A string shaped like "**Heading**\nBody..." becomes a real
// h2 + paragraph (works for headings ending in any punctuation); everything else
// is a plain paragraph.
function Paragraph({ text }) {
  const match = text.match(/^\*\*(.+?)\*\*\n?([\s\S]*)$/);
  if (match) {
    const [, heading, rest] = match;
    return (
      <>
        <h2 className="mb-2 mt-8 font-heading text-xl font-bold text-navy [text-wrap:balance]">
          {heading}
        </h2>
        {rest.trim() && <p className="text-lg leading-relaxed text-navy-soft">{rest}</p>}
      </>
    );
  }
  return <p className="mt-4 text-lg leading-relaxed text-navy-soft">{text}</p>;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: business.name, url: business.siteUrl },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      logo: { '@type': 'ImageObject', url: `${business.siteUrl}${business.logo}` },
    },
    image: post.coverImage ? `${business.siteUrl}${post.coverImage}` : `${business.siteUrl}${business.logo}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${business.siteUrl}/blog/${post.slug}` },
  };

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <article className="mx-auto max-w-[68ch] px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-navy-soft">
          <Link href="/" className="transition hover:text-coral-ink">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog" className="transition hover:text-coral-ink">Blog</Link>
          <span aria-hidden="true">/</span>
          <span className="max-w-[220px] truncate text-navy">{post.title}</span>
        </nav>

        {/* Category + meta */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-coral-tint px-3 py-0.5 text-xs font-bold text-coral-ink">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-xs text-navy-soft">{formatDate(post.date)}</time>
          <span className="text-xs text-navy-soft">{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-3xl font-bold leading-tight text-navy [text-wrap:balance] sm:text-4xl">
          {post.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-navy-soft [text-wrap:pretty]">{post.excerpt}</p>

        {/* Cover image */}
        {post.coverImage && (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl [box-shadow:var(--shadow-soft)]">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Body */}
        <div className="mt-10">
          {post.paragraphs.map((para, i) => (
            <Paragraph key={i} text={para} />
          ))}
        </div>

        {/* Author note */}
        <div className="mt-12 flex items-start gap-4 rounded-2xl bg-sun-tint p-5">
          <div className="relative h-12 w-12 shrink-0">
            <Image src="/logo.png" alt={business.logoAlt} fill className="object-contain" sizes="48px" />
          </div>
          <div>
            <p className="text-sm font-bold text-navy">{business.name}</p>
            <p className="mt-0.5 text-sm text-navy-soft">
              Indoor playgroup, flexible childcare, and academic tutorials in Lapu-Lapu City.{' '}
              <Link href="/contact" className="font-semibold text-coral-ink hover:underline">Book a free trial</Link>
            </p>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-5 font-heading text-lg font-bold text-navy">
              More from our blog
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group flex flex-col rounded-2xl bg-white p-4 transition [box-shadow:var(--shadow-soft)] hover:[box-shadow:var(--shadow-lift)]"
                >
                  <span className="mb-1 text-xs font-semibold text-coral-ink">{rp.category}</span>
                  <h3 className="font-heading text-sm font-bold leading-snug text-navy transition-colors group-hover:text-coral-ink">
                    {rp.title}
                  </h3>
                  <p className="mt-1 text-xs text-navy-soft">{rp.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12">
          <Link href="/blog" className="text-sm font-semibold text-coral-ink hover:underline">
            Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
