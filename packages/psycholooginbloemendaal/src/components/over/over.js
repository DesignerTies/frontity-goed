import React from "react";
import { connect, styled, loadable, Global, css } from "frontity";
import FeaturedMedia from "../featured-media";
import externalCss from "../style/over-page.css";

const Over = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return data.isReady ? (
    <>
      <div className="banner-over-page" role="img">
        <div className="title-over-page">
          <h1>{page.title.rendered}</h1>
        </div>
      </div>
      <div className="flex-over-wrapper">
        <ContainerTextImg>
          {/* <div className="img-over-page" role="img" /> */}
          {page.featured_media !== 0 && (
            <FeaturedMedia
              id={page.featured_media}
              height={500}
              className="img-over-page"
            />
          )}
          <Container>
            <BoxCategory className="over-wrapper">
              <>
                <article className="article-over-grid-stoof">
                  <div>
                    <div px={2}>
                      <div className="content-over">
                        <Html2React html={page.content.rendered} />
                      </div>
                    </div>
                  </div>
                </article>
              </>
            </BoxCategory>
          </Container>
        </ContainerTextImg>
        <div className="text-wrapper-over-page">
          <p>
            'You can't go back and change the beginning, but you can start where
            you are and change the ending' <br /> <span>C.S. Lewis</span>
          </p>
        </div>
      </div>
      <Global styles={css(externalCss)} />
    </>
  ) : null;
};

const ContainerTextImg = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: 1rem;
  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-items: center;
    align-items: center;
  }
`;

const Container = styled.div``;

const BoxCategory = styled.div``;

export default connect(Over);
