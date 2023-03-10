import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from '@tabler/icons-react';

import { type Icon as TablerIcon } from '@tabler/icons-react';

import siteConfig from 'site.config.js';

export type SocialProps = {
  href: string;
  title: string;
  Icon: TablerIcon;
};

export const Social = ({ href, title, Icon }: SocialProps) => {
  return (
    <a href={href} title={title} target="_blank" rel="noreferrer me">
      <Icon className="inline-block stroke-[1.6px]" size="1em" />
    </a>
  );
};

export const Github = () => (
  <Social
    href={siteConfig.links.github}
    title="GitHub"
    Icon={IconBrandGithub}
  />
);

export const Twitter = () => (
  <Social
    href={siteConfig.links.twitter}
    title="Twitter"
    Icon={IconBrandTwitter}
  />
);

export const Linkedin = () => (
  <Social
    href={siteConfig.links.linkedin}
    title="LinkedIn"
    Icon={IconBrandLinkedin}
  />
);

export const Email = () => (
  <Social
    href={`mailto:${siteConfig.author.email}`}
    title="Email"
    Icon={IconMail}
  />
);
