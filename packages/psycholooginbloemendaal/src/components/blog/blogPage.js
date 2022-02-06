import { useEffect } from "react";
import connect from "@frontity/connect";
import Blog from "./blogposts";

const BlogPage = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  useEffect(async () => {
    await actions.source.fetch("/category/blog");
  }, [actions.source]);
  return data.isReady ? (
    <>
      <div className="banner-blog-page">
        <div className="title-blog-page">
          <h1>BLOG</h1>
        </div>
      </div>
      <div className="blog-page-wrapper">
        <Blog />
      </div>
    </>
  ) : null;
};

export default connect(BlogPage);
