import connect from "@frontity/connect";
import Link from "@frontity/components/link";

const OverPreview = () => {
  return (
    <div className="over-wrapper">
      <div className="over-inner-wrapper">
        <div className="over-text-wrapper">
          <h2>OVER MIJ</h2>
          <h4 className="name-over-preview">FRANCISCA KRAMER MSc</h4>
          <h4>PSYCHOLOOG NIP</h4>
          <p>
            Ik ben een psycholoog uit Bloemendaal met Urker wortels stevig in
            mij verankerd. Ik wil mensen meer vrijheid laten ervaren en beter
            leren omgaan met emoties.
          </p>
          <Link link={"/over/"} className="meer-link-over">
            Lees meer
          </Link>
        </div>
        <img
          src="https://live.staticflickr.com/65535/51772859929_c2b3c6b864_c.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default connect(OverPreview);
