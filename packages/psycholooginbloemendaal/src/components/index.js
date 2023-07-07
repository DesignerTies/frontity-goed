import React, { useState, useEffect } from "react";
import { loadable, Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import ArchiveTc from "./tc-page/archive-tc";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./home/home";
import Footer from "./footer";
const OverPage = loadable(() => import("./over/over-page"));
const WerkwijzePage = loadable(() => import("./werkwijze/werkwijze-page"));
const ReviewsPage = loadable(() => import("./reviews/reviews-page"));
const BlogPage = loadable(() => import("./blog/blogPage"));
const ProductiesPage = loadable(() => import("./producties/producties-page"));
const MediaPage = loadable(() => import("./media/media-page"));
const ContactPage = loadable(() => import("./contact/contact-page"));
const Ebooks = loadable(() => import("./e-books"));
import Link from "./link";
import logo from "../../static/logo.svg";

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

  useEffect(() => {
    if (state.router.link === "/fb/") {
      state.router.link = "/";
    }
  });

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="nl" />
        <meta property="og:title" content="Psycholoog in Bloemendaal" />
        <meta
          property="og:url"
          content="https://www.psycholooginbloemendaal.nl"
        />
        <meta
          property="og:image"
          content="https://live.staticflickr.com/65535/51695227602_0d0eecb4d7_b.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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
                    <Link link="/e-books/" className={linkClassesDropdown}>
                      E-BOOKS
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link link="/producties/" className={linkClassesDropdown}>
                      PRODUCTIES
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link link="/media/" className={linkClassesDropdown}>
                      IN DE MEDIA
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
          <Home when={state.router.link === "/"} />
          <OverPage when={state.router.link === "/over/"} />
          <WerkwijzePage when={state.router.link === "/werkwijze-tarieven/"} />
          <ReviewsPage when={state.router.link === "/reviews/"} />
          <BlogPage when={state.router.link === "/blog/"} />
          <ProductiesPage when={state.router.link === "/producties/"} />
          <MediaPage when={state.router.link === "/media/"} />
          <ContactPage when={state.router.link === "/contact/"} />
          <Ebooks when={state.router.link === "/e-books/"} />
          <ArchiveTc when={data.isTherapieCoachingArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <Link link="/" className="logo">
        <img src={logo} />
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
  .col-2 span {
    padding-bottom: 0 !important;
  }
  @media only screen and (max-width: 835px) {
    .col-2 {
      /* background-color: black;  */
      grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
      justify-items: center;
      align-items: center;
    }
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
    position: absolute;
    top: -3%;
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
  }`;

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
