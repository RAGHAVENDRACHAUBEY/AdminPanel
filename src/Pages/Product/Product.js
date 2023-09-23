import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns1, userRows1 } from "../../datatablesource";
import { Link } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./product.scss";
import "../../Components/datatable/datatable.scss";

function List() {
  const [data, setData] = useState(userRows1);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Product
            <Link to="#" className="link">
              Add New Product
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns1.concat(actionColumn)}
            // pageSize={9}
            // rowsPerPageOptions={[9]}
            // checkboxSelection
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}

export default List;
