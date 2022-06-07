import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import { getPostsGroupedByCategoryBlog } from "../../helpers";
import externalCss from "../style/blog.css";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import dayjs from "dayjs";

const Blog = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategoryBlog(state.source);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <FlexContainer className="blog-posts-wrapper">
        {postsPerCategory.map(({ posts, category }, index) => (
          <BoxCategory key={index}>
            {posts.map((post, index) => (
              <article key={index} className="blog-article">
                <div>
                  <div px={2}>
                    <div>
                      {state.theme.featured.showOnPost && (
                        <FeaturedMedia id={post.featured_media} />
                      )}
                    </div>
                    <Link link={post.link}>
                      <h2 className="title-blog-post">
                        <Html2React html={post.title.rendered} />
                      </h2>
                    </Link>

                    <Html2React html={post.excerpt.rendered} />

                    <p className="lees-meer-p">
                      <Link link={post.link} className="lees-meer">
                        Lees Meer
                      </Link>
                    </p>
                    {/* <p className="datum">
                      {dayjs(post.date).format("DD/MM/YY")}
                    </p> */}
                    {/* <p>
							  <Html2React html={post.author} />
						  </p> */}
                  </div>
                </div>
              </article>
            ))}
          </BoxCategory>
        ))}
      </FlexContainer>
      <Global styles={css(externalCss)} />
    </>
  );
};

const FlexContainer = styled.div``;

const Heading = styled.h2`
  font-size: 50px;
  text-align: center;
  align-self: center;
  padding: 5px;
`;

const BoxCategory = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default connect(Blog);
