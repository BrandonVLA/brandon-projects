import {useCart} from "./hooks/useCart.js";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import "./App.css";

function App() {
  const { products, total, addProduct, removeProduct, clearCart } = useCart();

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛒 Shopping Cart</h1>
        <p>Add products to your cart and manage your items</p>
      </header>

      <main className="app-main">
        <section className="form-section">
          <ProductForm onAddProduct={addProduct} />
        </section>

        <section className="cart-section">
          <ProductList products={products} onRemoveProduct={removeProduct} />
        </section>

        <section className="summary-section">
          <CartSummary
            total={total}
            onClearCart={clearCart}
            productCount={products.length}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
