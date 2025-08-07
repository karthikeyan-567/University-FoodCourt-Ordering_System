import { useState } from "react";

function Cartitems(props) {
  const { item_name, item_qty, item_type } = props;
  const [prevQty, Setqty] = useState(item_qty);

  const inhandleqty = () => Setqty((prevQty) => prevQty + 1);
  const dechandleqty = () => Setqty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

  return (
    <div
      className="itembox d-flex  align-items-center p-3 mb-3"
      style={{
        backgroundColor: "#c4b492",
        borderRadius: "20px",
        width: "95%",
        margin: "auto",
        fontFamily: "sans-serif",
      }}
    >
      {/* Item Info - Fixed Width */}
      <div
        className="d-flex align-items-center"
        style={{ minWidth: "200px", gap: "10px" }}
      >
        <h5 className="mb-0" style={{ whiteSpace: "nowrap" }}>
          Item: {item_name}
        </h5>
        <span
          className="badge"
          style={{
            backgroundColor: item_type === "veg" ? "green" : "red",
            width: "15px",
            height: "15px",
            display: "inline-block",
            borderRadius: "2px",
          }}
        ></span>
      </div>

      {/* Quantity Control - Fixed Width */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minWidth: "150px", gap: "10px",position:"relative" , left:"150px" }}
      >
        <h5 className="mb-0">Qty:</h5>
        <button className="btn btn-danger btn-sm" onClick={dechandleqty}>
          -
        </button>
        <h5 className="mb-0">{prevQty}</h5>
        <button className="btn btn-success btn-sm" onClick={inhandleqty}>
          +
        </button>
      </div>

      {/* Action Buttons - Flexible */}
      <div className="d-flex align-items-center gap-3" style={{position:"relative" , left:"200px"}}>
        <button className="btn btn-outline-danger btn-sm">Delete</button>
        <button className="btn btn-outline-primary btn-sm">Add Item</button>
        <button className="btn btn-outline-secondary btn-sm">Cooking Instructions</button>
      </div>
    </div>
  );
}

export default Cartitems;