import { connect } from "frontity";
import ProductiesPost from "./productiesPost";

const ProductiesPage = () => {
  return (
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
  );
};

export default connect(ProductiesPage);
