import { useState } from "react";
import Home from "./Ccomponents/Home";
import "./Ccomponents/App.css";
import Products from "./Ccomponents/Pages/Products";
import Catagory from "./Ccomponents/Pages/Catagory";
import Brand from "./Ccomponents/Pages/Brand";
import Unit from "./Ccomponents/Pages/Unit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashbord from "./Ccomponents/Pages/Dashbord";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/dashbord" element={<Dashbord />} />
            <Route path="/product" element={<Products />} />
            <Route path="/catagory" element={<Catagory />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/unit" element={<Unit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
