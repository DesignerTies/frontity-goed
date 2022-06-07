import { useEffect, useState } from "react";
import connect from "@frontity/connect";
import { loadable, Global, css } from "frontity";
import externalCss from "../style/tc-page.css";
const TCPosts = loadable(() => import("./tc-posts"));
const BannerTC = loadable(() => import("./banner"));

const TcPage = ({ actions, state }) => {
  const data = state.source.get(state.router.link);
  const [section, setSection] = useState();

  useEffect(async () => {
    await actions.source.fetch("/category/tc");
    console.log(state.router.link);
    if (state.frontity.options.section) {
      setSection(state.frontity.options.section);
    }
  }, [actions.source, state.frontity.options.section]);

  if (section) {
    window.location.replace(`#${section}`);
  }

  return data.isReady ? (
    <>
      <BannerTC />
      <div className="tc-wrapper">
        <TCPosts />
      </div>
      <p id="citate-tc">
        'You can't go back and change the beginning, but you can start where you
        are and change the ending'
      </p>
      <Global styles={css(externalCss)} />
    </>
  ) : null;
};

export default connect(TcPage);
