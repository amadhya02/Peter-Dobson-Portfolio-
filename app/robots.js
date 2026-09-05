import seo from '../content/cms/seo.json';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  };
}
