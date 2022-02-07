import connect from "@frontity/connect";
import { Global, css } from "frontity";
import externalCss from "./style/footer.css";
import instaIcon from "../../static/instagram-icon.svg";
import facebookIcon from "../../static/facebook-icon.svg";
import linkedIcon from "../../static/linkedin-icon.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex-container-footer">
          <div className="menus-wrapper">
            <ul>
              <li>Therapie & coaching</li>
              <li>
                <a href="">Individuele therapie</a>
              </li>
              <li>
                <a href="">Relatietherapie</a>
              </li>
              <li>
                <a href="">Business coaching</a>
              </li>
              <li>
                <a href="">Trainingen / workshops</a>
              </li>
            </ul>
            <ul>
              <li>Psycholoog Bloemendaal</li>
              <li>
                <a href="">Werkwijze & tarieven</a>
              </li>
              <li>
                <a href="">Over mij</a>
              </li>
              <li>
                <a href="">Reviews</a>
              </li>
            </ul>
            <ul>
              <li>En meer</li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Koop een e-boek</a>
              </li>
              <li>
                <a href="">Bekijk mijn journalistieke producties</a>
              </li>
              <li>
                <a href="">In de media</a>
              </li>
              <li>
                <a href="">Huur mij in als journalist</a>
              </li>
            </ul>
          </div>
          <div className="socials-wrapper">
            <h5>Volg mij op</h5>
            <div className="social-img-wrapper">
              <a href="https://instagram.com/franciscakramerpsycholoog">
                <img src={instaIcon} alt="" />
              </a>
              <a href="https://www.facebook.com/FranciscaKramerPsycholoog">
                <img src={facebookIcon} alt="" />
              </a>
              <a href="https://nl.linkedin.com/in/francisca-kramer-0038ab9?trk=author_mini-profile_title">
                <img src={linkedIcon} alt="" />
              </a>
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
          Ties Hoenderdos
        </p>
      </footer>
      <Global styles={css(externalCss)} />
    </>
  );
};

export default connect(Footer);
