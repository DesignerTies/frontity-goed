const settings = {
  "name": "test-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            ["OVER", "over-mij"],
            ["THERAPIE & COACHING", "therapie-coaching"],
            ["WERJWIJZE & TARIEF", "werkwijze-tarief"],
            ["E-BOEKEN", "localhost:4242/checkout.html"],
            ["JOURNALISTIEKE PRODUCTIES", "journalistieke-producties"],
            ["ERVARINGEN", "ervaringen"],
            ["Blog", "blog"],
            ["Test", "kaas"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
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
