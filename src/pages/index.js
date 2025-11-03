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
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          {/* Add logo */}
          <div className={styles.heroLogo}>
            <img
              src={logoUrl}
              alt="Enthusiast Logo"
              style={{height: '80px', marginBottom: '1.5rem'}}
            />
          </div>

          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
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
