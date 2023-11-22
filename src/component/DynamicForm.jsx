import React, { useState } from 'react';
import productList from '../constants/ProductList';

function DynamicForm() {
  const [index, setIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const totalPageNumber = productList.length;
  const handleIncrement = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalPageNumber);
  };

  const handleDecrement = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + totalPageNumber) % totalPageNumber
    );
  };
  const handleCart = () => {
    setCartItems([...cartItems, productList[index].name]);
    console.log(cartItems);
  };
  const handleRemove = (id) => {
    const removedItems = cartItems.filter((items, i) => i !== id);
    setCartItems(removedItems);
  };
  return (
    <>
      <div className="index-button">
        <button onClick={handleDecrement} type="button">
          Previous Item
        </button>
        <button onClick={handleIncrement} type="button">
          Next Item
        </button>
      </div>
      <div className="items">
        <h3>{productList[index].name}</h3>
        <button type="button" onClick={handleCart}>
          add to cart
        </button>
      </div>
      <div className="sorted">
        {cartItems.map((item, i) => (
          <li key={item.id}>
            <h5>{item}</h5>
            <button type="button" onClick={() => handleRemove(i)}>
              Remove
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default DynamicForm;
