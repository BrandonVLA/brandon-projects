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
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="productName">Nombre del producto</label>
        <input
          className="product-input"
          id="productName"
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          placeholder="Ej. Auriculares inalámbricos"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="productPrice">Precio</label>
        <input
          className="product-input"
          id="productPrice"
          type="number"
          min="0"
          step="0.01"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          placeholder="Ej. 49.99"
          required
        />
      </div>
      <button type="submit" className="button-primary">
        Agregar al carrito
      </button>
    </form>
  );
}

export default ProductForm;
