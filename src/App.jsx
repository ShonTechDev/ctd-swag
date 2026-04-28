import { useEffect } from 'react';
import ProductList from './ProductList.jsx';
import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import inventoryData from './assets/inventory.json';

function App() {
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setInventory([...inventoryData.inventory]);
  }, []);

  function handleAddItemToCart(id) {
    const target = inventory.find((item) => item.id === id);

    if (!target) {
      console.error('cart error: item not found');
      return;
    }
    
    const cartItem = {
      ...target,
      cartItemId: Date.now(),
    };

    setCart([...cart, cartItem]);
  }


  return (
    <main>
      <Header cart={cart} />
      <ProductList 
        inventory={inventory} 
        handleAddItemToCart={handleAddItemToCart}
      />
    </main>
  );
}

export default App;