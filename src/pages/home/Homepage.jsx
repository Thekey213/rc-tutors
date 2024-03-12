import React from "react";
import Sidebar from "../../components/Sidebar";
 

const Homepage = () => {

    return(
       <div>
           
        <div><Sidebar/><Header/>
        <div className="p-10">
        <Notification/>
        </div>

 <p>words</p>

        </div>
       </div>
     
    )
    
}

export default Homepage;