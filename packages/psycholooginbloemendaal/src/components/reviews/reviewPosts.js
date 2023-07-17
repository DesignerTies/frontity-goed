import React from "react";
import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import externalCss from "../style/reviews.css";

const ReviewPostsPage = ({ data, state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  return (
    <>
      <BoxCategory className="inner-wrapper-review-posts">
        {data.items.map(({ type, id }, index) => {
          const post = state.source[type][id];
          return (
            <article key={index} className="review-posts-article">
              <div>
                <div px={2} className="article-inner-wrapper-reviews">
                  <h2>
                    <Html2React html={post.title.rendered} />
                  </h2>
                  <div>
                    <Html2React html={post.content.rendered} />
                  </div>
                  {/* <p>
  						  <Html2React html={post.author} />
  					  </p> */}
                </div>
              </div>
            </article>
          );
        })}
      </BoxCategory>
      <Global styles={css(externalCss)} />
    </>
  );
};

const BoxCategory = styled.div``;

export default connect(ReviewPostsPage);
