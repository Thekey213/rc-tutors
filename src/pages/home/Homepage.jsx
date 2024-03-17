// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "../../components/Sidebar";
 import Header from "../../components/header";
 import Notification from "../../components/notifications";

const Homepage = () => {

  

    return(
       <div>
           
            <div><Sidebar/><Header Description={"Hello world"}/>
                <div className="pl-2 pr-2 pt-4">
                    <Notification/>
                </div>
                </div> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br>
       </div>
     
    )
    
}

export default Homepage;