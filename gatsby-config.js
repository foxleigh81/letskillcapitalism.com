module.exports = {
  siteMetadata: {
    title: 'Alex Foxleighs blog',
    description: 'The blog of Alexander Foxleigh',
    author: 'Alex Foxleigh',
    siteUrl: 'http://blog.alexfoxleigh.com',
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/foxleigh81',
      },
      {
        name: 'Twitter',
        url: 'https://www.twitter.com/foxleigh81',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/alexfoxleigh/',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-sass-resources',
      options: {
        resources: [
          `${__dirname}/src/helpers/css/_reset.scss`,
          `${__dirname}/src/helpers/css/_variables.scss`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://blog.alexfoxleigh.co.uk',
        policy: [{ userAgent: '*', disallow: '/' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/library/pages`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'alex-foxleigh-blog',
        short_name: 'foxyblog',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        gfm: true,
        excerpt_separator: '<!-- end -->',
        plugins: [
          'gatsby-remark-component',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
