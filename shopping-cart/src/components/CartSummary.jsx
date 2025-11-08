/**
 * Cart summary component showing total and clear cart button
 * @param {number} total - Total amount of all products
 * @param {function} onClearCart - Callback function to clear the cart
 * @param {number} productCount - Number of items in the cart
 */

function CartSummary({ total, onClearCart, productCount }) {
  /**
   * Handle clear cart button click
   */
  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      onClearCart();
    }
  };

  return (
    <div className="cart-summary">
      <div className="summary-content">
        <h2>Cart Summary</h2>
        <div className="summary-details">
          <p className="item-count">Items: ${productCount}</p>
          <p className="total-amount">Total ${total.toFixed(2)}</p>
        </div>
        <button
          onClick={handleClearCart}
          disabled={productCount === 0}
          className="clear-cart-button"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
