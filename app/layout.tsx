import React from 'react';

import Link from 'next/link';
import { Noto_Serif_SC } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'

import { Analytics } from 'components/analytics';
import { Logo } from 'components/logo';
import {
  Github,
  Twitter,
  Linkedin,
  Email,
} from 'components/social';

import { globalMetadata } from './metadata';

import siteConfig from 'site.config.js';

import './globals.css';
import 'katex/dist/katex.min.css';

export const metadata = globalMetadata;

const notoSerif = Noto_Serif_SC({
  weight: ['400', '600', '900'],
  display: 'swap',
  variable: '--font-noto-serif-sc',
  adjustFontFallback: false,
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="bg-zinc-50 dark:bg-zinc-900 dark:text-white">
      <body>
        <div
          className={`container mx-auto min-h-screen min-w-[360px] px-5 ${notoSerif.variable} font-serif`}
        >
          <header className="mx-auto mb-12 mt-8 flex max-w-prose items-center justify-between">
            <Link href="/"  aria-label={`Home | ${siteConfig.title}`}>
              <Logo />
            </Link>
            <nav className="flex space-x-4">
              <Link href="/about">About</Link>
              <Link href="/tags">Tags</Link>
              <a href="/rss.xml" target="_blank">
                Feed
              </a>
            </nav>
          </header>
          <main className="mx-auto my-12">{children}</main>
          <footer className="mx-auto my-12 flex max-w-prose items-baseline justify-between max-[480px]:flex-col max-[480px]:items-center max-[480px]:space-y-2">
            <small>
              Copyright © {new Date().getFullYear()} {siteConfig.author.name}.
              Built with{' '}
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                Next.js
              </a>
              .
            </small>
            <div className="flex justify-center space-x-1">
              <Github />
              <Twitter />
              <Linkedin />
              <Email />
            </div>
          </footer>
        </div>
        <Analytics />
        <GoogleAnalytics gaId="G-ZL0PW4JKJW" />
      </body>
    </html>
  );
};

export default RootLayout;
