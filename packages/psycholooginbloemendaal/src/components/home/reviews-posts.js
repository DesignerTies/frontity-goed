import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import { getPostsGroupedByCategoryReviews } from "../../helpers";
import externalCss from "../style/home.css";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import dayjs from "dayjs";
import citate from "../../../static/citate.svg";

const ReviewPosts = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategoryReviews(state.source);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      {postsPerCategory.map(({ posts, category }, index) => (
        <BoxCategory key={index} className="inner-wrapper-review-posts">
          {posts.map((post, index) => (
            <article key={index} className="review-posts-article">
              <div>
                <div px={2} className="article-inner-wrapper-reviews">
                  <img src={citate} alt="" id="citate" />
                  <p>
                    &#8192; <Html2React html={post.title.rendered} />
                    <Html2React html={post.content.rendered} />
                  </p>
                  {/* <p>
							  <Html2React html={post.author} />
						  </p> */}
                </div>
              </div>
            </article>
          ))}
        </BoxCategory>
      ))}
      <Global styles={css(externalCss)} />
    </>
  );
};

const FlexContainer = styled.div``;

const BoxCategory = styled.div``;

export default connect(ReviewPosts);
