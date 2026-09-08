import analyticsSetup from '../assets/analytics-setup.svg'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Inventory and profit management</p>
        <h1>
          <span>Every item</span>{' '}
          <span>accounted for.</span>
        </h1>
        <p className="hero-description">
          Record stock movement and understand daily profit from one focused workspace.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#pricing">View plans</a>
          <a className="text-link" href="#about">See how it works</a>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="hero-plane" />
        <img
          src={analyticsSetup}
          alt=""
          width="800"
          height="770"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}

export default Hero
