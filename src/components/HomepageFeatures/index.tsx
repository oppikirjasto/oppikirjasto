import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Mikä?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Oppikirjasto.fi on uusi, avoin, maksuton ja kattava digitaalinen oppimateriaalikirjasto yläkoulun oppilaille Suomessa. Tekoälyn avulla generoidut oppikirjat kattavat koko yläasteen opetussuunnitelman kaikissa aineissa. Tavoitteemme on tarjota kaikille Suomen koululaisille parhaimmat mahdolliset opetusmateriaalit ja näin tehdä oppimisesta tasavertaisempaa.
      </>
    ),
  },
  {
    title: 'Miten voin osallistua?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
