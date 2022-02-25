import React from "react";
import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import { getPostsGroupedByCategoryMedia } from "../../helpers";
import externalCss from "../style/media.css";

const MediaPostsPage = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategoryMedia(state.source);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      {postsPerCategory.map(({ posts, category }, index) => (
        <BoxCategory key={index} className="inner-wrapper-media-posts">
          {posts.map((post, index) => (
            <article key={index} className="media-posts-article">
              <div>
                <div px={2} className="article-inner-wrapper-media">
                  <div>
                    <Html2React html={post.content.rendered} />
                  </div>
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

export default connect(MediaPostsPage);
