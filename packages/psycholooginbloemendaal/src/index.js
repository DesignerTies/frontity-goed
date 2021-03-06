import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const psycholooginbloemendaal = {
  name: "psycholooginbloemendaal",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        switch (state.router.link) {
          case "/":
            await Promise.all([
              actions.source.fetch("/category/tc"),
              actions.source.fetch("/category/reviews"),
            ]);
          case "/over/":
            await actions.source.fetch("/category/over");
          case "/werkwijze-tarieven":
            await actions.source.fetch("/category/werkwijze");
          case "/blog/":
            await actions.source.fetch("/category/blog");
          case "/producties":
            await actions.source.fetch("/category/producties");
          case "/media/":
            await actions.source.fetch("/category/media");
        }
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default psycholooginbloemendaal;
