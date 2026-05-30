import { business } from '@/content/site';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${business.siteUrl}/sitemap.xml`,
  };
}
