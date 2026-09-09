import seo from '../content/cms/seo.json';
import shared from '../content/cms/shared.json';

export function pageMetadata(key, path, locale = 'en_US') {
  const page = seo[key];
  const url = `${seo.siteUrl}${path}`;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: shared.brand.name,
      type: 'website',
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
  };
}
