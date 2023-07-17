import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import { getPostsGroupedByCategoryReviews } from "../../helpers";
import externalCss from "../style/home.css";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import dayjs from "dayjs";
import citate from "../../../static/citate.svg";

const ReviewPosts = ({ state, actions, libraries }) => {
  useEffect(() => {
    actions.source.fetch("/reviews/");
  }, []);

  const data = state.source.get("/reviews/");

  const Html2React = libraries.html2react.Component;

  return data.isReady ? (
    <>
      <BoxCategory className="inner-wrapper-review-posts">
        <article className="review-posts-article">
          <div>
            <div px={2} className="article-inner-wrapper-reviews">
              <img src={citate} alt="" id="citate" />
              <p>
                &#8192;{" "}
                <Html2React
                  html={
                    state.source[data.items[0].type][data.items[0].id].title
                      .rendered
                  }
                />
                <Html2React
                  html={
                    state.source[data.items[0].type][data.items[0].id].content
                      .rendered
                  }
                />
              </p>
              {/* <p>
  						  <Html2React html={post.author} />
  					  </p> */}
            </div>
          </div>
        </article>
      </BoxCategory>
      <Global styles={css(externalCss)} />
    </>
  ) : null;
};

const BoxCategory = styled.div``;

export default connect(ReviewPosts);
