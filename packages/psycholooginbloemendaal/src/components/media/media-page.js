import Link from "@frontity/components/link";
import connect from "@frontity/connect";
import { loadable } from "frontity";
import { useEffect } from "react";
const MediaPostsPage = loadable(() => import("./mediaPosts"));

const MediaPage = ({ actions, state }) => {
  const data = state.source.get(state.router.link);

  useEffect(async () => {
    await actions.source.fetch("/category/media");
  }, [actions.source]);

  return data.isReady ? (
    <>
      <div className="banner-media-page">
        <div className="media-page-title">
          <h1>IN DE MEDIA</h1>
        </div>
      </div>
      <div className="gray-line" />
      <div className="media-page-wrapper">
        <MediaPostsPage />
        <div className="links-wrapper">
          <Link link="/blog">BLOGS</Link>
          <Link link="/producties">JOURNALISTIEKE PRODUCTIES</Link>
        </div>
      </div>
    </>
  ) : null;
};

export default connect(MediaPage);
