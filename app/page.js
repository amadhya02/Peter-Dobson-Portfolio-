'use client';

import { Fragment } from 'react';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';
import ScrollReveal from '../components/ScrollReveal';
import media from '../content/cms/media.json';
import home from '../content/cms/home.json';

const intakeUrl = '/intake';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <SiteHeader />

      <main id="top">
        <section className="hero">
          <div className="hero-copy hero-ready">
            <p className="eyebrow"><span /> {home.hero.eyebrow}</p>
            <h1 className="hero-title"><span className="hero-title-line"><span>{home.hero.headingLine1}</span></span><span className="hero-title-line"><span>{home.hero.headingLine2} <em>{home.hero.headingEm}</em></span></span></h1>
            <p className="hero-intro">{home.hero.intro}</p>
            <div className="hero-actions"><a className="button" href={intakeUrl}>{home.hero.primaryCta} <span>↗</span></a><a className="text-link" href="#coaching">{home.hero.secondaryCta} <span>↓</span></a></div>
            <div className="hero-proof">{home.hero.proof.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.labelLine1}<br />{item.labelLine2}</span></div>)}</div>
          </div>
          <div className="hero-visual reveal-right">
            <div className="image-frame"><img src={media.heroPhoto} alt={media.heroPhotoAlt} /></div>
            <div className="status-pill"><span /> {home.hero.statusPill}</div><div className="hero-stamp"><span>{home.hero.stampLine}</span><b>{home.hero.stampMonogram}</b></div>
          </div>
        </section>

        <section className="ticker" aria-label="Training benefits"><div>{[...home.ticker, ...home.ticker].map((word, i) => <Fragment key={i}>{word} <span>✳</span> </Fragment>)}</div></section>

        <section className="section coaching" id="coaching">
          <div className="section-heading"><p className="eyebrow"><span /> {home.coaching.eyebrow}</p><h2>{home.coaching.headingLine1}<br /><em>{home.coaching.headingEm}</em></h2><p>{home.coaching.intro}</p></div>
          <div className="service-grid">
            {home.coaching.cards.map((card, i) => {
              const hrefs = [intakeUrl, 'https://truenorthgym.nl/en', intakeUrl];
              const icons = ['↗', '✳', '＋'];
              const classNames = ['service-card featured reveal-scale', 'service-card reveal-scale', 'service-card dark-card reveal-scale'];
              return (
                <article className={classNames[i]} key={card.title}>
                  <div className="card-number">0{i + 1}</div>
                  <div className="service-icon">{icons[i]}</div>
                  <div>
                    <p className="card-label">{card.label}</p>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <a href={hrefs[i]}>{card.cta} <span>→</span></a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-visual"><img src={media.heroPhoto} alt="Peter Dobson, personal trainer" /><div className="lime-block">{home.about.visualHeadingLine1}<br />{home.about.visualHeadingLine2}<br /><em>{home.about.visualHeadingEm}</em></div></div>
          <div className="about-copy"><p className="eyebrow light"><span /> {home.about.eyebrow}</p><h2>{home.about.headingLine1}<br />{home.about.headingLine2} <em>{home.about.headingEm}</em></h2><p className="lead">{home.about.lead}</p><p>{home.about.text}</p><blockquote>“{home.about.quote}”</blockquote><a className="button button-light" href={intakeUrl}>{home.about.cta} <span>↗</span></a></div>
        </section>

        <section className="section process">
          <div className="section-heading compact"><p className="eyebrow"><span /> {home.process.eyebrow}</p><h2>{home.process.headingLine1} <em>{home.process.headingEm}</em></h2></div>
          <div className="steps reveal-process">{home.process.steps.map((step) => <article className="reveal-scale" key={step.number}><b>{step.number}</b><span /><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        </section>

        <section className="section gym" id="gym"><div className="gym-card reveal"><div className="gym-logo-wrap"><img src={media.gymLogo} alt={media.gymLogoAlt} /></div><div><p className="eyebrow light"><span /> {home.gym.eyebrow}</p><h2>{home.gym.headingLine1}<br /><em>{home.gym.headingEm}</em></h2><p>{home.gym.text}</p><div className="gym-actions"><a className="button button-light" href="https://truenorthgym.nl/en">{home.gym.primaryCta} <span>↗</span></a><a className="text-link light-link" href="https://peterdobsonfitness.virtuagym.com/webshop/product?id=b62540dd56761c58445701c5df843d0192b6&amp;club=OVhlSHR2aDZZREJGZ1gyZlRZdjdvZz09">{home.gym.secondaryCta}</a></div></div></div></section>

        <section className="section final-cta"><p className="eyebrow"><span /> {home.finalCta.eyebrow}</p><h2>{home.finalCta.headingLine1}<br />{home.finalCta.headingLine2} <em>{home.finalCta.headingEm}</em></h2><p>{home.finalCta.text}</p><a className="button" href={intakeUrl}>{home.finalCta.cta} <span>↗</span></a></section>
      </main>

      <SiteFooter />
    </>
  );
}
