import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import "../singal/singal.scss";
import "./new.scss";

const New = () => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>User Name</label>
                <input type="text" placeholder="Enter your Name" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="Enter your Email" />
              </div>
              <div className="formInput">
                <label>Phone No</label>
                <input type="text" placeholder="Enter your Phone No" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="text" placeholder="Enter your Password" />
              </div>
              <div className="formInput">
                <label>Confirm Password</label>
                <input type="text" placeholder="Enter your Confirm Password" />
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
