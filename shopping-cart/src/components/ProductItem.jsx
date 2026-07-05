/**
 * Individual product item component for the shopping cart
 * @param {Object} product - Product object with name and price
 * @param {number} index - Index of the product in the list
 * @param {function} onRemoveProduct - Callback function to remove product
 */

function ProductItem({ product, index, onRemoveProduct }) {
  const handleRemove = () => {
    onRemoveProduct(index);
  };

  return (
    <div className="product-item">
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <button
        onClick={handleRemove}
        className="button-danger remove-button"
        aria-label={`Eliminar ${product.name} del carrito`}
      >
        Eliminar
      </button>
    </div>
  );
}

export default ProductItem;
