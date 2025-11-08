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
    <form onSubmit={handleSubmit}  className="product-form">
      <div className="form-group">
        <label htmlFor="productName">Product Name: </label>
        <input
          id="productName"
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="productPrice">Product Price: </label>
        <input
          id="productPrice"
          type="text"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          required
        />
      </div>
      <button type="submit" className="add-button">
        Add to Cart
      </button>
    </form>
  );
}

export default ProductForm;
