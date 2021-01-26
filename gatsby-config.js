require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const dotenv = require('dotenv');
module.exports = {
  siteMetadata: {
    title: `WebApe`,
    description: `Création de sites web`,
    author: `@Auxane`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'webapecms',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => (doc) => {
          // Your link resolver
           // Pretty URLs for known types
            if (doc.type === 'blog') return "/post/" + doc.uid;
            if (doc.type === 'page') return "/" + doc.uid;
            // Fallback for other types, in case new custom types get created
            return "/doc/" + doc.id;
        },
  
        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children,
        ) => {
          // Your HTML serializer
        },
  
        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. This is required.
        schemas: {
          project_card: require('./src/schemas/project_card.json')
        },
  
        lang: '*',

        prismicToolbar: true,
  
        shouldDownloadImage: ({ node, key, value }) => {
          return true;
        },

        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 50,
        },
  
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
  
        typePathsFilenamePrefix:
          'prismic-typepaths---webapecms',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/static`,
      }
     },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `webape-development`,
        short_name: `webape`,
        start_url: `/`,
        background_color: `#4B474C`,
        theme_color: `#00D1AE`,
        display: `minimal-ui`,
        icon: `src/images/WebApe_favicon_32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Questrial\:400,500,600`,`Open Sans`],
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
