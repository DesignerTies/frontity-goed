import { useEffect } from "react";
import connect from "@frontity/connect";
import { loadable } from "frontity";
const ReviewPostsPage = loadable(() => import("./reviewPosts"));
import citate from "../../../static/citate.svg";
import Link from "@frontity/components/link";

const ReviewsPage = ({ state }) => {
  const data = state.source.get(state.router.link);

  return data.isReady ? (
    <>
      <div className="banner-review-page">
        <div className="title-review-page">
          <h1 style={{ textTransform: "uppercase" }}>{data.type}</h1>
        </div>
      </div>
      <div className="review-page-wrapper">
        <img src={citate} alt="citate reviews image" />
        <ReviewPostsPage data={data} />
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
