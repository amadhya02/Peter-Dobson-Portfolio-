import './globals.css';
import seo from '../content/cms/seo.json';
import shared from '../content/cms/shared.json';
import media from '../content/cms/media.json';
import business from '../content/cms/business.json';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Peter Dobson Fitness',
  description: business.description,
  url: seo.siteUrl,
  image: `${seo.siteUrl}${media.heroPhoto}`,
  email: shared.footer.email,
  priceRange: business.priceRange,
  address: {
    '@type': 'PostalAddress',
    ...business.address,
  },
  sameAs: [shared.footer.instagramUrl, 'https://truenorthgym.nl/en'],
};

export const metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.home.title,
  description: seo.home.description,
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    siteName: shared.brand.name,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.home.title,
    description: seo.home.description,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('pdf-theme')||'light';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){document.documentElement.dataset.theme='light'}})()` }} />
        {/* Scroll-reveal content is hidden until JS reveals it; without JS it must never stay invisible. */}
        <noscript><style>{`.reveal,.reveal-left,.reveal-right,.reveal-scale{opacity:1!important;transform:none!important}`}</style></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c') }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
