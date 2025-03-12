import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(1);

  let foundProduct;
  let index

const onDelete = (product)=>{
  const deleteConfirm = window.confirm(`Do you want to delete ${product.quantity} ${product.name} from the cart?`);
  if (!deleteConfirm) return;
  const newCartItems = cartItems.filter((item) => item._id !== product._id);
 
  setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price * product.quantity);
  setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - product.quantity);
  setCartItems(newCartItems);
  toast.error(`${product.quantity} ${product.name} removed from the cart.`);
}

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.map((item) => {
      if (item._id === id) {
        if (value === 'inc') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (value === 'dec' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCartItems(newCartItems);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price * (value === 'inc' ? 1 : -1));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + (value === 'inc' ? 1 : -1));
  };
  const incQty = () => {
    setQuantity((preQuantity) => preQuantity + 1);
  };
  const decQty = () => {
    setQuantity((preQuantity) => {
      if (preQuantity > 1) {
        return preQuantity - 1;
      }
      return 1;
    });
  };

  const onAdd = (product, qty) => {
    const checkIsProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * qty);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + qty);

    if (checkIsProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + qty,
          };
      });
      setCartItems(updatedCartItems);
     

    } else {
      product.quantity = qty;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
   
  };
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        quantity,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onDelete
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
