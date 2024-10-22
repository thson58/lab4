import { createContext, useEffect, useState } from 'react';

import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Cart from './components/Cart';
import LoginPopup from './components/Login';

import "./App.css";

import pizza1 from "./images/pizza1.jpg"
import pizza2 from "./images/pizza2.jpg"
import pizza3 from "./images/pizza3.jpg"
import pizza4 from "./images/pizza4.jpg"
import pizza5 from "./images/pizza5.jpg"

const images = [
  pizza1,
  pizza2,
  pizza3,
  pizza4,
  pizza5
];

export const loggedInUser = createContext();

function App() {

  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const [products, setProducts] = useState();


  const sumQuantityProduct = (arr) => {
    return arr.reduce((quantity, item) => {
      return quantity = quantity + item.count;
    }, 0);
  }

  // fetch API lấy dữ liệu list of products
  useEffect(() => {
    fetch('https://api-demo-4gqb.onrender.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.data))
      .catch(error => console.log(error))
  }, []);

  useEffect(() => {
    const quantity = sumQuantityProduct(cart);
    setQuantityProduct(quantity)
  }, [cart]);

  const addProductToCart = (product) => {
    if (!product) return null;
    if (cart.indexOf(product) !== -1) {
      const index = cart.indexOf(product);
      const arr = [...cart];
      arr[index].count = arr[index].count + 1;
      setCart(arr);
    }
    else {
      const arr = [...cart];
      product.count = 1;
      arr.push(product);
      setCart(arr);
    }

  };

  const handleIncrease = (product) => {
    const index = cart.indexOf(product);
    const arr = [...cart];
    arr[index].count = arr[index].count + 1;
    setCart(arr);
  };

  const handleDecrease = (product) => {
    const index = cart.indexOf(product);
    const arr = [...cart];
    arr[index].count = arr[index].count - 1;

    const newArr = arr.filter((product) => {
      return product.count !== 0;
    });
    setCart(newArr);
  };

  const handleBuy = (product) => {
    addProductToCart(product);
  };

  const handleLoginSubmit = async (form) => {
    try {
      const res = await fetch('https://api-demo-4gqb.onrender.com/users/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <loggedInUser.Provider value={user}>
      <div className="app">
        {/* Header */}
        <Header brand='Pizza House' handleOnClick={quantityProduct} />
        {/* Carousel */}
        <Carousel images={images}
          title='Neapolian Pizza'z
          description='If you are looking for a traditional pizza the Neapolian is the best option!'
        />
        {/* Our Menu */}
        <Cards label='Our Menu' products={products} handleBuy={handleBuy} />
        {/* Cart Popup */}
        <Cart cart={cart}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
        <LoginPopup handleLoginSubmit={handleLoginSubmit} />
      </div>
    </loggedInUser.Provider >
  )
}

export default App;
