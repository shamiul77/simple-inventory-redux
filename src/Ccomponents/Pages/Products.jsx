import React, { useEffect, useState } from "react";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../redux/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import UpdateModal from "./UpdateModal";

function Products() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [brand, setBrand] = useState("");
  const [details, setDetails] = useState("");
  const [info, setInfo] = useState(false);
  const [rawItem, setRawItem] = useState("");
  const state = useSelector((state) => state.productReducers.products);
  const productOfNumber = useSelector(
    (state) => state.productReducers.products.length
  );

  const updateProduct = () => {
    let dispatch = useDispatch;
    let location = useLocation;
  };

  useEffect(() => {
    setName("");
    setBrand("");
    setCategory("");
    setDetails("");
    setUnit("");
    setDetails("");
  }, [info]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setInfo(false);
    const product = {
      id: productOfNumber + 1,
      name,
      category,
      unit,
      brand,
      details,
    };
    dispatch(addProduct(product));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="py-5">
      <div className=" d-flex justify-content-between  mt-3">
        <h4 className=" mt-2">Product List</h4>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setInfo(true)}
        >
          Add Product
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  value={name}
                  className="form-control"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Input Product Name"
                />
                <br></br>
                <input
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Select Product catagory"
                />
                <br></br>
                <input
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Select Product Brand"
                />
                <br></br>
                <input
                  value={unit}
                  onChange={(e) => {
                    setUnit(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput4"
                  placeholder="Select Product Unit"
                />
                <br></br>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea5"
                  onChange={(e) => setDetails(e.target.value)}
                  value={details}
                  rows="3"
                  placeholder="Details"
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <table className="table table-hover product-table">
        <thead>
          <tr>
            <th className="border border-dark text-center">ID</th>
            <th className="border border-dark text-center">Product Name</th>
            <th className="border border-dark text-center">Catagory</th>
            <th className="border border-dark text-center">Brand</th>
            <th className="border border-dark text-center">Unit</th>
            <th className="border border-dark text-center">Details</th>
            <th className="border border-dark text-center">Action</th>
          </tr>
        </thead>
        <tbody className="tabody">
          {state &&
            state.map((item, key) => {
              const { id, name, category, brand, unit, details } = item;
              return (
                <tr key={key}>
                  <td className="border border-dark text-center">{id}</td>
                  <td className="border border-dark text-center">{name}</td>
                  <td className="border border-dark text-center">{category}</td>
                  <td className="border border-dark text-center">{brand}</td>
                  <td className="border border-dark text-center">{unit}</td>
                  <td className="border border-dark text-center">{details}</td>
                  <td className="border border-dark text-center ">
                    <button
                      className="btn btn-info"
                      data-bs-toggle="modal"
                      data-bs-target="#updateModal"
                      onClick={() => setRawItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <UpdateModal rawItem={rawItem} setRawItem={setRawItem} state={state} />
    </div>
  );
}

export default Products;
