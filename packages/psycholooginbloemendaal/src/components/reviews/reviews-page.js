import connect from "@frontity/connect";
import ReviewPostsPage from "./reviewPosts";

const ReviewsPage = () => {
  return (
    <>
      <div className="banner-review-page">
        <div className="title-review-page">
          <h1>REVIEWS</h1>
        </div>
      </div>
      <div className="review-page-wrapper">
        <img
          src="https://raw.githubusercontent.com/DesignerTies/frontity-goed/0a598ca22a3dbc4ff4eb041463fdf3ba23b6f9e6/packages/psycholooginbloemendaal/src/components/assets/citate.svg"
          alt="citate reviews image"
        />
        <ReviewPostsPage />
        <div className="center-button">
          <button className="contact">NEEM CONTACT OP</button>
        </div>
      </div>
    </>
  );
};

export default connect(ReviewsPage);
