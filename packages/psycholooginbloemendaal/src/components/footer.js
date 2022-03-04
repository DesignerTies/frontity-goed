import connect from "@frontity/connect";
import { Global, css } from "frontity";
import externalCss from "./style/footer.css";
import instaIcon from "../../static/instagram-icon.svg";
import facebookIcon from "../../static/facebook-icon.svg";
import linkedIcon from "../../static/linkedin-icon.svg";
import Link from "@frontity/components/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex-container-footer">
          <div className="menus-wrapper">
            <ul>
              <li>Therapie & coaching</li>
              <li>
                <Link link="/therapie-coaching">Individuele therapie</Link>
              </li>
              <li>
                <Link link="/therapie-coaching">Relatietherapie</Link>
              </li>
              <li>
                <Link link="/therapie-coaching">Business coaching</Link>
              </li>
              <li>
                <Link link="/therapie-coaching">Trainingen / workshops</Link>
              </li>
            </ul>
            <ul>
              <li>Psycholoog Bloemendaal</li>
              <li>
                <Link link="/werkwijze-tarieven">Werkwijze & tarieven</Link>
              </li>
              <li>
                <Link link="/tarieven">Over mij</Link>
              </li>
              <li>
                <Link link="/reviews">Reviews</Link>
              </li>
            </ul>
            <ul>
              <li>En meer</li>
              <li>
                <Link link="/blog">Blogs</Link>
              </li>
              <li>
                <Link link="/">Koop een e-boek</Link>
              </li>
              <li>
                <Link link="/producties">
                  Bekijk mijn journalistieke producties
                </Link>
              </li>
              <li>
                <Link link="/media">In de media</Link>
              </li>
              <li>
                <Link link="/contact">Huur mij in als journalist</Link>
              </li>
            </ul>
          </div>
          <div className="socials-wrapper">
            <h5>Volg mij op</h5>
            <div className="social-img-wrapper">
              <Link link="https://instagram.com/franciscakramerpsycholoog">
                <img src={instaIcon} alt="" />
              </Link>
              <Link link="https://www.facebook.com/FranciscaKramerPsycholoog">
                <img src={facebookIcon} alt="" />
              </Link>
              <Link link="https://nl.linkedin.com/in/francisca-kramer-0038ab9?trk=author_mini-profile_title">
                <img src={linkedIcon} alt="" />
              </Link>
            </div>
            <ul>
              <li>Praktijk: Brederodelaan 54, 2061 KK Bloemendaal</li>
              <li>francisca@psycholooginbloemendaal.nl</li>
              <li>06-22413394</li>
            </ul>
          </div>
        </div>
        <h4 className="citate-footer">
          De dingen veranderen niet. <span>Wij veranderen.</span>
        </h4>
        <p className="info-makers">
          Deze site is ontworpen door Willemijn van Hardeveld en gebouwd door
          <a
            href="https://tieshoenderdos.nl"
            style={{
              color: "white",
              fontWeight: "lighter",
              textDecoration: "underline",
            }}
          >
            {" "}
            Ties Hoenderdos
          </a>
        </p>
      </footer>
      <Global styles={css(externalCss)} />
    </>
  );
};

export default connect(Footer);
