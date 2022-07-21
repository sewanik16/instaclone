import { Link } from "react-router-dom";

const LandingPage = () => {
  const main = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
  };
  const Img = {
    width: "300px",
    heigth: "500px",
  };
  const content = {
    padding: "30px",
    fontFamily: "courier",
    color: "green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const btn = {
    color: "green",
    border: "2px solid green",
    width: "100px",
    padding: "6px",
    fontSize: "20px",
    borderRadius: "10px",
    fontWeight: "bold",
  };
  return (
    <>
      <div style={main}>
        <div>
          <img src="landingPageImg.jpg" style={Img} alt="" />
        </div>
        <div style={content}>
          <h1>10x Team 04</h1>
          <Link to="/post">
            <button style={btn}>Enter</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
