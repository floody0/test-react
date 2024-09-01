import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart(cart);
  };

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    let updatedCart;

    if (existingProductIndex > -1) {
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity }];
    }

    saveCart(updatedCart);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId
        ? { ...item, quantity }
        : item
    ).filter(item => item.quantity > 0);

    saveCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
  };

  return { cart, addToCart, updateQuantity, removeFromCart };
};

export default useCart;