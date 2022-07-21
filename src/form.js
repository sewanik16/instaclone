import { useState } from "react";
import Header from "./header";
import {useNavigate} from "react-router-dom"

const Form = () => {
  let navigate = useNavigate()
  const [path, setPath] = useState("")
  const [data, setData] = useState({
    name:"",location:"",description:""
  })

  let name,value;

  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;
      setData({...data, [name]:value})

      // if(data[0].name.length){
      //   document.getElementById("postbtn").style.backgroundColor="lightblue"
      //   document.getElementById("postbtn").style.border="none"
      // }
  }

  const handleUserAdd = async (e) =>{
        e.preventDefault()
        const {name, location, description}= data
        await fetch("/post/add", {
              method:"POST",
              headers : {
                "Content-Type": "application/json"
              },
              body : JSON.stringify({
                name:name, location:location, description:description
          })
           }).then(()=>{
           navigate("/post")
           })   
  }
  
    const inputChange = (e) =>{
          setPath(e.target.value)
    }

    return (
    <>
    <Header/>
      <div style={main}>
        <form style={form}>
          <div style={input}>
            <input type="text" id="filepath" name="filepath" value={path}  placeholder="No file chosen" style={{width:"280px",paddingLeft:"10px"}}/>
            <input type="file" id="file" onChange={inputChange}  hidden/>
            <button id="btn" onClick={()=>{
              document.getElementById("file").click();
              }}>
              Browse  
            </button>
         
          </div>
          <div style={input}>
            <input id="name" name="name" onChange={handleInputs} placeholder="Author" style={{width:"130px",paddingLeft:"10px"}}/>
            <input id="location" name="location" onChange={handleInputs} placeholder="Location" style={{width:"130px",paddingLeft:"10px"}}/>
          </div>
          <div style={input}>
            <input id="description" name="description" onChange={handleInputs} placeholder="Description" style={{width:"350px",paddingLeft:"10px"}}/>
          </div>
          <div>
            <button id="postbtn" type="submit" style={{padding:"2px 14px",color:"gray"}} onClick={handleUserAdd}>Post</button>
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
