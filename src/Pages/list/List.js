import React from "react";
import Datatable from "../../Components/datatable/Datatable";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./list.scss";

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}

export default List;
