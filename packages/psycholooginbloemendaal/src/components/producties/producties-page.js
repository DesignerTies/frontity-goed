import { useEffect } from "react";
import { connect } from "frontity";
import ProductiesPost from "./productiesPost";

const ProductiesPage = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  useEffect(async () => {
    await actions.source.fetch("/category/producties");
  }, [actions.source]);

  return data.isReady ? (
    <div className="producties-page-wrapper">
      <p className="excerpt-beginning-page">
        Al meer dan twintig jaar schrijf ik voor verschillende media, zowel voor
        het bedrijfsleven als voor publieksmagazines. Voor onder andere
        Volkskrant Magazine, Flow, Psychologie Magazine, Elle en Libelle schreef
        ik over onderwerpen als depressie, narcisme, hechting en seksualiteit.
        In 2017 verscheen mijn eerste boek: Psychologisch handboek voor de niet
        zo perfecte vrouw, dat hier te bestellen is.
      </p>
      <ProductiesPost />
    </div>
  ) : null;
};

export default connect(ProductiesPage);
