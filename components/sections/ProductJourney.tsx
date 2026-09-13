'use client';

import { useEffect, useRef } from 'react';
import { ProductScene } from '@/components/ProductScene';
import { classicProducts } from '@/data/products';

export function ProductJourney() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => { frame = 0; root.current?.querySelectorAll<HTMLElement>('.product-scene').forEach((scene) => {
      const rect = scene.getBoundingClientRect(); const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      scene.style.setProperty('--journey', String(progress));
    }); };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); window.addEventListener('scroll', requestUpdate, { passive: true }); window.addEventListener('resize', requestUpdate);
    return () => { window.removeEventListener('scroll', requestUpdate); window.removeEventListener('resize', requestUpdate); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <section className="collection" id="coleccion" ref={root} aria-labelledby="collection-title">
    <div className="collection-intro"><p className="eyebrow">SELECCIÓN · 01—04</p><h2 id="collection-title">Colección<br/><em>clásica</em></h2><p>Cuatro estudios tridimensionales. Desliza para descubrir cada silueta y solicitar información.</p></div>
    {classicProducts.map((product, index) => <ProductScene key={product.id} product={product} index={index}/>)}</section>;
}
