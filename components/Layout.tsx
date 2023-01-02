import Link from 'next/link';
import siteConfig from '../site.config.js';
import { Noto_Serif_SC } from '@next/font/google';
import { PropsWithChildren } from 'react';
import { Logo } from './Logo';
import { Email, Github, Linkedin, Twitter } from './social';

const notoSerif = Noto_Serif_SC({
  weight: ['400', '600', '900'],
  subsets: ['chinese-simplified'],
  display: 'swap',
});

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`container mx-auto min-h-screen min-w-[360px] px-5 ${notoSerif.className}`}
    >
      <header className="mx-auto mb-12 mt-8 flex max-w-prose items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex space-x-4">
          <Link href="/about">About</Link>
          <Link href="/tags">Tags</Link>
          <Link href="/rss.xml">Feed</Link>
        </nav>
      </header>
      <main className="mx-auto my-12">{children}</main>
      <footer className="mx-auto my-12 flex max-w-prose items-baseline justify-between max-[480px]:flex-col max-[480px]:items-center max-[480px]:space-y-2">
        <small>
          Copyright © {new Date().getFullYear()} {siteConfig.author.name}. Built
          with <Link href="https://nextjs.org/">Next.js</Link>.
        </small>
        <div className="flex justify-center space-x-1">
          <Github />
          <Twitter />
          <Linkedin />
          <Email />
        </div>
      </footer>
    </div>
  );
};
