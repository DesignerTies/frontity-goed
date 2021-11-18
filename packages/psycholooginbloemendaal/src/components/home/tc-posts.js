import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import { Global, css } from 'frontity'; 
import {getPostsGroupedByCategoryTC} from "../../helpers";
import externalCss from "../style/home.css"
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import dayjs from "dayjs";

const TCPosts = ({ state, actions, libraries }) => {

  const data = state.source.get(state.router.link)
  const postsPerCategory = getPostsGroupedByCategoryTC(state.source)
  const Html2React = libraries.html2react.Component; 

  return (
    <>
      <FlexContainer>
        {
          postsPerCategory.map(({ posts, category }, index) => (
            <BoxCategory key={index}>
                {posts.map((post, index) => (
                  <article key={index}>                    
                    {state.theme.featured.showOnPost && (
                      <FeaturedMedia id={post.featured_media} />
                    )}                       
                    <div>
                      <div px={2}>
                        <Link link={post.link}>
                          <h2>
                            <Html2React html={post.title.rendered} />
                          </h2>
                        </Link>
                        <p>
                          <Html2React html={post.excerpt.rendered} />
                        </p>
                        <p className="lees-meer">Lees Meer</p>
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
  flex-direction: row;
`

const BoxCategory = styled.div`
  display: flex;
  margin: auto;
`

export default connect(TCPosts);