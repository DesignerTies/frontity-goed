import connect from "@frontity/connect";
import Link from "@frontity/components/link";
import radarPic from "../../../static/radar-sex.png";
import typmachinePic from "../../../static/typmachine.jpeg";
import santePic from "../../../static/sante.jpg";

const MeerPreview = () => {
  return (
    <div className="meer-wrapper">
      <h2 className="meer-title">EN MEER...</h2>
      <div className="meer-inner-wrapper">
        <div className="media-prev inside-inner-wrapper-div">
          <div className="prev-text-wrapper">
            <h4>IN DE MEDIA</h4>
            <p>
              In magazines, op websites, tv en in podcasts mag ik als psycholoog
              mijn licht laten schijnen over verschillende onderwerpen.
            </p>
            <Link link={"/producties"}>Lees meer</Link>
          </div>
          <div className="prev-img-wrapper">
            <img
              id="media-prev-img"
              src={santePic}
              alt="journalistieke producties preview"
            />
          </div>
        </div>
        <div className="blog-prev inside-inner-wrapper-div">
          <div className="prev-text-wrapper">
            <h4>BLOG</h4>
            <p id="blog-text-wrapper">
              Mijn cliënten verbazen mij dagelijks met hun veerkracht. Zij zijn
              de inspiratie voor mijn blogs, uiteraard volledig geanonimiseerd.
              Soms zijn de verhalen gecombineerd met die van andere cliënten,
              maar altijd op waarheid gebaseerd.
            </p>
            <Link link={"/blog"}>Lees meer</Link>
          </div>
          <div className="prev-img-wrapper">
            <img id="blog-prev-img" src={typmachinePic} alt="blog preview" />
          </div>
        </div>
        <div className="journ-prod-prev inside-inner-wrapper-div">
          <div className="prev-text-wrapper" id="journ-text-wrapper">
            <h4 className="title-journ-prod">JOURNALISTIEKE PRODUCTIES</h4>
            <p>
              Ruim 25 jaar schrijf ik voor kranten, magazines en websites.
              Doordat ik steeds meer over psychologie schreef, besloot ik na
              mijn veertigste psychologie te gaan studeren. Inmiddels combineer
              ik beide beroepen en schrijf ik graag en vaak over allerlei
              psychologische onderwerpen en ben ik in te huren voor interviews.
            </p>
            <Link link={"/producties"}>Lees meer</Link>
          </div>
          <div className="prev-img-wrapper">
            <img
              id="journ-prod-prev-img"
              src={radarPic}
              alt="in de media preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(MeerPreview);
