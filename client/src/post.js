import { useState, useEffect } from "react";
import Header from "./header";

const Post = () => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/post/posts")
      .then((res) => {
        return res.json();
      })
      .then((postData) => {
        // console.log(postData)       
        setAllPost(postData);
        // console.log(postData[0].postImage)
      });
  }, []);

  let monthNo = new Date().getMonth();
  let month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date =
    new Date().getDate() +
    " " +
    month[monthNo] +
    " " +
    new Date().getFullYear();

  return (
    <>
      <Header />
      <div style={main}>
        {allPost.map((ele) => {
          return (
            <div style={post}>
              <div style={row1}>
                <div>
                  <label >
                    <b>{ele.name}</b>
                  </label>
                  <br />
                  <label style={{ color: "gray" }}>{ele.location}</label>
                </div>
                <img src="3Dots.jpg" style={{ height: "50px" }} alt="" />
              </div>
              <div>
          
                <img
                  src={ele.postImage}
                  style={{ width: "100%", objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div style={row3}>
                <img src="likes.jpg" style={{ width: "100px" }} alt="" />
                <label
                  style={{
                    fontSize: "16px",
                    color: "gray",
                    paddingLeft: "35px",
                  }}
                >
                  {date}
                </label>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "14px",
                    color: "gray",
                    paddingLeft: "30px",
                  }}
                >
                  {ele.likes} likes
                </label>
              </div>
              <div style={row4}>
                <p>{ele.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
const main = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position:"relative",
  top:"100px",
};
const post = {
  width: "450px",
  height: "400px",
  border: "1px solid silver",
  borderRadius: "4px",
  margin: "10px 0",
  padding: "0",
};
const row1 = {
  height: "10%",
  width: "91%",
  padding: "10px 26px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const row3 = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "91%",
  height: "5%",
  padding: "10px 16px",
};
const row4 = {
  fontWeight: "bold",
  paddingLeft: "30px",
  fontSize: "16px",
};

export default Post;
