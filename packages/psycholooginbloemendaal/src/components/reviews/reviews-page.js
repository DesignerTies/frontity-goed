import { useEffect } from "react";
import connect from "@frontity/connect";
import ReviewPostsPage from "./reviewPosts";
import citate from "../../../static/citate.svg";
import Link from "@frontity/components/link";

const ReviewsPage = ({ actions, state }) => {
  const data = state.source.get(state.router.link);

  useEffect(async () => {
    await actions.source.fetch("/category/reviews");
  }, [actions.source]);

  return data.isReady ? (
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
          <Link className="contact" link={"/contact"}>
            NEEM CONTACT OP
          </Link>
        </div>
      </div>
    </>
  ) : null;
};

export default connect(ReviewsPage);
