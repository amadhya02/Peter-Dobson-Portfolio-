import './globals.css';
import { DM_Sans, Manrope } from 'next/font/google';
import seo from '../content/cms/seo.json';
import shared from '../content/cms/shared.json';
import media from '../content/cms/media.json';
import business from '../content/cms/business.json';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${seo.siteUrl}/#business`,
  name: 'Peter Dobson Fitness',
  description: business.description,
  url: seo.siteUrl,
  image: `${seo.siteUrl}${media.heroPhoto}`,
  logo: `${seo.siteUrl}/icon`,
  email: shared.footer.email,
  priceRange: business.priceRange,
  address: {
    '@type': 'PostalAddress',
    ...business.address,
  },
  areaServed: { '@type': 'City', name: 'Amsterdam' },
  knowsAbout: ['Personal training', 'Strength training', 'Small group training'],
  sameAs: [shared.footer.instagramUrl, 'https://truenorthgym.nl/en'],
};

export const metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.home.title,
  description: seo.home.description,
  applicationName: shared.brand.name,
  authors: [{ name: 'Peter Dobson', url: seo.siteUrl }],
  creator: 'Peter Dobson',
  category: 'fitness',
  alternates: { canonical: '/' },
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: seo.siteUrl,
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
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('pdf-theme')||'light';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){document.documentElement.dataset.theme='light'}})()` }} />
        {/* Scroll-reveal content is hidden until JS reveals it; without JS it must never stay invisible. */}
        <noscript><style>{`.reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-process{opacity:1!important;transform:none!important}`}</style></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c') }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
