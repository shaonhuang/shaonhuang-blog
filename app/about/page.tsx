import { Giscus } from 'components/giscus';

import siteConfig from 'site.config.js';

export const metadata = {
  title: 'Here’s a little bit about me.',
  description: 'About me',
};

const AboutPage = () => {
  return (
    <article className="prose prose-zinc mx-auto dark:prose-invert dark:prose-invert prose-headings:font-black">
      <h1>Here’s a little bit about me.</h1>
      <p>Hi.</p>
      <hr />
      <Giscus {...siteConfig.giscus} mapping="specific" term="About" />
    </article>
  );
};

export default AboutPage;
