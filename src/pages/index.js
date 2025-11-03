import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logoUrl = useBaseUrl('/img/logo.png');

  return (
    <header className={styles.heroBanner}>
      {/* Top half - Yellow with logo and ALL content */}
      <div className={styles.heroTop}>
        <div className="container">
          <div className={styles.heroLogo}>
            <img
              src={logoUrl}
              alt="Enthusiast Logo"
            />
          </div>

          <h1 className={styles.heroTitle}>
            {siteConfig.title}
          </h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            A comprehensive guide to implementing RAG-powered AI agents for
            e-commerce workflows, with tutorials, examples, and best practices.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to={useBaseUrl('/docs/intro')}>
              Get Started →
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to={useBaseUrl('/blog')}>
              Read the Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom half - Black background for features */}
      <div className={styles.heroBottom}></div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Open-source AI framework for e-commerce workflows">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
