"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  /* Load cart */
  useEffect(() => {
    try {
      const raw = localStorage.getItem("samagri_cart");
      if (raw) {
        setCartItems(JSON.parse(raw));
      }
    } catch (error) {
      console.log("Cart load error:", error);
    }
  }, []);

  /* Save cart */
  useEffect(() => {
    try {
      localStorage.setItem("samagri_cart", JSON.stringify(cartItems));
    } catch (error) {
      console.log("Cart save error:", error);
    }
  }, [cartItems]);

  /* Add To Cart */
  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item._id === product._id);

      if (found) {
        return prev.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + qty,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: qty,
        },
      ];
    });

    openCart();
  };

  /* Update Quantity */
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: quantity < 1 ? 1 : quantity,
            }
          : item
      )
    );
  };

  /* Remove Item */
  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item._id !== id)
    );
  };

  /* Clear Cart */
  const clearCart = () => setCartItems([]);

  /* Cart Count */
  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        cartCount,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }

  return ctx;
}