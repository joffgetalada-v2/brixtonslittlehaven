import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts } from '@/content/posts';
import { business } from '@/content/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Brixton's Little Haven Blog`,
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

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-PH', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

// Render a paragraph — supports **bold** and \n inside strings
function Paragraph({ text }) {
  if (text.startsWith('**') && text.includes('.**\n')) {
    const [boldPart, rest] = text.split('.**\n');
    const heading = boldPart.replace(/\*\*/g, '');
    return (
      <div className="mt-6">
        <p className="font-bold text-navy mb-1">{heading}.</p>
        <p>{rest}</p>
      </div>
    );
  }
  return <p className="mt-4">{text}</p>;
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

      <article className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs text-navy/50">
          <Link href="/" className="hover:text-coral transition">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-coral transition">Blog</Link>
          <span>/</span>
          <span className="text-navy/70 truncate max-w-[180px]">{post.title}</span>
        </nav>

        {/* Category + meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="rounded-full bg-coral/10 px-3 py-0.5 text-xs font-semibold text-coral">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-xs text-navy/50">{formatDate(post.date)}</time>
          <span className="text-xs text-navy/40">{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-navy leading-tight sm:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
          {post.title}
        </h1>

        <p className="mt-4 text-base text-navy/70 leading-relaxed">{post.excerpt}</p>

        {/* Cover image */}
        {post.coverImage && (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-3xl shadow-md">
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
        <div className="mt-10 text-sm text-navy/80 leading-relaxed space-y-1">
          {post.paragraphs.map((para, i) => (
            <Paragraph key={i} text={para} />
          ))}
        </div>

        {/* Author note */}
        <div className="mt-12 flex items-start gap-4 rounded-2xl bg-amber-50 border border-amber-100 p-5">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <Image src={business.logo} alt={business.logoAlt} fill className="object-cover" sizes="48px" />
          </div>
          <div>
            <p className="text-sm font-bold text-navy">{business.name}</p>
            <p className="text-xs text-navy/60 mt-0.5">
              Indoor playgroup, flexible childcare, and academic tutorials in Lapu-Lapu City.{' '}
              <Link href="/contact" className="text-coral hover:underline">Book a free trial →</Link>
            </p>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-lg font-bold text-navy mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
              More from our Blog
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group flex flex-col rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-semibold text-coral mb-1">{rp.category}</span>
                  <h3 className="text-sm font-bold text-navy leading-snug group-hover:text-coral transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {rp.title}
                  </h3>
                  <p className="mt-1 text-xs text-navy/50">{rp.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12">
          <Link href="/blog" className="text-sm font-semibold text-coral hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
