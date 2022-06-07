import React, { useEffect } from "react";
import { loadable, Global, css } from "frontity";
import externalCss from "../style/home.css";
import { connect, styled } from "frontity";
const Banner = loadable(() => import("./banner"));
const RoundedDiv = loadable(() => import("./circle-text"));
const TcHome = loadable(() => import("./tc-home"));
const Reviews = loadable(() => import("./reviews"));
const OverPreview = loadable(() => import("./over-mij-preview"));
const WerkwijzePrev = loadable(() => import("./werkwijze"));
const MeerPreview = loadable(() => import("./meer"));
const Loading = loadable(() => import("../loading"));

const Home = ({ state, actions }) => {
  const data = state.source.get("/category/reviews");

  useEffect(async () => {
    await Promise.all([
      actions.source.fetch("/category/tc"),
      actions.source.fetch("/category/reviews"),
    ]);
  }, [actions.source]);

  return data.isReady ? (
    <>
      <div className="flex-div">
        <Banner />
        <RoundedDiv />
        <TcHome />
        <Reviews />
        <OverPreview />
        <WerkwijzePrev />
        <MeerPreview />
      </div>
      <Global styles={css(externalCss)} />
    </>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Loading />
    </div>
  );
};

export default connect(Home);
