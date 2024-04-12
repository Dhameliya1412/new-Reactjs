
export default function Task2(props){
    return (
    
        <div className="darshan" >
        <div className="main-class h-50 w-70 bg-blue-600 rounded-2xl" style={{ height:"300px", width:"250px",borderRadius:"30px", backgroundColor:"darkblue", }}>
            <p className="grid justify-items-center p-3 " > 
               <img src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?size=338&ext=jpg&ga=GA1.1.1395991368.1711497600&semt=ais" style={{height: "100px" ,width: "auto", borderRadius: "100px", marginTop:"15px"}} alt="" />
            </p>
        
        <div className="main-class h-44 w-66 bg-slate-200 m-auto my-0 rounded-2xl" style={{ height:"170px", width:"230px",borderRadius:"20px", backgroundColor:"lightblue", marginTop:"-60px", marginLeft:"10px"}}>
        <h1  className="text-3xl text-center text-white p-0 " style={{color: "black" ,fontSize: "25px", fontWeight: "700", marginTop:"60px"}}> {props.name} </h1>
        <p className="text-l text-center text-white " style={{color: "black" , fontSize: "14px", fontWeight: "600",marginRight:"10px", marginLeft:"10px"}}> {props.discri}</p>
        
        <div className="grid justify-items-center"style={{justifyContent:"space-around", display:"flex"}} >
           <button className="bg-blue-600 h-10 text-lg rounded-3xl text-blue-800" style={{color: "white", backgroundColor:"darkblue", height:"35px", width:"112px", borderRadius:"15px 0px 0px 15px", border: "none"}}>{props.button1}</button>
           <button className="bg-blue-600 h-10 text-lg rounded-3xl text-blue-800" style={{color: "white", backgroundColor:"darkblue", height:"35px", width:"112px", borderRadius:"0px 15px 15px 0px", border: "none"}}>{props.button2}</button>
        </div>
        
        </div>
        </div>
        </div>
    );
    }  