const settings = {
  name: "psycholooginbloemendaal",
  state: {
    frontity: {
      url: "https://psycholooginbloemendaal.nl",
      title: "Psycholoog Bloemendaal",
      description: "Website van Psycholoog in Bloemendaal",
      debug: true,
    },
  },
  packages: [
    {
      name: "psycholooginbloemendaal",
      state: {
        theme: {
          menu: [
            // [
            //   "HOME",
            //   "/"
            // ],

            ["THERAPIE & COACHING", "/therapie-coaching/"],
            ["OVER", "/over/"],
            ["WERKWIJZE & TARIEVEN", "/werkwijze-tarieven/"],
            ["REVIEWS", "/reviews/"],
            ["JOURNALISTIEKE PRODUCTIES", "/producties/"],
            ["E-BOEKEN", "/e-books/"],
            ["BLOG", "/blog/"],
            ["IN DE MEDIA", "/media/"],
            ["CONTACT", "/contact/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://wp.psycholooginbloemendaal.nl/wp/wp-json/",
          // api: "http://psycholooginbloemendaal.test/wp-json/",
          // api: "http://psycholooginbloemendaal.dvl.to/wp-json/",
          postTypes: [
            {
              type: "therapie_coaching",
              endpoint: "therapie_coaching",
              archive: "/therapie-coaching",
            },
            {
              type: "reviews",
              endpoint: "reviews",
              archive: "/reviews",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
  ],
};

export default settings;
