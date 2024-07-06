import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Mikä?',
    description: (
      <>
        Oppikirjasto.fi on uusi, avoin, maksuton ja kattava digitaalinen oppimateriaalikirjasto yläkoulun oppilaille Suomessa. Tekoälyn avulla generoidut oppikirjat kattavat koko yläasteen opetussuunnitelman kaikissa aineissa. Tavoitteemme on tarjota kaikille Suomen koululaisille parhaimmat mahdolliset opetusmateriaalit ja näin tehdä oppimisesta tasavertaisempaa.
      </>
    ),
  },
  {
    title: 'Miten voin osallistua?',
    description: (
      <>
        Etsimme opettajia, opiskelijoita ja kaikkia opetuksesta kiinnostuneita
        osallistumaan yhteisön rakentamiseen ja avoimien oppimateriaalien
        kehittämiseen. Voit auttaa monin eri tavoin: kirjojen laadun tarkistamisessa
        tai uusien tekstien luomisessa. Seuraa oikean yläkulman linkkiä lisäohjeisiin.
      </>
    ),
  },
  {
    title: 'Tietoja sivusta',
    description: (
      <>
        Tämä sivusto ja sen sisältö on avointa koodia MIT-lisenssillä. Sisältö (kirjat)
        on luotu ensin tekoälyllä, jota on sen jälkeen täydennetty ihmisten toimesta.
        Itse sivusto on oppikirjaston tekijöiden tekemä ja sen pohjana on käytetty
        Docusaurusta (myös MIT-lisenssi).
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
