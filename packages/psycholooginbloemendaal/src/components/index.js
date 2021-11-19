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
  const classes = `${colorChange}`;



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
          {/* <div className="logo">
          </div> */}
          <nav>
            <ul>
              <li className={colorChange}>THERAPIE & COACHING</li>    
              <li className={colorChange}>OVER</li>
              <li className={colorChange}>WERKWIJZE & TARIEVEN</li>
              <li className={colorChange}>REVIEWS</li>
              <li className={colorChange} onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
                &MEER
              </li>
              <li className={colorChange}>CONTACT</li>
            </ul>
            <Header className="navigation" colorChange={colorChange}/> 
          </nav>
            
          {/* {dropDown && (
            <ul className={colorChange} onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
              <li className="dropdown-item"><a href="/blog/" className={colorChange}>BLOG</a></li>
              <li className="dropdown-item">E-BOOKS</li>
              <li className="dropdown-item">PRODUCTIES</li>
            </ul>
          )} */}
        </header>          
        
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
      
      <div className="logo"></div>
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
    background-color: aqua;
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
    height: 50px;
    position: fixed;
    top: 0px;
    z-index: 10;
  }
  header.colorChanged {
    background-color: #395174;
  }
  nav ul {
    margin-top: 1.3rem;
    display: flex;
    justify-content: space-between;
  }
  nav ul li {
    margin-right: 1.4rem;
    color: #51615F;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
  }
  nav ul li.colorChanged {
    color: #fff;
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
    position: absolute;
    margin-left: 45rem;
    width: 60px;
    height: 30px;
    margin-top: .9rem;
    opacity: 0.7;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    &:hover {
      cursor: pointer;
    }
    &.colorChanged {
      color: #fff;
      opacity: 1;
    }
    &.colorChanged a {
      color: #fff;
    }
  }

  @media screen and (max-width: 1200px) {
    .logo {
      left: -5%;
    }
  }

  @media screen and (max-width: 1075px) {
    .logo {
      top: -2%;
    }
  }

  @media screen and (max-width: 950px) {
    .dropdown-trigger {
      display: none;
    }
  }
  // ul {
  //   background-color: transparent;
  //   width: 100px;
  //   height: 100px;
  //   border-radius: 5px;
  //   position: aboslute;
  //   transform: translate(23%, 40%);
  //   animation: slideup .5s;

  //   &:hover {
  //     cursor: pointer;
  //   }
  // }
  // ul.colorChanged {
  //   background-color: #395174;
  //   color: white;
  // }
  // .dropdown-item {
  //   margin: .8em;
  //   font-size: smaller;

  //   &:hover {
  //     border-bottom: solid #fff 2px;
  //   }
  // }

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
