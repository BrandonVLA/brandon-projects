import { useState } from "react";

/**
 * Product form component for adding new items to the cart
 * @param {function} onAddProduct - Callback function when product is added
 */

function ProductForm({ onAddProduct }) {
  //Local state for form inputs
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */

  const handleSubmit = (e) => {
    e.preventDefault();

    //Input Validation
    if (productName.trim() && productPrice) {
      onAddProduct(productName.trim(), productPrice);
      //Reset the form
      setProductName("");
      setProductPrice("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="product-form text-center m-4 p-4 border-3 rounded"
    >
      <div className="form-group">
        <label htmlFor="productName" className="font-bold">
          Product Name:{" "}
        </label>
        <input
          className="border rounded m-2 p-1 "
          id="productName"
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          required
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="productPrice" className="font-bold">
          Product Price:{" "}
        </label>
        <input
          className="border rounded m-2 p-1"
          id="productPrice"
          type="text"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          required
        />
      </div>
      <a
        type="submit"
        className="add-button"
        onClick={handleSubmit}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          hover: { backgroundColor: "darkgreen" },
        }}
      >
        Add to Cart
      </a>
    </form>
  );
}

export default ProductForm;
