import { useEffect } from "react";
import connect from "@frontity/connect";
import { Global, css } from "frontity";
import externalCss from "../style/tc-page.css";
import TCPosts from "./tc-posts";
import BannerTC from "./banner";

const TcPage = ({ actions, state }) => {
  const data = state.source.get(state.router.link);

  useEffect(async () => {
    await actions.source.fetch("/category/tc");
  }, [actions.source]);

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
