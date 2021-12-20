import React, { useState } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./home/home";
import Footer from "./footer";
import TcPage from "./tc-page/tc-page";
import OverPage from "./over/over-page";
import WerkwijzePage from "./werkwijze/werkwijze-page";
import ReviewsPage from "./reviews/reviews-page";
import BlogPage from "./blog/blogPage";
import ProductiesPage from "./producties/producties-page";
import ContactPage from "./contact/contact-page";
import Link from "./link";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const [colorChange, setColorchange] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const classes = `${colorChange} dropdown-container`;
  const linkClasses = `${colorChange} link-header`;
  const linkClassesDropdown = `${colorChange} nav-link-dropdown-container`;

  if (typeof window !== "undefined") {
    const changeColorNavbar = () => {
      if (window.scrollY >= 40) {
        setColorchange("colorChanged");
      } else {
        setColorchange("");
      }
    };
    window.addEventListener("scroll", changeColorNavbar);
  }

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      {/* Add the header of the site. */}
      <div className="App">
        <header className={colorChange}>
          {/* <div className="logo">
          </div> */}
          <nav>
            <ul className="main-nav-list">
              <li>
                <Link link="/therapie-coaching/" className={linkClasses}>
                  THERAPIE & COACHING
                </Link>
              </li>
              <li>
                <Link link="/over/" className={linkClasses}>
                  OVER
                </Link>
              </li>
              <li>
                <Link link="/werkwijze-tarieven/" className={linkClasses}>
                  WERKWIJZE & TARIEVEN
                </Link>
              </li>
              <li>
                <Link link="/reviews/" className={linkClasses}>
                  REVIEWS
                </Link>
              </li>
              <li
                className={`${colorChange} dropdown-trigger`}
                onMouseEnter={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
              >
                &MEER ▼
              </li>
              <li>
                <Link link="/contact/" className={linkClasses}>
                  CONTACT
                </Link>
              </li>
            </ul>
            {dropDown && (
              <div
                className={classes}
                onMouseEnter={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
              >
                <ul className={colorChange}>
                  <li className="dropdown-item">
                    <Link link="/blog/" className={linkClassesDropdown}>
                      BLOG
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <a link="#" className={linkClassesDropdown}>
                      E-BOOKS
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <Link link="/producties/" className={linkClassesDropdown}>
                      PRODUCTIES
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            <Header className="navigation" colorChange={colorChange} />
          </nav>
        </header>
      </div>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={state.router.link == "/"} />
          <TcPage when={state.router.link == "/therapie-coaching/"} />
          <OverPage when={state.router.link == "/over/"} />
          <WerkwijzePage when={state.router.link == "/werkwijze-tarieven/"} />
          <ReviewsPage when={state.router.link == "/reviews/"} />
          <BlogPage when={state.router.link == "/blog/"} />
          <ProductiesPage when={state.router.link == "/producties/"} />
          <ContactPage when={state.router.link == "/contact/"} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Link link="/" className="logo">
        <div></div>
      </Link>
      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    overflow-x: hidden;
  }
  #root {
    overflow-x: hidden;
  }
  a,
  a:visited {
    text-decoration: none;
    color: #000;
  }
  a.colorChanged {
    color: white;
  }
  li {
    list-style: none;
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: transparent; 
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 10;
  }
  header.colorChanged {
    background-color: #51615F;
  }
  .main-nav-list {
    margin-top: 1.3rem;
    display: flex;
    justify-content: space-between;
  }
  .main-nav-list li {
    margin-right: 1.4rem;
    color: #51615F;
    font-size: 13px;
  }
  nav ul li.colorChanged {
    color: #fff;
  }
  .link-header {
    color: #51615F !important;
    font-size: 13px;
    font-weight: normal;
  }
  .link-header.colorChanged {
    color: #fff !important;
  }
  .logo {
    width: 180px;
    height: 95px;
    background-image: url("https://raw.githubusercontent.com/DesignerTies/frontity-goed/d0d88f9ce49c54e427a21dae30888eeef80f8967/packages/psycholooginbloemendaal/src/components/assets/logo.svg");
    position: absolute;
    top: -5%;
    left: 2%;
    transform: translate(50%, 50%);
  }
  .dropdown-trigger {
    &:hover {
      cursor: pointer;
    }
  }
  .dropdown-container {
    position: relative;
    display: inline-block;
    margin-left: 33rem;
  }
  @media screen and (max-width: 1200px) {
    .logo {
      top: 1%;
      transform: scale(0.9, 0.9);
    }
  }
  .nav-link-dropdown-container {
    font-size: 13px;
    color: #51615F !important; 
    font-weight: normal;
    &.colorChanged {
      color: #fff !important;
    }
  }

  @media screen and (max-width: 1075px) {
    .logo {
      top: 4%;
    }
  }
 @media screen and (max-width: 950px) {
    .main-nav-list {
      display: none;
    }
    .dropdown-trigger {
      display: none;
    }
    header {
      height: 50px;
    }
  @keyframes slideup {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
      transform: translate(23%, 40%)
    }
  }
`;

// const HeadContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: transparent;
//   width: 100%;
//   height: 40px;
//   position: fixed;
//   top: 0px;
// `;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
