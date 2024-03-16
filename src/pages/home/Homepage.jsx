import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/header";
import Notification from "../../components/notifications";

const Homepage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "210px", flexGrow: 1 }}>
        <Header />
        <div style={{ marginTop: "20px", marginLeft: "40px", flexGrow: 1 }}className="pl-2 pr-2 pt-4">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
