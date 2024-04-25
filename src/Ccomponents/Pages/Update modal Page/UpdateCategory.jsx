import React from "react";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../../redux/categoryReducer";

function UpdateCategory({ rawItem, setRawItem, state }) {
  const dispatch = useDispatch();
  const updateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategory(rawItem));
  };
  const { category, details } = rawItem;
  return (
    <div
      className="modal fade"
      id="updateCategory"
      tabIndex="-1"
      aria-labelledby="updateCategoryLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateCategoryLabel">
              Edit Category
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body ">
            <form onSubmit={updateSubmit} className="border shadow p-3 rounded">
              <label className="fw-bold">Edit Product Category</label>
              <input
                onChange={(e) => {
                  setRawItem({
                    ...rawItem,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="text"
                className="form-control"
                name="category"
                id="category"
                value={category}
                placeholder="Select Product Category"
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

export default UpdateCategory;
