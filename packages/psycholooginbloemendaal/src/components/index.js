import React, { useState } from 'react';
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./home/home"
import Kaas from "./kaas/kaas"
import Blog from "./blog/blogposts"

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
  const [colorChange, setColorchange] = useState('');
  const [dropDown, setDropDown] = useState(false);



  if (typeof window !== "undefined") {
      const changeColorNavbar = () => {
        if(window.scrollY >= 40) {
          setColorchange('colorChanged')
        } else {
          setColorchange('')
        }
      };
      window.addEventListener("scroll", changeColorNavbar);
  }

  console.log(dropDown)

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <div className="App">
        <header className={colorChange}>
          <Header className="navigation"/>   
          <div className="dropdown-trigger" onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
            &MEER
          </div>
          {dropDown && (
            <ul className={colorChange} onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
              <li className="dropdown-item">BLOG</li>
              <li className="dropdown-item">E-BOOKS</li>
              <li className="dropdown-item">PRODUCTIES</li>
            </ul>
          )}
        </header>          
        {/* <Kaas /> */}
      </div>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          
          <Home when={state.router.link == '/'} />
          <Kaas when={state.router.link == '/kaas/'} />
          <Blog when={state.router.link == '/blog/'} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: aqua;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: initial;
    background-color: transparent; 
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0px;
    z-index: 1;
  }
  header.colorChanged {
    background-color: #395174;
  }
  .dropdown-trigger {
    display: flex;
    flex-direction: colum;
    align-items: flex-start;
    width: 60px;
    height: 30px;
    margin-top: 14.2px;
    opacity: 0.7;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 560px) {
    .dropdown-trigger {
      display: none;
    }
  }
  ul {
    background-color: transparent;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    position: aboslute;
    transform: translate(-60%, 40%);
    animation: slideup .5s;

    &:hover {
      cursor: pointer;
    }
  }
  ul.colorChanged {
    background-color: #395174;
  }
  .dropdown-item {
    margin: .8em;
    font-size: smaller;

    &:hover {
      border-bottom: solid #fff 2px;
    }
  }

  @keyframes slideup {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
      transform: translate(-60%, 40%)
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
