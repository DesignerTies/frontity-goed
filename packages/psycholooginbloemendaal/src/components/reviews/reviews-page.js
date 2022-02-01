import connect from "@frontity/connect";
import ReviewPostsPage from "./reviewPosts";
import citate from "../../../static/citate.svg";

const ReviewsPage = () => {
  return (
    <>
      <div className="banner-review-page">
        <div className="title-review-page">
          <h1>REVIEWS</h1>
        </div>
      </div>
      <div className="review-page-wrapper">
        <img src={citate} alt="citate reviews image" />
        <ReviewPostsPage />
        <div className="center-button">
          <button className="contact">NEEM CONTACT OP</button>
        </div>
      </div>
    </>
  );
};

export default connect(ReviewsPage);
