import React, { useEffect } from "react";
import { Global, css } from "frontity";
import externalCss from "../style/home.css";
import { connect, styled } from "frontity";
import Banner from "./banner";
import RoundedDiv from "./circle-text";
import TcHome from "./tc-home";
import Reviews from "./reviews";
import OverPreview from "./over-mij-preview";
import WerkwijzePrev from "./werkwijze";
import MeerPreview from "./meer";
import Loading from "../loading";

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
