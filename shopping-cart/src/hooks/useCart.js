import { useState, useEffect } from "react";

function useCart() {
  //Cart State
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  /**
   * Add a new product to the cart
   * @param {string} name - Product name
   * @param {number} price - Product price
   */

  const addProduct = (name, price) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        name: name,
        price: Number(price),
      },
    ]);
  };

  /**
   * Remove a product from the cart by index
   * @param {number} index - Index of product to remove
   */
  const removeProduct = (index) => {
    const newList = products.filter((_, i) => i !== index);
    setProducts(newList);
  };

  const clearCart = () => {
    setProducts([]);
  };

  useEffect(() => {
    const sumTotal = products.reduce(
      (sum, product) => sum + Number(product.price),
      0
    );
    setTotal(sumTotal);
  }, [products]);

  return {
    products,
    total,
    addProduct,
    removeProduct,
    clearCart,
  };
}

export default useCart;
