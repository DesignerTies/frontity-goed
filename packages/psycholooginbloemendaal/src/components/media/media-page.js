import connect from "@frontity/connect";
import { useEffect } from "react";
import MediaPostsPage from "./mediaPosts";

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
      <MediaPostsPage />
    </>
  ) : null;
};

export default connect(MediaPage);
