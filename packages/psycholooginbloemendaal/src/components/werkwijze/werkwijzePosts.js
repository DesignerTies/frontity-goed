import React, {useState} from "react";
import { connect, styled } from "frontity";
import { Global, css } from 'frontity'; 
import {getPostsGroupedByCategoryWerkwijze} from "../../helpers";
import externalCss from "../style/werkwijze-page.css"
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";

const WerkwijzePosts = ({ state, actions, libraries }) => {

  const data = state.source.get(state.router.link)
  const postsPerCategory = getPostsGroupedByCategoryWerkwijze(state.source)
  const Html2React = libraries.html2react.Component; 

  return (
    <>
      <Container>
        {
          postsPerCategory.map(({ posts }, index) => (
            <BoxCategory key={index} className="werkwijze-wrapper">
                {posts.map((post, index) => (
                  <>
                    <article key={index} className="article-werkwijze">                    
                      {state.theme.featured.showOnPost && (
                        <FeaturedMedia id={post.featured_media} className="img-container-werkwijze" />
                      )}                       
                      <div>
                        <div px={2}>
                          <div className="content-werkwijze">
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
  width: 80%;
`

const BoxCategory = styled.div`
`

export default connect(WerkwijzePosts);