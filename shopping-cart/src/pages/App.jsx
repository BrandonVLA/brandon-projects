import { useCart } from "../hooks/useCart.js";
import ProductForm from "../components/ProductForm.jsx";
import ProductList from "../components/ProductList.jsx";
import CartSummary from "../components/CartSummary.jsx";
import "../App.css";

function App() {
  const { products, total, addProduct, removeProduct, clearCart } = useCart();

  return (
    <div className="app">
      <header className="app-header">
        <div className="hero-badge">🛒 Premium Commerce</div>
        <h1 className="hero-title">
          Dale a tu carrito una experiencia más profesional y comercial
        </h1>
        <p className="hero-copy">
          Administra tus productos, visualiza el total y controla tu pedido con un diseño claro, moderno y elegante.
        </p>
      </header>

      <main className="app-main">
        <section className="form-section">
          <h2 className="section-title">Agregar un nuevo producto</h2>
          <ProductForm onAddProduct={addProduct} />
        </section>

        <section className="cart-section">
          <h2 className="section-title">Contenido del carrito</h2>
          <ProductList products={products} onRemoveProduct={removeProduct} />
        </section>

        <aside className="summary-section">
          <CartSummary
            total={total}
            onClearCart={clearCart}
            productCount={products.length}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
