import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex" id="wrapper">
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-2 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-user me-2"></i>
        </div>
        <div className="list-group list-group-flush my-3">
          <Link
            to="/dashbord"
            className="list-group-item list-group-item-action bg-transparent  active m-2 "
          >
            <i className="fa-solid fa-gauge me-2 "></i>
            Dashboard
          </Link>
          <Link
            to="/product"
            className="list-group-item list-group-item-action  fw-bold"
          >
            <i className="fa-solid fa-list-ul mx-2"></i>
            Products
          </Link>
          <Link
            to="/catagory"
            className="list-group-item list-group-item-action   fw-bold"
          >
            <i className="fa-solid fa-layer-group mx-2"></i>
            Category
          </Link>
          <Link
            to="/brand"
            className="list-group-item list-group-item-action   fw-bold"
          >
            <i className="fa-brands fa-bandcamp mx-2"></i>
            Brand
          </Link>
          <Link
            to="/unit"
            className="list-group-item list-group-item-action   fw-bold"
          >
            <i className="fa-solid fa-chart-simple mx-2"></i>
            Unit
          </Link>
          <Link
            to="/"
            className="list-group-item list-group-item-action  text-danger fw-bold fs-5 rounded "
          >
            Logout
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
