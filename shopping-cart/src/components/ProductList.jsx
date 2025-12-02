import ProductItem from "./ProductItem";
/**
 * Product list component that displays all items in the cart
 * @param {Array} products - Array of product objects
 * @param {function} onRemoveProduct - Callback function to remove a product
 */

function ProductList({ products, onRemoveProduct }) {
  /**
   * Check if products array is empty
   */

  if (products.length === 0) {
    return (
      <div className="empty-cart text-red-600 font-bold m-4 p-4 border-3 rounded">
        <p>Your cart is empty</p>
        <p>Add some products to get started!</p>
      </div>
    );
  }
  return (
    <div className="product-list">
      <h2>Your Cart Items:</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onRemoveProduct={onRemoveProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
