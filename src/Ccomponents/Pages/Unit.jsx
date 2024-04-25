import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUnit, deleteUnit } from "../../redux/unitReducer";
import UpdateUnit from "./Update modal Page/UpdateUnit";

function Unit() {
  const dispatch = useDispatch();
  const [unit, setUnit] = useState("");
  const [details, setDetails] = useState("");
  const [info, setInfo] = useState(false);
  const [rawItem, setRawItem] = useState("");
  const data = useSelector((state) => state.unitReducer.units);
  console.log(data);

  const brandOfNumber = useSelector((state) => state.unitReducer.units.length);

  useEffect(() => {
    setUnit("");
    setDetails("");
  }, [info]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setInfo(false);
    const units = {
      id: brandOfNumber + 1,
      unit,
      details,
    };
    dispatch(addUnit(units));
  };

  const handleDelete = (id) => {
    dispatch(deleteUnit(id));
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <h4>Unit Name</h4>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addUnit"
          onClick={() => setInfo(true)}
        >
          Add Unit
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="addUnit"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Unit
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
                  value={unit}
                  onChange={(e) => {
                    setUnit(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput3"
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
      <table className="table table-hover product-table ">
        <thead>
          <tr>
            <th className="border border-dark text-center">ID</th>
            <th className="border border-dark text-center">Unit</th>
            <th className="border border-dark text-center">Details</th>
            <th className="border border-dark text-center">Action</th>
          </tr>
        </thead>
        <tbody className="tabody">
          {data &&
            data.map((item) => {
              const { id, unit, details } = item;
              return (
                <tr key={id}>
                  <td className="border border-dark text-center">{id}</td>
                  <td className="border border-dark text-center">{unit}</td>
                  <td className="border border-dark text-center">{details}</td>
                  <td className="border border-dark text-center">
                    <button
                      className="btn btn-info"
                      data-bs-toggle="modal"
                      data-bs-target="#updateUnit"
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
      <UpdateUnit rawItem={rawItem} setRawItem={setRawItem} />
    </div>
  );
}

export default Unit;
