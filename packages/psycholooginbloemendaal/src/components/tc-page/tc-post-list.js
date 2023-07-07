import React from "react";
import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import externalCss from "../style/tc-page.css";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";

const TCPostList = ({ state, libraries, posts }) => {
  const Html2React = libraries.html2react.Component;
  return (
    <>
      <FlexContainer>
        <BoxCategory className="wrapper-articles">
          {posts.items.map(({ type, id }, i) => {
            const post = state.source[type][id];
            return (
              <div key={i}>
                <article className="article-tc" id={post.title.rendered}>
                  {post.featured_media && (
                    <FeaturedMedia
                      id={post.featured_media}
                      className="img-container"
                    />
                  )}
                  <div>
                    <div px={2}>
                      <h2 className="article-tc-title">
                        <Html2React html={post.title.rendered} />
                      </h2>
                      <div className="content">
                        <Html2React html={post.content.rendered} />
                      </div>
                      <div className="center-button">
                        <div className="maak-afspraak">
                          <Link className="text-button" link="/contact">
                            MAAK EEN AFSPRAAK
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <hr />
              </div>
            );
          })}
        </BoxCategory>
      </FlexContainer>
      <Global styles={css(externalCss)} />
    </>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  flex-direction: row;
`;

const BoxCategory = styled.div``;

export default connect(TCPostList);
