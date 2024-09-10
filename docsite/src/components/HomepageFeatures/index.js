import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Rebuild',
    Svg: require('@site/static/img/code-solid.svg').default,
    description: (
      <>
        All our documentation for building new sites in the Social Driver theme.
      </>
    ),
    link: 'docs/rebuild',
  },
  {
    title: 'Maintain',
    Svg: require('@site/static/img/code-branch-solid.svg').default,
    description: (
      <>
        All our documentation specific to maintenance client sites.
      </>
    ),
    link: 'docs/maintenance',
  },
  {
    title: 'Learn',
    Svg: require('@site/static/img/gears-solid.svg').default,
    description: (
      <>
        Everything else the dev team has found useful and deemed worthy of sharing, from online tools to Youtube tutorials.
      </>
    ),
    link: 'docs/learn',
  },
];

function Feature({Svg, title, description, link}) {
  return (
  
      <div className={clsx('col col--4')}>
          <a href={link}>
            <div className="text--center">
              <Svg style={{width:'150px', fill:'#ec0f67',}}className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading style={{color:"#080808",}} as="h3">{title}</Heading>
              <p style={{color:"#080808",}}>{description}</p>
            </div>
        </a>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="row" style={{margin:'60px 0'}}>
      {FeatureList.map((feature, idx) => (
        <Feature 
          key={idx} 
          Svg={feature.Svg} 
          title={feature.title} 
          description={feature.description} 
          link={feature.link} 
        />
      ))}
    </div>
  );
}
