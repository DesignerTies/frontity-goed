import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import { Global, css } from 'frontity'; 
import {getPostsGroupedByCategoryBlog} from "../../helpers";
import externalCss from "../style/kaasje.css"
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";

const Blog = ({ state, actions, libraries }) => {

  const data = state.source.get(state.router.link)
  const postsPerCategory = getPostsGroupedByCategoryBlog(state.source)
  const Html2React = libraries.html2react.Component; 

  return (
    <>
      <FlexContainer>
        {
          postsPerCategory.map(({ posts, category }, index) => (
            <BoxCategory key={index}>
                <Heading>{category.name}</Heading>
                {posts.map((post, index) => (
                  <article key={index}>
                    <div>
                        <div px={2}>
                          <Link link={post.link}>
                            <h2>
                              <Html2React html={post.title.rendered} />
                            </h2>
                          </Link>

                          <p className="samenvatting">
                            <Html2React html={post.excerpt.rendered} />
                          </p>  
                          {state.theme.featured.showOnPost && (
                            <FeaturedMedia id={post.featured_media} />
                          )}
						  {/* <p>
							  <Html2React html={post.author} />
						  </p> */}
                        </div>
                      
                    </div>
                  </article>
                  ))}
            </BoxCategory>
          ))
        }
      </FlexContainer>
      <Global styles={css(externalCss)} />
    </>
  );
};

const FlexContainer = styled.div`
  display: flex;
`

const Heading = styled.h2`
  font-size: 50px;
  text-align: center;
  align-self: center;
  padding: 5px;
`

const BoxCategory = styled.div`
  width: 50vw;
  margin: auto;
`

export default connect(Blog);