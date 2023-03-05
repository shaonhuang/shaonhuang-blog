import { Giscus }  from 'components/giscus';

import siteConfig from 'site.config.js';

export const metadata = {
  title: 'Here’s a little bit about me.',
  description: 'About me',
};

const AboutPage = () => {
  return (
    <article className="prose prose-zinc mx-auto prose-headings:font-black dark:prose-invert">
      <h1>
        <span className="shadow-highlight shadow-franklin dark:shadow-blurple">
            I am...
        </span>
      </h1>
      <p>Hi.</p>
      <hr />
      <Giscus {...siteConfig.giscus} mapping="specific" term="About" />
    </article>
  );
};

export default AboutPage;
