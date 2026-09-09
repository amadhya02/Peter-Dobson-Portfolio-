'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import shared from '../content/cms/shared.json';
import ScrollReveal from './ScrollReveal';
import TrainingIcon from './TrainingIcon';

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
  return <Link className={`brand brand-logo${footer ? ' footer-brand' : ''}`} href="/" aria-label="Peter Dobson Fitness home"><span className="logo-symbol" aria-hidden="true"><svg viewBox="0 0 96 40"><rect className="logo-bar" x="5" y="18.5" width="86" height="3" rx="1.5"/><g className="logo-plates"><rect x="2" y="14" width="5" height="12" rx="1"/><rect x="8" y="9" width="6" height="22" rx="1"/><rect x="15" y="4" width="7" height="32" rx="1"/><rect className="logo-collar" x="24" y="12" width="5" height="16" rx="1"/><rect x="89" y="14" width="5" height="12" rx="1"/><rect x="82" y="9" width="6" height="22" rx="1"/><rect x="74" y="4" width="7" height="32" rx="1"/><rect className="logo-collar" x="67" y="12" width="5" height="16" rx="1"/></g><path className="logo-knurl" d="M34 17v6m4-6v6m20-6v6m4-6v6"/><rect className="logo-accent" x="46" y="16" width="4" height="8" rx="2"/></svg></span><span className="logo-copy"><strong>{shared.brand.name}</strong><small>{shared.brand.tagline}</small></span></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [logoIntro, setLogoIntro] = useState(false);
  const menuButtonRef = useRef(null);
  const navRef = useRef(null);
  const pathname = usePathname();
  useEffect(() => { document.body.classList.toggle('menu-open', open); return () => document.body.classList.remove('menu-open'); }, [open]);
  useEffect(() => {
    if (!open) return undefined;
    const nav = navRef.current;
    const focusable = [...nav.querySelectorAll('a[href]')];
    focusable[0]?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }
      if (event.key !== 'Tab' || !focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);
  useEffect(() => {
    if (!sessionStorage.getItem('pdf-logo-seen')) {
      sessionStorage.setItem('pdf-logo-seen', '1');
      setLogoIntro(true);
    }
  }, []);
  const close = () => setOpen(false);
  const navLink = (href, label, className = '') => <Link className={`${className}${pathname === href ? ' active' : ''}`.trim()} href={href} onClick={close} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>;
  return <header className={`site-header${logoIntro ? ' logo-intro' : ''}`}><Brand /><button ref={menuButtonRef} className="menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span /><span /></button><nav ref={navRef} id="main-nav" className={open ? 'open' : ''} aria-label="Primary navigation">{navLink('/coaching', shared.nav.coaching)}{navLink('/about', shared.nav.about)}{navLink('/gym', shared.nav.gym)}{navLink('/pricing', shared.nav.pricing)}{navLink('/intake', shared.nav.bookIntakeMobile, 'nav-intake')}<div className="mobile-nav-meta"><a href={`mailto:${shared.footer.email}`}>{shared.footer.email}</a><a className="external-link" href={shared.footer.instagramUrl} target="_blank" rel="noopener noreferrer">{shared.footer.instagramLabel}</a></div></nav><ThemeToggle /><Link className={`button button-small header-cta${pathname === '/intake' ? ' active' : ''}`} href="/intake" aria-current={pathname === '/intake' ? 'page' : undefined}>{shared.nav.headerCta} <span>↗</span></Link></header>;
}

export function SiteFooter() {
  return <footer><TrainingIcon name="barbell" className="footer-watermark" /><div className="footer-inner"><Brand footer /><div className="footer-links"><Link href="/coaching">{shared.footer.coaching}</Link><Link href="/about">{shared.footer.about}</Link><Link href="/gym">{shared.footer.gymSubpage}</Link><Link href="/privacy">{shared.footer.privacy}</Link><Link href="/terms">{shared.footer.terms}</Link></div><div className="footer-contact"><a href={`mailto:${shared.footer.email}`}>{shared.footer.email}</a><a className="external-link" href={shared.footer.instagramUrl} target="_blank" rel="noopener noreferrer">{shared.footer.instagramLabel}</a></div><p className="copyright">© {new Date().getFullYear()} {shared.footer.copyrightSuffix}</p></div></footer>;
}

function HeroFigure({ variant }) {
  if (variant === 'about') return <svg className="page-hero-figure" viewBox="0 0 180 180" aria-hidden="true"><circle cx="90" cy="56" r="27"/><path d="M42 145c5-36 22-54 48-54s43 18 48 54M25 145h130"/><path className="figure-accent" d="M34 52h22M45 41v22M128 41l16 16M144 41l-16 16"/></svg>;
  if (variant === 'coaching') return <svg className="page-hero-figure" viewBox="0 0 180 180" aria-hidden="true"><rect x="39" y="30" width="102" height="126" rx="5"/><path d="M68 30v-9h44v18H68zM59 69l8 8 15-18M93 68h28M59 105l8 8 15-18M93 104h28M59 137h62"/><path className="figure-accent" d="M133 127l20 20M153 127l-20 20"/></svg>;
  if (variant === 'gym') return <svg className="page-hero-figure" viewBox="0 0 180 180" aria-hidden="true"><path d="M35 156V22h15v134M130 156V22h15v134M50 42h80M50 137h80"/><path className="figure-accent" d="M17 84h146M24 66v36M34 58v52M146 58v52M156 66v36"/><circle cx="90" cy="84" r="9"/><path d="M64 120h52M70 120v36M110 120v36"/></svg>;
  if (variant === 'intake') return <svg className="page-hero-figure" viewBox="0 0 180 180" aria-hidden="true"><path d="M24 40h99v67H68l-28 23v-23H24z"/><path d="M66 120v22h47l24 19v-19h20V79h-24M47 67h54M47 82h37"/><path className="figure-accent" d="M112 101h22M123 90v22"/></svg>;
  if (variant === 'legal') return <svg className="page-hero-figure" viewBox="0 0 180 180" aria-hidden="true"><path d="M42 20h68l28 28v112H42zM110 20v29h28M62 75h56M62 94h56M62 113h32"/><path className="figure-accent" d="M112 111l23 9v17c0 14-9 22-23 28-14-6-23-14-23-28v-17zM102 137l7 7 14-17"/></svg>;
  return null;
}

export function PageShell({ children, eyebrow, title, outline, intro, variant = 'default', cue }) {
  return <><ScrollReveal /><SiteHeader /><main><section className={`page-hero page-hero-${variant} reveal`}><HeroFigure variant={variant} /><p className="eyebrow"><span />{eyebrow}</p><div className="page-hero-heading"><h1>{title}<br /><em>{outline}</em></h1>{cue && <p className="page-hero-cue"><span>{cue}</span></p>}</div>{intro && <p className="page-hero-intro">{intro}</p>}</section>{children}</main><SiteFooter /></>;
}
