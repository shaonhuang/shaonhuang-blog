import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import Giscus from '@giscus/react';

import { formatInTimeZone } from 'date-fns-tz';

import { Layout, mdxComponents } from '../../components';
import { postSlugs, getMdxSourceBySlug } from '../../lib/content';

import siteConfig from '../../site.config.js';

interface PostPageProps {
  source: MDXRemoteSerializeResult;
  formattedDate: string;
}

const PostPage: NextPage<PostPageProps> = ({ source, formattedDate }) => {
  const description =
    source.frontmatter?.description ?? source.frontmatter?.title;
  return (
    <Layout>
      <NextSeo title={source.frontmatter?.title} description={description} />
      <article className="prose prose-zinc mx-auto prose-headings:font-black dark:prose-invert">
        <h1>
          <span className="shadow-highlight shadow-franklin dark:shadow-blurple">
            {source.frontmatter?.title}
          </span>
        </h1>
        <time
          className="mr-4 text-zinc-500 dark:text-zinc-400"
          dateTime={source.frontmatter?.date}
        >
          {formattedDate}
        </time>
        <span className="space-x-2 text-sm uppercase text-zinc-500 dark:text-zinc-400">
          {(source.frontmatter?.tags as unknown as string[]).map((tag) => (
            <span className="before:content-['#']" key={tag}>
              {tag}
            </span>
          ))}
        </span>
        <MDXRemote {...source} components={mdxComponents} />
        <hr />
        <Giscus
          {...siteConfig.giscus}
          mapping="specific"
          term={source.frontmatter?.title}
        />
      </article>
    </Layout>
  );
};

interface PostPageParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<
  PostPageProps,
  PostPageParams
> = async ({ params }) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error('No post slug found during getStaticProps');
  }
  const source = await getMdxSourceBySlug(slug);
  const date = new Date(source.frontmatter?.date ?? '1970-01-01');
  const formattedDate = formatInTimeZone(date, 'UTC', 'yyyy-MM-dd');

  return {
    props: {
      source,
      formattedDate,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postSlugs
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;