import connect from "@frontity/connect";
import Link from "@frontity/components/link";

const MeerPreview = () => {
  return (
    <div className="meer-wrapper">
      <h2 className="meer-title">EN MEER...</h2>
      <div className="meer-inner-wrapper">
        <div className="media-prev inside-inner-wrapper-div">
          <div className="prev-text-wrapper">
            <h4>IN DE MEDIA</h4>
            <p>
              Door lange ervaring in de journalistiek word ik soms benaderd door
              collega-journalisten om een onderwerp psychologisch te belichten
              in magazines, op websites en op tv.
            </p>
            <Link link={"/producties"}>Lees meer</Link>
          </div>
          <div className="prev-img-wrapper">
            <img
              id="media-prev-img"
              src="https://live.staticflickr.com/65535/51696707569_bb73de1ddb_b.jpg"
              alt="journalistieke producties preview"
            />
          </div>
        </div>
        <div className="blog-prev inside-inner-wrapper-div">
          <div className="prev-text-wrapper">
            <h4>BLOG</h4>
            <p>
              Als psycholoog hoor ik de meest intieme en kwetsbare verhalen.
              Mijn cliënten verbazen mij dagelijks met hun veerkracht. Zij zijn
              de inspiratie voor mijn blogs, uiteraard volledig geanonimiseerd.
            </p>
            <Link link={"/blog"}>Lees meer</Link>
          </div>
          <div className="prev-img-wrapper">
            <img
              id="blog-prev-img"
              src="https://live.staticflickr.com/65535/51696707569_bb73de1ddb_b.jpg"
              alt="blog preview"
            />
          </div>
        </div>
        <div className="journ-prod-prev inside-inner-wrapper-div">
          <div className="prev-text-wrapper">
            <h4 className="title-journ-prod">JOURNALISTIEKE PRODUCTIES</h4>
            <p>
              Naast het zijn van psycholoog heb ik ook een journalistieke
              achtergrond. Regelmatig schrijf ik artikelen voor diverse
              magazines. Wil je mijn als journalist inschakelen, neem dan
              contact op.
            </p>
            <Link link={"/producties"}>Lees meer</Link>
          </div>
          <div className="prev-img-wrapper">
            <img
              id="journ-prod-prev-img"
              src="https://live.staticflickr.com/65535/51696707569_bb73de1ddb_b.jpg"
              alt="in de media preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(MeerPreview);
