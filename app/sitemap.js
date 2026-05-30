import { business } from '@/content/site';
import { posts } from '@/content/posts';

export default function sitemap() {
  const base = business.siteUrl;
  const now  = new Date();

  const staticPages = [
    { url: `${base}/`,               lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/programs`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/gallery`,         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/faq`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy-policy`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];

  const blogPages = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
