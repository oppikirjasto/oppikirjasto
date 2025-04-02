import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import '../css/components.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero">
      <div className="container">
        <h1 className="hero__title animate-fadeIn">{siteConfig.title}</h1>
        <p className="hero__subtitle animate-fadeIn delay-1">
          {siteConfig.tagline}
        </p>
        <div className="animate-fadeIn delay-2">
          <Link
            className="hero__button"
            to="/docs/9/aidinkieli/suomen">
            Lue äidinkieltä
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, className}) {
  return (
    <div className={`feature ${className}`}>
      <h3 className="feature__title">{title}</h3>
      <p className="feature__description">{description}</p>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Tervetuloa Oppikirjastoon!`}
      description="Oppikirjasto.fi on avoin, maksuton ja kattava digitaalinen oppimateriaalikirjasto yläkoulun oppilaille Suomessa.">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="features">
            <Feature
              className="animate-fadeIn delay-2"
              title="Mikä?"
              description="Oppikirjasto.fi on uusi, avoin, maksuton ja kattava digitaalinen oppimateriaalikirjasto yläkoulun oppilaille Suomessa. Tekoälyn avulla generoidut oppikirjat kattavat koko yläasteen opetussuunnitelman kaikissa aineissa. Tavoitteemme on tarjota kaikille Suomen koululaisille parhaimmat mahdolliset opetusmateriaalit ja näin tehdä oppimisesta tasavertaisempaa."
            />
            <Feature
              className="animate-fadeIn delay-3"
              title="Miten voin osallistua?"
              description="Etsimme opettajia, opiskelijoita ja kaikkia opetuksesta kiinnostuneita osallistumaan yhteisön rakentamiseen ja avoimien oppimateriaalien kehittämiseen. Voit auttaa monin eri tavoin: kirjojen laadun tarkistamisessa tai uusien tekstien luomisessa. Seuraa yläkulman linkkiä lisäohjeisiin."
            />
            <Feature
              className="animate-fadeIn delay-4"
              title="Tietoja sivusta"
              description="Tämä sivusto ja sen sisältö on avointa koodia MIT-lisenssillä. Sisältö (kirjat) on luotu ensin tekoälyllä, jota on sen jälkeen täydennetty ihmisten toimesta. Itse sivusto on oppikirjaston tekijöiden tekemä ja sen pohjana on käytetty Docusaurusta (myös MIT-lisenssi)."
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
