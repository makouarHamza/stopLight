
export default function Stop() {

    // function changeColor(e){
    //     e.target.style.backgroundColor = e.target.style.backgroundColor === "blue" ? "green" : "blue";  
    // }

                function changeLight(){
                    let redLight = document.getElementById("redLight");
                    let orangeLight = document.getElementById("orangeLight");
                    let greenLight = document.getElementById("greenLight");
                    // redLight.style.opacity = 1;

                    if(redLight.style.opacity == "1"){
                        redLight.style.opacity = 0.2;
                        greenLight.style.opacity = 0.2;
                        orangeLight.style.opacity = 1;
                        return ""
                       
                    }
                    if(orangeLight.style.opacity == "1"){
                        orangeLight.style.opacity = 0.2;
                        redLight.style.opacity = 0.2;
                        greenLight.style.opacity = 1;
                        return ""


                    }
                    if(greenLight.style.opacity === "1"){
                        greenLight.style.opacity = 0.2;
                        orangeLight.style.opacity = 0.2;
                        redLight.style.opacity = 1;
                        return ""

                    }
                    
                }


                setInterval(changeLight,10000);
                
                


        //     { {
        //     setInterval(() => {

        //         if(redLight.style.opacity === "1"){
        //             redLight.style.opacity = "0.2";
        //             greenLight.style.opacity = "0.2";
        //             orangeLight.style.opacity = "1";

        //         }else if(orangeLight.style.opacity === "1"){
        //             orangeLight.style.opacity = "0.2";
        //             redLight.style.opacity = "0.2";
        //             greenLight.style.opacity = "1";  

                    
            
        //     }else{
        //         greenLight.style.opacity = "1";
        //         greenLight.style.opacity = "0.2";   }
        //         redLight.style.opacity = "1";   
        //     }, 
        // 3000)
        // }}

  return(
     <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"12px",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh",
        fontSize:"24px",
        fontWeight:"bold",
        backgroundColor:"#282c34",
        color:"white",
        width:"100vw",
        textAlign:"center",
        height:"100vh",
        noWrap:"nowrap"
        }}>
        <div id="redLight" style={{padding:"2%",backgroundColor:"red",borderRadius:"100%", height:"100px", width:"100px",opacity:1}}></div>
        <div id="orangeLight" style={{padding:"2%",backgroundColor:"orange",borderRadius:"100%", height:"100px", width:"100px",opacity:0.2}}></div>
        <div id="greenLight" style={{padding:"2%",backgroundColor:"green",borderRadius:"100%", height:"100px", width:"100px",opacity:0.2}}></div>
        {/* {<button onClick={changeLight} style={{padding:"10px",fontSize:"16px",fontWeight:"bold",borderRadius:"8px",border:"none",cursor:"pointer",backgroundColor:"blue"}}>Change</button> } */}
     </div>
    );
}