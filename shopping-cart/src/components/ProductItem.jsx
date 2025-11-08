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
    <div className="product-item">
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
      </div>
      <button
        onClick={handleRemove}
        className="remove-button"
        aria-label={`Remove ${product.name} from Cart`}
      >
        Remove
      </button>
    </div>
  );
}

export default ProductItem;
