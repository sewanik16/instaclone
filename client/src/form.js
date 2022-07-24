import { useState } from "react";
import Header from "./header";
import {useNavigate} from "react-router-dom"

const Form = () => {
  let navigate = useNavigate()
  const [path,setPath] = useState("")
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
  
  
  // for browse label button -- handle event
  const handlefile =async (e) =>{
     base64Path = await fileTobase64(e.target.files[0]) 
    setData({...data,postImage:base64Path})
    setPath(e.target.files[0])
  }


  const handleUserAdd = async (e) =>{
    e.preventDefault()
        const {name, location, description, postImage,date,likes}= data
        await fetch("https://instaclone-16-server.herokuapp.com/post/add", {
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
        <form style={form} onSubmit={handleUserAdd}>
          <div style={input}>
            {/* <input type="text" id="filepath" name="filepath" value={path}  placeholder="No file chosen" style={{width:"280px",paddingLeft:"10px"}}/> */}
            {/* <input type="file" id="file" onChange={handlefile}  /> */}
            {/* <button id="btn" onClick={()=>{
              document.getElementById("file").click();
              }}>
              Browse  
            </button> */}
          
            <div>
            <input required type="text" onClick={()=>{document.getElementById("files").click()}} value={path.name}  placeholder="No file chosen" style={{width:"280px",paddingLeft:"10px"}}/>
              <label for="files" style={label}>Browse</label>
              <input id="files" hidden type="file" onChange={handlefile}/>
            </div>
         
          </div>
          <div style={input}>
            <input required id="name" name="name" onChange={handleInputs} placeholder="Author" maxLength={24} style={{width:"130px",paddingLeft:"10px"}}/>
            <input required id="location" name="location" onChange={handleInputs} placeholder="Location" maxLength={24} style={{width:"130px",paddingLeft:"10px"}}/>
          </div>
          <div style={input}>
            <input required id="description" name="description" onChange={handleInputs} placeholder="Description" maxLength={36} style={{width:"350px",paddingLeft:"10px"}}/>
          </div>
          <div>
            <button id="postbtn" type="submit" style={{padding:"2px 14px",color:"gray"}} >Post</button>
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
  textAlign:"center",
  position:"relative",
  top:"100px",
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
  const label = {
      border:"1px solid silver",
      fontSize:"14px",
      marginLeft:"10px",
      padding:"0px 6px 3px ",
      borderRadius:"4px",
      // border:"1px solid gray",
      backgroundColor:"lightgray"
  }
export default Form;
