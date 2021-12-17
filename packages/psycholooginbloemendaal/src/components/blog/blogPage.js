import connect from "@frontity/connect";
import Blog from "./blogposts";

const BlogPage = () => {
  return (
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
  );
};

export default connect(BlogPage);
