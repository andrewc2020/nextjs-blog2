/* next.config.js  */
module.exports = {
    i18n: {
      locales: ["fr"],
      defaultLocale: "fr",
    },
    tsconfigPath:"./",
    images:{
      domains: ['ik.imagekit.io']

    },
    
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
      secondSecret: process.env.SECOND_SECRET, // Pass through env variables
      image_key: process.env.NEXT_PUBLIC_IMAGE_KEY, //?
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
      image_key: process.env.NEXT_PUBLIC_IMAGE_KEY, //?
      public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY
    },
  };