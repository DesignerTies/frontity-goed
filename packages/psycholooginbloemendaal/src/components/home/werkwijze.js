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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusaminvidunt ut labore et dolore magna{" "}
          </p>
        </div>
        <Link link={"/werkwijze-tarieven"}>Lees meer</Link>
      </div>
    </div>
  );
};

export default connect(WerkwijzePrev);
