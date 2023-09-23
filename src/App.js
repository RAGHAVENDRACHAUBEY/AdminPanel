import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/list/List";
import New from "./Pages/new/New";
import Singal from "./Pages/singal/Singal";
import Product from "./Pages/Product/Product";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/products" element={<Product />} />
          <Route path="/singaluser" element={<Singal />} />
          <Route path="/newuser" element={<New />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
