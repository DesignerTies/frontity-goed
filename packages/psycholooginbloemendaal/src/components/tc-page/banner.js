import connect from "@frontity/connect";

const BannerTC = ({ data }) => {
  return (
    <div className="banner-tc" role="img">
      <div className="title-tc-page">
        <h1 style={{ textTransform: "uppercase" }}>
          {data.type.replace("_", " & ")}
        </h1>
      </div>
    </div>
  );
};

export default connect(BannerTC);
