import connect from "@frontity/connect";
import { loadable, Global, css } from "frontity";
import externalCss from "../style/tc-page.css";
import TCPostList from "./tc-post-list";
const BannerTC = loadable(() => import("./banner"));

const ArchiveTC = ({ state }) => {
  const data = state.source.get(state.router.link);
  return data.isReady ? (
    <>
      <BannerTC />
      <div className="tc-wrapper">
        <TCPostList posts={data} />
      </div>
      <p id="citate-tc">
        'You can't go back and change the beginning, but you can start where you
        are and change the ending'
      </p>
      <Global styles={css(externalCss)} />
    </>
  ) : null;
};

export default connect(ArchiveTC);
