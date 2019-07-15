module.exports = {
  siteMetadata: {
    title: '✊ Let\'s kill capitalism',
    description: 'Capitalism has failed us. Let\'s kill it',
    author: 'Alex Foxleigh',
    siteUrl: 'https://letskillcapitalism.com',
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Maven Pro:400,500,700,900'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass-resources',
      options: {
        resources: [
          `${__dirname}/src/helpers/css/_reset.scss`,
          `${__dirname}/src/helpers/css/_variables.scss`,
          `${__dirname}/src/helpers/css/_mixins.scss`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://letskillcapitalism.com',
        policy: [{ userAgent: '*', allow: '/' }],
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
        path: `${__dirname}/library`,
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
        background_color: '#db2534',
        theme_color: '#db2534',
        display: 'minimal-ui',
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
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
          'gatsby-remark-emoji',
          'gatsby-remark-copy-linked-files',
          '@weknow/gatsby-remark-twitter',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
              showCaptions: true,
              linkImagesToOriginal: false,
              quality: 90,
            },
          },
          {
            resolve: '@raae/gatsby-remark-oembed',
            options: {
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                exclude: ['Twitch', 'Flickr'],
              },
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
