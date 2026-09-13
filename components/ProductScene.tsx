import type { Product } from '@/data/products';
import { WhatsAppLink } from '@/components/WhatsAppLink';
import { HandShowcase } from '@/components/three/HandShowcase';
import { JewelryObject } from '@/components/three/JewelryObject';

type ProductSceneProps = { product: Product; index: number };

export function ProductScene({ product, index }: ProductSceneProps) {
  const isRing = product.kind === 'ring-lady' || product.kind === 'ring-gent';
  return <article className={`product-scene scene-${index + 1} ${isRing ? 'product-scene--ring' : ''}`} id={product.id}>
    <div className="scene-number" aria-hidden="true">0{index + 1}</div>
    <div className="object-stage">{isRing ? <HandShowcase kind={product.kind}/> : <JewelryObject kind={product.kind}/>}<div className="floor-shadow"/></div>
    <div className="product-copy">
      <p className="eyebrow">{product.category}</p><p className="conceptual-tag">Diseño conceptual · demostración 3D</p>
      <h3>{product.name}</h3><p className="description">{product.description}</p><p className="material">{product.material}</p>
      <WhatsAppLink productName={product.name} message={product.whatsappMessage}/>
    </div>
    <p className="scroll-cue" aria-hidden="true">Desliza para revelar <span>↓</span></p>
  </article>;
}
