'use client';

import { useEffect, useRef } from 'react';
import { classicProducts } from '@/data/products';
import { WhatsAppLink } from '@/components/WhatsAppLink';
import { JewelryObject } from '@/components/three/JewelryObject';

export function ProductJourney() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      root.current?.querySelectorAll<HTMLElement>('.product-scene').forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        scene.style.setProperty('--journey', String(progress));
      });
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => { window.removeEventListener('scroll', requestUpdate); window.removeEventListener('resize', requestUpdate); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return <section className="collection" id="coleccion" ref={root} aria-labelledby="collection-title">
    <div className="collection-intro">
      <p className="eyebrow">SELECCIÓN · 01—04</p><h2 id="collection-title">Colección<br/><em>clásica</em></h2>
      <p>Cuatro estudios tridimensionales. Desliza para descubrir cada silueta y solicitar información.</p>
    </div>
    {classicProducts.map((product, index) => <article className={`product-scene scene-${index + 1}`} key={product.id} id={product.id}>
      <div className="scene-number" aria-hidden="true">0{index + 1}</div>
      <div className="object-stage"><JewelryObject kind={product.kind}/><div className="floor-shadow"/></div>
      <div className="product-copy">
        <p className="eyebrow">{product.category}</p><p className="conceptual-tag">Diseño conceptual · demostración 3D</p>
        <h3>{product.name}</h3><p className="description">{product.description}</p><p className="material">{product.material}</p>
        <WhatsAppLink productName={product.name}/>
      </div>
      <p className="scroll-cue" aria-hidden="true">Desliza para revelar <span>↓</span></p>
    </article>)}
  </section>;
}
