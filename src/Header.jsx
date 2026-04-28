import { useEffect } from 'react';
import ctdLogo from './assets/mono-blue-logo.png';

function Header({ cart }) {
  useEffect(() => {
    cart.forEach((item) => {
      console.log(item.baseName, item.cartItemId);
    });

    if (cart.length > 0) {
      console.log('--end of cart--');
    }
  });
  return (
    <div className="coming-soon">
      <h1>CTD Swag</h1>

      <p>Cart: {cart.length}</p>

      <div style={{ height: 200, width: 100, margin: '0 auto' }}>
        <img src={ctdLogo} alt="Code The Dream Logo" />
      </div>
    </div>
  );
}

export default Header;