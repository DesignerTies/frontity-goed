import connect from "@frontity/connect";
import Link from "@frontity/components/link";

const WerkwijzePrev = () => {
  return (
    <div className="werkwijze-outer-wrapper">
      <div className="werkwijze-inner-wrapper">
        <h2>HOE GA IK TE WERK?</h2>
        <h4>WERKWIJZE EN TARIEVEN</h4>
        <div className="werkwijze-picture-wrapper">
          <img
            src="https://live.staticflickr.com/65535/51773097795_874ed8387e.jpg"
            alt=""
          />
          <img
            src="https://live.staticflickr.com/65535/51771391082_94f77b66ce_z.jpg"
            alt=""
          />
          <img
            src="https://live.staticflickr.com/65535/51772455013_633f81d8be_z.jpg"
            alt=""
          />
        </div>
        <div className="werkwijze-tarieven-text-wrapper">
          <p>
            Gesprekken vinden plaats in mijn praktijk aan huis, toegankelijk via
            een buitentrap naar het souterrain. In een warme, huiselijke
            omgeving maken we uitgebreid kennis en bespreken we de hulpvraag.
            Daarna volgt een voorstel voor behandeling. Naast gesprekken in de
            praktijk, is het ook mogelijk online therapie te volgen of
            wandelsessies te doen rondom de Oosterplas, een prachtig gebied in
            de Kennemerduinen, op loopafstand van de praktijk.
          </p>
        </div>
        <Link link={"/werkwijze-tarieven"}>Lees meer</Link>
      </div>
    </div>
  );
};

export default connect(WerkwijzePrev);
