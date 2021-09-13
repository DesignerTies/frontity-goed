const settings = {
  "name": "test-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Psycholoog Bloemendaal",
      "description": "Website voor psycholooginbloemendaal.nl"
    }
  },
  "packages": [
    {
      "name": "psycholooginbloemendaal",
      "state": {
        "theme": {
          "menu": [
            // [
            //   "HOME",
            //   "/"
            // ],
            
            ["THERAPIE & COACHING", "/therapie-coaching/"],
            ["OVER", "/over-mij/"],
            ["WERJWIJZE & TARIEVEN", "/werkwijze-tarief/"],
            // ["E-BOEKEN", "http://127.0.0.1:4242/checkout.html"],
            // ["JOURNALISTIEKE PRODUCTIES", "/journalistieke-producties/"],
            ["ERVARINGEN", "/ervaringen/"],
            ["CONTACT", "/contact/"]
            // ["BLOG", "/blog/"],
            // ["TEST", "/kaas/"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true,
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://corleone-paah.nl/wp",
          "postsPage": "/posts",
          "homepage": "/home"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
