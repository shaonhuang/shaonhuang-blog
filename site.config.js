const siteConfig = {
  title: 'shaonhuang',
  description: "Shaonhuang's Blog",
  url: 'https://shaonhuang.app',
  author: { name: 'shaonhuang' },
  twitter: {
    handle: '@yukuaihuang',
  },
  /** @type {import('@giscus/react').GiscusProps} */
  giscus: {
    repo: 'shaonhuang/shaonhuang-blog',
    // repoId: 'MDEwOlJlcG9zaXRvcnkxNTA1OTAxMTg=',
    category: 'Announcements',
    // categoryId: 'DIC_kwDOCPnSps4CSV3-',
    strict: '1',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    theme: 'preferred_color_scheme',
    lang: 'en',
  },
};

export default siteConfig;
