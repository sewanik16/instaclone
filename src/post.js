
import Header from "./header"

const Post = () =>{
    let monthNo = new Date().getMonth() 
    let month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    let date = new Date().getDate()  +" "+ month[monthNo] +" "+ new Date().getFullYear() 
    let arr = [1,1,1]
    return(
        <>
            <Header/>
            <div style={main}>
            
                {
                    arr.map((ele)=>{
                        return(
                            <div style={post}>
                        <div style={row1}>
                                <div>
                                    <label><b>Nikhil</b></label>
                                    <br/>
                                    <label style={{color:"gray"}}>Pimpri</label>
                                </div>
                                <img src="3Dots.jpg" style={{height:"50px"}}/>
                        </div>
                        <div>
                            <img src="10ximg.jpg" style={{width:"100%",objectFit:"cover"}}/>
                        </div>
                        <div style={row3}>
                            <img src="likes.jpg" style={{width:"100px"}}/>
                            <label style={{fontSize:"16px", color:"gray", paddingLeft:"35px"}}>{date}</label>
                        </div>
                        <div>
                            <label style={{fontSize:"14px", color:"gray", paddingLeft:"30px"}}>64 likes</label>
                        </div>
                        <div style={row4}>
                            <p>Kick start your career with Bang</p>
                        </div>
                      </div>
                        )
                    })
                }
                    
            </div>
        </>
    )
}
const main = {
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    };
const post = {
    width:"450px",
    height:"400px",
    border:"1px solid green",
    borderRadius:"4px",
    margin:"10px 0",
    padding:"0"

}
const row1 = {
    height:"10%",
    width:"91%",
    padding:"10px 16px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
}
const row3 = {
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"91%",
    height:"5%",
    padding:"10px 16px",
}
const row4 = {
    fontWeight :"bold",
    paddingLeft:"30px",
    fontSize:"16px"
}

export default Post;