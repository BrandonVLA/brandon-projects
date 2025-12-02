import { useCart } from "./hooks/useCart.js";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import "./App.css";

function App() {
  const { products, total, addProduct, removeProduct, clearCart } = useCart();

  return (
    <div className="app bg-blue-500 min-h-screen p-4">
      <header className="app-header">
        <h1 className="m-5">
          <span className="bg-white text-black pt-2 pb-2 rounded-xl">
            <span className="bg-orange-500 p-2 rounded-xl pr-0 text-white">
              🛒Shop
            </span>
            ping
            <span className="bg-black text-orange-500 pt-2 pb-2 rounded-xl">
            Cart
          </span>
          </span>
        </h1>
        <p className="font-bold underline">
          Add products to your cart and manage your items!
        </p>
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
