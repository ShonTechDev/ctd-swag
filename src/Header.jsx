import ctdLogo from './assets/mono-blue-logo.png';

function Header() {
  return (
    <div className="coming-soon">
      <h1>CTD Swag</h1>
      <div style={{ height: 200, width: 100, margin: '0 auto' }}>
        <img src={ctdLogo} alt="Code The Dream Logo" />
      </div>
    </div>
  );
}

export default Header;