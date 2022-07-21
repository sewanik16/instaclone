import { useState } from "react";
import Header from "./header";
import {useNavigate} from "react-router-dom"

const Form = () => {
  let navigate = useNavigate()

  const [data, setData] = useState({
    name:"",location:"",description:"",postImage:"",date:Date.now(),likes:Math.floor(Math.random() * 99 + 100)
  })

  let name,value;
  let base64Path;
  const handleInputs = (e) =>{
      name = e.target.name;
    value = e.target.value;
      setData({...data, [name]:value})
      console.log(data)
  }
  
  const handlefile =async (e) =>{
     base64Path = await fileTobase64(e.target.files[0]) 
    setData({...data,postImage:base64Path})
    
  }
  const handleUserAdd = async (e) =>{
    e.preventDefault()
        const {name, location, description, postImage,date,likes}= data
        await fetch("/post/add", {
              method:"POST",
              headers : {
                "Content-Type": "application/json"
              },
              body : JSON.stringify({
                postImage:postImage,name:name, location:location, description:description,date:date,likes:likes
          })
           }).then(()=>{
           navigate("/post")
           })   
  }

  const fileTobase64 = (file) =>{
    return new Promise((resolve, reject)=>{
      const reader = new FileReader(file)
      reader.readAsDataURL(file)
      reader.onload = ()=>{
        resolve(reader.result)
      }
      reader.onerror = (err)=>{
        reject(err)
      }
    })
  }

    return (
    <>
    <Header/>
      <div style={main}>
        <form style={form}>
          <div style={input}>
            {/* <input type="text" id="filepath" name="filepath" value={path}  placeholder="No file chosen" style={{width:"280px",paddingLeft:"10px"}}/> */}
            <input type="file" id="file" onChange={handlefile}  />
            {/* <button id="btn" onClick={()=>{
              document.getElementById("file").click();
              }}>
              Browse  
            </button> */}
         
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