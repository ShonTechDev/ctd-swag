import ProductList from './ProductList.jsx';
import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import inventoryData from './assets/inventory.json';

function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);

  return (
    <main>
      <Header />
      <ProductList inventory={inventory} />
    </main>
  );
}

export default App;