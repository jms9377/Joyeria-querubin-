'use client';

export function Hero() {
  const explore = () => document.querySelector('#coleccion')?.scrollIntoView({ behavior: 'smooth' });

  return <header className="hero" id="inicio">
    <nav className="topbar" aria-label="Navegación principal">
      <a href="#inicio" className="wordmark" aria-label="Joyería Querubín, inicio">
        <small>JOYERÍA</small><strong>QUERUBÍN</strong>
      </a>
      <a href="#coleccion" className="nav-link">Colección clásica <span aria-hidden="true">↓</span></a>
    </nav>
    <div className="hero-copy">
      <p className="eyebrow">CATÁLOGO DIGITAL · 01</p>
      <h1>Joyería<br/><em>Querubín</em></h1>
      <p className="hero-line">Descubre el oro de una nueva forma.</p>
      <button className="explore-button" onClick={explore}>Explorar colección <span aria-hidden="true">↓</span></button>
    </div>
    <div className="hero-sculpture" aria-hidden="true"><i/><i/><b>✦</b></div>
    <p className="hero-scroll" aria-hidden="true">Desliza para descubrir <span>↓</span></p>
  </header>;
}
