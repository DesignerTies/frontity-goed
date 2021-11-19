import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import { Global, css } from 'frontity'; 
import {getPostsGroupedByCategoryReviews} from "../../helpers";
import externalCss from "../style/kaasje.css"
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import dayjs from "dayjs";

const ReviewPosts = ({ state, actions, libraries }) => {

  const data = state.source.get(state.router.link)
  const postsPerCategory = getPostsGroupedByCategoryReviews(state.source)
  const Html2React = libraries.html2react.Component; 

  return (
    <>
      <FlexContainer className="flex-wrapper-review-posts">
        {
          postsPerCategory.map(({ posts, category }, index) => (
            <BoxCategory key={index} className="inner-wrapper-review-posts">
                {posts.map((post, index) => (
                  <article key={index} className="review-posts-article">
                    <div>
                        <div px={2}>
                            {/* <Html2React html={post.excerpt.rendered} /> */}
                            <Html2React html={post.content.rendered} />
                          	<p className="datum">{dayjs(post.date).format("DD/MM/YY")}</p>
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

    </>
  );
};

const FlexContainer = styled.div``

const BoxCategory = styled.div``

export default connect(ReviewPosts);