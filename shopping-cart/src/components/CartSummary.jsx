/**
 * Cart summary component showing total and clear cart button
 * @param {number} total - Total amount of all products
 * @param {function} onClearCart - Callback function to clear the cart
 * @param {number} productCount - Number of items in the cart
 */

function CartSummary({ total, onClearCart, productCount }) {
  const handleClearCart = () => {
    if (window.confirm("¿Seguro que deseas vaciar el carrito?")) {
      onClearCart();
    }
  };

  return (
    <div className="cart-summary summary-card">
      <div className="summary-header">
        <h2>Resumen del carrito</h2>
        <button
          onClick={handleClearCart}
          disabled={productCount === 0}
          className="button-danger clear-cart-button"
        >
          Vaciar carrito
        </button>
      </div>
      <div className="summary-content">
        <p className="item-count">Artículos: {productCount}</p>
        <p className="total-amount">Total</p>
        <p className="summary-value">$ {total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartSummary;
