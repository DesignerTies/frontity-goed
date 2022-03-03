import Link from "@frontity/components/link";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            reprehenderit sint, dolor quam sapiente totam sunt mollitia enim eum
            rerum vel magnam exercitationem illo vero debitis veniam iusto
            inventore. Odio, magnam? Error, cupiditate magni? Deleniti natus
            autem impedit porro illo vitae? Voluptatem vero facilis veritatis
            ratione inventore, perspiciatis dolorem ab at itaque doloremque cum
            odio explicabo! Odio magnam quibusdam impedit distinctio enim
            reprehenderit eveniet debitis repellat. Totam illum eligendi et,
            nisi adipisci sed sapiente! A neque reiciendis sed asperiores ad
            error, maiores omnis culpa deleniti dolores ea optio dolorem maxime
            velit rem labore expedita praesentium quas facere placeat nulla.
            Error?
          </p>
        </div>
        <MediaPostsPage />
        <div className="links-wrapper">
          <Link link="/blog">MEER BLOGS</Link>
          <Link link="/producties">JOURNALISTIEKE PRODUCTIES</Link>
        </div>
      </div>
    </>
  ) : null;
};

export default connect(MediaPage);
