import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import { getPostsGroupedByCategoryProducties } from "../../helpers";
import externalCss from "../style/producties.css";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";

const ProductiesPost = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategoryProducties(state.source);
  const Html2React = libraries.html2react.Component;

  let dummyString;

  return (
    <>
      <FlexContainer className="producties-posts-wrapper">
        {postsPerCategory.map(({ posts, category }, index) => (
          <BoxCategory key={index}>
            {posts.map((post, index) => (
              <article key={index} className="producties-article">
                <div>
                  <div px={2}>
                    {state.theme.featured.showOnPost && (
                      <FeaturedMedia id={post.featured_media} />
                    )}
                    <Link link={post.link}>
                      <h2 className="title-producties-post">
                        <Html2React html={post.title.rendered} />
                      </h2>
                    </Link>
                    <Html2React html={post.excerpt.rendered} />
                    <a
                      href={
                        (dummyString = post.content.rendered
                          .split("=")[3]
                          .split(">")[0]
                          .replaceAll('"', ""))
                      }
                      target="_blank"
                      className="download-link"
                    >
                      <p>Download PDF</p>
                    </a>
                    {/* <Html2React html={post.content.rendered} /> */}
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
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default connect(ProductiesPost);
