import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import { Global, css } from 'frontity'; 
import {getPostsGroupedByCategoryKaas} from "../../helpers";
import externalCss from "../style/kaasje.css"
import Link from "@frontity/components/link";

const Kaas = ({ state, actions, libraries }) => {

  const data = state.source.get(state.router.link)
<<<<<<< HEAD:packages/psycholooginbloemendaal/src/components/kaas/kaas.js
  const postsPerCategory = getPostsGroupedByCategoryKaas(state.source)
=======
  const postsPerCategory = getPostsGroupedByCategory(state.source)
  // console.log(postsPerCategory)
>>>>>>> parent of a041063... added featuredmedia on kaas:packages/mars-theme/src/components/kaas/kaas.js
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
<<<<<<< HEAD:packages/psycholooginbloemendaal/src/components/kaas/kaas.js
=======
                      
>>>>>>> parent of a041063... added featuredmedia on kaas:packages/mars-theme/src/components/kaas/kaas.js
                        <div px={2}>
                          <Link link={post.link}>
                            <h2>
                              <Html2React html={post.title.rendered} />
                            </h2>
                          </Link>
                          <p className="samenvatting">
                            <Html2React html={post.excerpt.rendered} />
                          </p>
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
  background-color: yellow;
  padding: 5px;
`

const BoxCategory = styled.div`
  width: 50vw;
  margin: auto;
`

export default connect(Kaas);