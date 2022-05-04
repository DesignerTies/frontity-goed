import React from "react";
import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import { getPostsGroupedByCategoryMedia } from "../../helpers";
import externalCss from "../style/media.css";
import Link from "@frontity/components/link";

const MediaPostsPage = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategoryMedia(state.source);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      {postsPerCategory.map(({ posts }, index) => (
        <BoxCategory key={index} className="inner-wrapper-media-posts">
          {posts.map((post, index) => (
            <article key={index} className="media-posts-article">
              <div>
                <div px={2} className="article-inner-wrapper-media">
                  <div className="content-wrapper">
                    <Html2React html={post.content.rendered} />
                  </div>
                  {post.title.rendered === "OP TV 1" && (
                    <Link link="https://www.npostart.nl/KN_1727568">
                      BEKIJK DE UITZENDING
                    </Link>
                  )}
                  {post.title.rendered === "OP TV 2" && (
                    <Link link="https://www.rtlnieuws.nl/editienl/laatste-videos-editienl/video/5212796/mama-waarom-schreeuw-je-zo">
                      BEKIJK DE UITZENDING
                    </Link>
                  )}
                  {post.title.rendered === "IN DE KRANT" && (
                    <Link link="">GA NAAR HET ARTIKEL</Link>
                  )}
                  {post.title.rendered === "PODCAST" && (
                    <Link link="https://podcastluisteren.nl/pod/When-Im-64">
                      LUISTER DE PODCAST
                    </Link>
                  )}
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
