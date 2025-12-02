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
    <div className="cart-summary summary-details m-2 p-2 ">
      <button
        onClick={handleClearCart}
        disabled={productCount === 0}
        className="clear-cart-button"
        style={{
          backgroundColor: "red",
          fontWeight: "bold",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "10px 0",
          textTransform: "uppercase",
          hover: { backgroundColor: "darkred" },
        }}
      >
        Clear Cart
      </button>
      <div className="summary-content">
        <h2 className="bg-white text-black uppercase text-xl font-bold rounded-xl p-2 mb-2">
          Cart Summary
        </h2>
        <div className="summary-details">
          <p className="item-count">Items: {productCount}</p>
          <p className="total-amount text-green-100 font-bold">
            Total ${total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
