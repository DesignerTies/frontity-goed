import { useEffect, useState } from "react";
import connect from "@frontity/connect";
import { loadable } from "frontity";
const Blog = loadable(() => import("./blogposts"));
const Loading = loadable(() => import("../loading"));

const BlogPage = ({ state, actions }) => {
  const [ready, setReady] = useState(false);

  useEffect(async () => {
    await actions.source.fetch("/category/blog");
    setReady(true);
  }, [actions.source]);

  return ready ? (
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
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Loading />
    </div>
  );
};

export default connect(BlogPage);
