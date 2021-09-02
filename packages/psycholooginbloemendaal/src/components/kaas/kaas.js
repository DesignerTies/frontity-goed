import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import { Global, css } from 'frontity'; 
import {getPostsGroupedByCategoryKaas} from "../../helpers";
import externalCss from "../style/kaasje.css"
import Link from "@frontity/components/link";
import FeaturedMedia from '../featured-media'

const Kaas = ({ state, actions, libraries }) => {

  const data = state.source.get(state.router.link)
  const postsPerCategory = getPostsGroupedByCategoryKaas(state.source)
  // console.log(postsPerCategory)
  const Html2React = libraries.html2react.Component; 

  postsPerCategory.map(({posts, categoy}, index) => (
    posts.map((post, index) => (
      console.log(post.featured_media)
    ))
  ))

  return (
    <>
      <FlexContainer>
        {
          postsPerCategory.map(({ posts, category }, index) => (
            <BoxCategory key={index}>
                <Heading className="title-page">{category.name}</Heading>
                {posts.map((post, index) => (
                  <article key={index}>
                    <div>
                      
                        <div px={2}>
                          <Link link={post.link}>
                            <h2>
                              <Html2React html={post.title.rendered} />
                            </h2>
                          </Link>

                          <Html2React className="samenvatting" html={post.excerpt.rendered} />

                          {state.theme.featured.showOnPost && (   
                          <FeaturedMedia id={post.featured_media} />
                        )}
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

export default connect(Kaas);