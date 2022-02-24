import connect from "@frontity/connect";
import ReviewPosts from "./reviews-posts";
import { useLayoutEffect } from "react";

const Reviews = ({ actions }) => {
  useLayoutEffect(() => {
    actions.source.fetch("/category/reviews");
  }, [actions.source]);

  return (
    <div className="reviews-wrapper">
      <h1 className="reviews-title">Reviews</h1>
      <ReviewPosts className="review-tekst" />
    </div>
  );
};

export default connect(Reviews);
