import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  updateCategory,
} from "../../redux/categoryReducer";
import UpdateCategory from "./Update modal Page/UpdateCategory";

function Category() {
  const dispatch = useDispatch();
  const [category, setcategory] = useState("");
  const [details, setDetails] = useState("");
  const [info, setInfo] = useState(false);
  const [rawItem, setRawItem] = useState("");
  const data = useSelector((state) => state.categoryReducer.categorys);
  console.log(data);

  const categoryOfNumber = useSelector(
    (state) => state.categoryReducer.categorys.length
  );

  useEffect(() => {
    setcategory("");
    setDetails("");
  }, [info]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setInfo(false);
    const categorys = {
      id: categoryOfNumber + 1,
      category,
      details,
    };
    dispatch(addCategory(categorys));
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <h4>Category List</h4>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addCategory"
          onClick={() => setInfo(true)}
        >
          Add Category
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="addCategory"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Category
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
                  value={category}
                  onChange={(e) => {
                    setcategory(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Select Product Category"
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
      <table className="table table-hover product-table ">
        <thead>
          <tr>
            <th className="border border-dark text-center">ID</th>
            <th className="border border-dark text-center">Category</th>
            <th className="border border-dark text-center">Details</th>
            <th className="border border-dark text-center">Action</th>
          </tr>
        </thead>
        <tbody className="tabody">
          {data &&
            data.map((item) => {
              const { id, category, details } = item;
              return (
                <tr key={id}>
                  <td className="border border-dark text-center">{id}</td>
                  <td className="border border-dark text-center">{category}</td>
                  <td className="border border-dark text-center">{details}</td>
                  <td className="border border-dark text-center">
                    <button
                      className="btn btn-info"
                      data-bs-toggle="modal"
                      data-bs-target="#updateCategory"
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
      <UpdateCategory rawItem={rawItem} setRawItem={setRawItem} />
    </div>
  );
}

export default Category;
