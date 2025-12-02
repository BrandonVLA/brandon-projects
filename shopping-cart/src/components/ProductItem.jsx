/**
 * Individual product item component for the shopping cart
 * @param {Object} product - Product object with name and price
 * @param {number} index - Index of the product in the list
 * @param {function} onRemoveProduct - Callback function to remove product
 */

function ProductItem({ product, index, onRemoveProduct }) {
  /**
   * Handle remove product button click
   */
  const handleRemove = () => {
    onRemoveProduct(index);
  };

  return (
    <div className="product-item m-2 p-2 border-2 rounded flex justify-between items-center">
      <div className="product-info  text-center">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
      </div>
      <button
        onClick={handleRemove}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          hover: { backgroundColor: "darkred" },
        }}
        className="remove-button"
        aria-label={`Remove ${product.name} from Cart`}
      >
        Remove
      </button>
    </div>
  );
}

export default ProductItem;
