import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import { getPostsGroupedByCategoryReviewsPage } from "../../helpers";
import externalCss from "../style/reviews.css";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import dayjs from "dayjs";

const ReviewPostsPage = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategoryReviewsPage(state.source);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      {postsPerCategory.map(({ posts, category }, index) => (
        <BoxCategory key={index} className="inner-wrapper-review-posts">
          {posts.map((post, index) => (
            <article key={index} className="review-posts-article">
              <div>
                <div px={2} className="article-inner-wrapper-reviews">
                  <h2>
                    <Html2React html={post.title.rendered} />
                  </h2>
                  <p>
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

export default connect(ReviewPostsPage);
