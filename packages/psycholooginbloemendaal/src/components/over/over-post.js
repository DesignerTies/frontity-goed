import React, {useState} from "react";
import { connect, styled } from "frontity";
import { Global, css } from 'frontity'; 
import {getPostsGroupedByCategoryOver} from "../../helpers";
import externalCss from "../style/tc-page.css"
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import dayjs from "dayjs";

const OverPosts = ({ state, actions, libraries }) => {

  const data = state.source.get(state.router.link)
  const postsPerCategory = getPostsGroupedByCategoryOver(state.source)
  const Html2React = libraries.html2react.Component; 

  return (
    <>
      <Container>
        {
          postsPerCategory.map(({ posts, category }, index) => (
            <BoxCategory key={index} className="over-wrapper">
                {posts.map((post, index) => (
                  <>
                    <article key={index} className="article-over-grid-stoof">                    
                      {state.theme.featured.showOnPost && (
                        <FeaturedMedia id={post.featured_media} className="img-container-over" />
                      )}                       
                      <div>
                        <div px={2}>
                          <div className="content-over">
                            <Html2React html={post.content.rendered} />
                          </div>
                        </div> 
                      </div>
                    </article>
                  </>
                  ))}
            </BoxCategory>
          ))
        }
      </Container>
      <Global styles={css(externalCss)} />
    </>
  );
};

const Container = styled.div`
  width: 10%;
`

const BoxCategory = styled.div`
`

export default connect(OverPosts);