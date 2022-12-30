import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import siteConfig from '../site.config.js';
import '../styles/globals.css';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${siteConfig.title}`}
        defaultTitle={siteConfig.title}
        description={siteConfig.description}
        twitter={{
          cardType: 'summary',
          site: siteConfig.twitter.handle,
          handle: siteConfig.twitter.handle,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
