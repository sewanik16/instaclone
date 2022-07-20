import { useState } from "react";
import Header from "./header";

const Form = () => {
  const [path, setPath] = useState("/nik")

  const onPathchange = (e) =>{
      // setPath(path, e.target.value)
      window.alert(path)
      document.getElementById("upload").innerHTML="e.target.value"
  }

  return (
    <>
    <Header/>
      <div style={main}>
        <form style={form}>
          <div style={input}>
            <input type="text" id="upload" placeholder="No file chosen" style={{width:"280px",paddingLeft:"10px"}}/>
            <input type="file" id="file" onChange={(e)=>{onPathchange(e)}} style={{display:"none"}} />
            <button id="btn" onClick={()=>{
              document.getElementById("file").click();
              }}>
              Browse  
            </button>
         
          </div>
          <div style={input}>
            <input placeholder="Author" style={{width:"130px",paddingLeft:"10px"}}/>
            <input placeholder="Location" style={{width:"130px",paddingLeft:"10px"}}/>
          </div>
          <div style={input}>
            <input placeholder="Description" style={{width:"350px",paddingLeft:"10px"}}/>
          </div>
          <div>
            <button style={{padding:"2px 14px",color:"gray"}}>Post</button>
          </div>
        </form>
      </div>
      
    </>
  );
};

const main = {
  display: "flex",
  justifyContent:"center",
  alignItems:"center",
  height:"60vh",
  textAlign:"center"
  };
  const form = {
      border: "1px solid silver",
      padding:"20px",
      borderRadius:"4px"
  }
  const input = {
      display:"flex",
      justifyContent:"space-between",
      marginBottom:"10px",
  }
export default Form;
