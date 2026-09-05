'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import shared from '../content/cms/shared.json';
import ScrollReveal from './ScrollReveal';

export const intakeUrl = '/intake';

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem('pdf-theme', nextTheme);
    setTheme(nextTheme);
  };

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}><svg className="sun-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg><svg className="moon-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.2A8.3 8.3 0 0 1 8.8 4a8.3 8.3 0 1 0 11.2 11.2Z" /></svg></button>;
}

export function Brand({ footer = false }) {
  return <Link className={`brand${footer ? ' footer-brand' : ''}`} href="/" aria-label="Peter Dobson Fitness home"><span className="brand-mark" aria-hidden="true"><i /><b /><strong /><b /><i /></span><span>{shared.brand.name}<small>{shared.brand.tagline}</small></span></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.classList.toggle('menu-open', open); return () => document.body.classList.remove('menu-open'); }, [open]);
  const close = () => setOpen(false);
  return <header className="site-header"><Brand /><button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span /><span /></button><nav id="main-nav" className={open ? 'open' : ''} aria-label="Primary navigation"><Link href="/coaching" onClick={close}>{shared.nav.coaching}</Link><Link href="/about" onClick={close}>{shared.nav.about}</Link><Link href="/gym" onClick={close}>{shared.nav.gym}</Link><Link href="/pricing" onClick={close}>{shared.nav.pricing}</Link><Link className="nav-intake" href="/intake" onClick={close}>{shared.nav.bookIntakeMobile}</Link></nav><ThemeToggle /><Link className="button button-small header-cta" href="/intake">{shared.nav.headerCta} <span>↗</span></Link></header>;
}

export function SiteFooter() {
  return <footer><Brand footer /><div className="footer-links"><Link href="/coaching">{shared.footer.coaching}</Link><Link href="/about">{shared.footer.about}</Link><Link href="/gym">{shared.footer.gymSubpage}</Link><Link href="/privacy">{shared.footer.privacy}</Link><Link href="/terms">{shared.footer.terms}</Link></div><div className="footer-contact"><a href={`mailto:${shared.footer.email}`}>{shared.footer.email}</a><a href={shared.footer.instagramUrl}>{shared.footer.instagramLabel}</a></div><p className="copyright">© {new Date().getFullYear()} {shared.footer.copyrightSuffix}</p></footer>;
}

export function PageShell({ children, eyebrow, title, outline, intro }) {
  return <><ScrollReveal /><SiteHeader /><main><section className="page-hero reveal"><p className="eyebrow"><span />{eyebrow}</p><h1>{title}<br /><em>{outline}</em></h1>{intro && <p>{intro}</p>}</section>{children}</main><SiteFooter /></>;
}
