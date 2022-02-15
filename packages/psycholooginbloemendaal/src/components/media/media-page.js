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
      <div className="gray-line" />
      <div className="media-page-wrapper">
        <div className="text-wrapper-media-page">
          <p>
            Door lange ervaring in de journalistiek word ik soms benaderd door
            collega-journalisten om een onderwerp psychologisch te belichten in
            magazines, op websites en op tv.
          </p>
        </div>
        <MediaPostsPage />
      </div>
    </>
  ) : null;
};

export default connect(MediaPage);
