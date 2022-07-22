import { Link } from "react-router-dom";

const Header = () => {
  const main = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position:"fixed",
    width:"100%",
    height:"100px",
    backgroundColor:"white",
    zIndex:"1",
    top:"0",
  };
  const header = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid green",
    marginBottom: "10px",
    padding: "10px",
  };
  const img = {
    height: "50px",
  };
 
  return (
    <>
     
          <div style={main}>
            <div style={header}>
              <Link to="/">
                <img src="instaCloneImg.jpg" style={img} alt="" />
              </Link>
              <Link to="/form">
                <img src="camera.jpg" style={img} alt="" />
              </Link>
            </div>
          </div>
    </>
  );
};

export default Header;
