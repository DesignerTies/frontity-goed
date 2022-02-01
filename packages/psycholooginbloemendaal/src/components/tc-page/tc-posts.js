import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import { getPostsGroupedByCategoryTC } from "../../helpers";
import externalCss from "../style/tc-page.css";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import dayjs from "dayjs";

const TCPosts = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategoryTC(state.source);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <FlexContainer>
        {postsPerCategory.map(({ posts, category }, index) => (
          <BoxCategory key={index} className="wrapper-articles">
            {posts.map((post, index) => (
              <>
                <article
                  key={index}
                  className="article-tc"
                  id={post.title.rendered}
                >
                  {state.theme.featured.showOnPost && (
                    <FeaturedMedia
                      id={post.featured_media}
                      className="img-container"
                    />
                  )}
                  <div>
                    <div px={2}>
                      <Link link={post.link}>
                        <h2 className="article-tc-title">
                          <Html2React html={post.title.rendered} />
                        </h2>
                      </Link>
                      <p className="content">
                        <Html2React html={post.content.rendered} />
                      </p>
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
              </>
            ))}
          </BoxCategory>
        ))}
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

export default connect(TCPosts);
