import { useEffect } from "react";
import connect from "@frontity/connect";
import { Global, css } from "frontity";
import OverPosts from "./over-post";
import externalCss from "../style/over-page.css";

const OverPage = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  useEffect(async () => {
    await actions.source.fetch("/category/over");
  }, [actions.source]);

  return data.isReady ? (
    <>
      <div className="banner-over-page" role="img">
        <div className="title-over-page">
          <h1>OVER MIJ</h1>
        </div>
      </div>
      <div className="flex-over-wrapper">
        <div className="img-over-page" role="img" />
        <OverPosts />
        <div className="text-wrapper-over-page">
          <p>
            'You can't go back and change the beginning, but you can start where
            you are and change the ending' <br /> <span>C.S. Lewis</span>
          </p>
        </div>
      </div>
      <Global styles={css(externalCss)} />
    </>
  ) : null;
};

export default connect(OverPage);
