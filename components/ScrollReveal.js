'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-process');
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));

    // Safety net: content must never stay permanently invisible if the
    // observer can't fire for some reason (e.g. a backgrounded tab, or
    // any future class-name mismatch like the one this file just had).
    const fallback = setTimeout(() => {
      elements.forEach((element) => element.classList.add('revealed'));
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
