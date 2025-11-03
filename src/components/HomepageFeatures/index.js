import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FaBrain, FaShoppingCart, FaServer } from 'react-icons/fa'; // ADD THIS LINE

const FeatureList = [
    {
      title: 'RAG-Powered AI Agents',
      Icon: FaBrain,  // Changed from Svg
      description: (
        <>
          Built-in retrieval-augmented generation combines vector search with
          LLM capabilities to ground responses in your actual product catalog
          and documentation.
        </>
      ),
    },
    {
      title: 'E-Commerce Ready',
      Icon: FaShoppingCart,  // Changed from Svg
      description: (
        <>
          Pre-built connectors for PIM, CMS, and Shopify. Start indexing your
          product data in minutes with <code>docker-compose up</code>.
        </>
      ),
    },
    {
      title: 'Self-Hosted & Flexible',
      Icon: FaServer,  // Changed from Svg
      description: (
        <>
          Deploy with your choice of LLM providers—OpenAI, Mistral, LLaMA, or
          Deepseek. Keep sensitive product data on-premises with full control.
        </>
      ),
    },
  ];

function Feature({Icon, title, description}) {  // Changed Svg to Icon
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <Icon className={styles.featureSvg} style={{fontSize: '5rem'}} />
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
