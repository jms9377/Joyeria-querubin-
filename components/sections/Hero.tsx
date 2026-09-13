'use client';

import { BrandLogo } from '@/components/BrandLogo';
import { Cherub } from '@/components/Cherub';

export function Hero() {
  const explore = () => document.querySelector('#coleccion')?.scrollIntoView({ behavior: 'smooth' });

  return <header className="hero" id="inicio">
    <nav className="topbar" aria-label="Navegación principal">
      <a href="#inicio" className="brand-link" aria-label="Joyería Querubín, inicio"><BrandLogo priority/></a>
      <a href="#coleccion" className="nav-link">Colección clásica <span aria-hidden="true">↓</span></a>
    </nav>
    <div className="hero-copy">
      <p className="eyebrow">CATÁLOGO DIGITAL · 01</p>
      <h1>El oro,<br/><em>en movimiento.</em></h1>
      <p className="hero-line">Descubre la colección de Joyería Querubín.</p>
      <button className="explore-button" onClick={explore}>Explorar colección <span aria-hidden="true">↓</span></button>
    </div>
    <div className="hero-cherub-wrap"><Cherub className="hero-cherub" priority/></div>
    <p className="hero-scroll" aria-hidden="true">Desliza para descubrir <span>↓</span></p>
  </header>;
}
