const settings = {
  name: "test-frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Psycholoog Bloemendaal",
      description: "Website van Psycholoog in Bloemendaal",
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
          url: "https://corleone-paah.nl/wp",
          postsPage: "/posts",
          homepage: "/home",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
  ],
};

export default settings;
