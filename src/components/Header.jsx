function Header({ onLogin }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Stockly home">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>Stockly</span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="button button-outline" type="button" onClick={onLogin}>
        Login
      </button>
    </header>
  )
}

export default Header
