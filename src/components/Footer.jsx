function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#home" aria-label="Stockly home">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>Stockly</span>
      </a>
      <p>Inventory records for growing businesses.</p>
      <nav aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
      <small>&copy; 2026 Stockly. Front-end demonstration.</small>
    </footer>
  )
}

export default Footer
