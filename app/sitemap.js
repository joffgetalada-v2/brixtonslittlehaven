import { business } from '@/content/site';

export default function sitemap() {
  const base = business.siteUrl;
  const now = new Date();

  return [
    { url: `${base}/`,         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/programs`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/gallery`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
