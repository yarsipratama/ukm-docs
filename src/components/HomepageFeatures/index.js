import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kelola Keanggotaan dengan Rapi',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Pendataan anggota UKM menjadi lebih mudah, mulai dari pendaftaran, status keaktifan,
          hingga riwayat keanggotaan—semua tersimpan secara terpusat dan aman.
      </>
    ),
  },
  {
    title: 'Kegiatan Lebih Terstruktur',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Rencanakan, kelola, dan dokumentasikan seluruh kegiatan UKM dalam satu sistem.
          Setiap event tercatat dengan jelas dan mudah dipantau oleh pengurus maupun pihak kampus.
      </>
    ),
  },
  {
    title: 'Mendukung Tata Kelola Kampus',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Data UKM dapat diakses sesuai peran pengguna, membantu pihak kampus
          dalam monitoring, evaluasi, dan pelaporan kegiatan kemahasiswaan.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
