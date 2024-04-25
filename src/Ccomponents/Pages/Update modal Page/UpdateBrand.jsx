import React from "react";
import { useDispatch } from "react-redux";
import { updateBrand } from "../../../redux/brandReducer";

function UpdateBrand({ rawItem, setRawItem, state }) {
  const dispatch = useDispatch();
  const updateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBrand(rawItem));
  };
  const { brand, details } = rawItem;
  return (
    <div
      className="modal fade"
      id="updateBrand"
      tabIndex="-1"
      aria-labelledby="updateBrandLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateBrandLabel">
              Edit Product
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={updateSubmit} className="border shadow p-3 rounded">
              <label className="fw-bold">Edit Product Brand</label>
              <input
                onChange={(e) => {
                  setRawItem({
                    ...rawItem,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="text"
                className="form-control"
                name="brand"
                id="brand"
                value={brand}
                placeholder="Select Product Brand"
              />
              <br></br>
              <label className="fw-bold">Edit Product Details</label>
              <textarea
                className="form-control"
                name="details"
                id="details"
                onChange={(e) => {
                  setRawItem({
                    ...rawItem,
                    [e.target.name]: e.target.value,
                  });
                }}
                rows="3"
                value={details}
                placeholder="Details"
              ></textarea>
              <div className="d-flex  mt-3">
                <button
                  type="submit"
                  className="btn btn-success m-2 "
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateBrand;
