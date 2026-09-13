import type { ProductKind } from '@/data/products';
import { JewelryObject } from './JewelryObject';

type HandShowcaseProps = { kind: Extract<ProductKind, 'ring-lady' | 'ring-gent'> };

/** Lightweight hand study; can later be replaced by an image, video, 3D hand, or GLB scene. */
export function HandShowcase({ kind }: HandShowcaseProps) {
  const handClass = kind === 'ring-gent' ? 'hand-showcase--masculine' : 'hand-showcase--feminine';
  return <div className={`hand-showcase ${handClass}`} role="img" aria-label={`Estudio animado de mano con ${kind === 'ring-gent' ? 'anillo clásico de hombre' : 'anillo clásico de dama'}`}>
    <div className="hand-palm"/><i className="hand-finger hand-finger--one"/><i className="hand-finger hand-finger--two"/><i className="hand-finger hand-finger--three"/><i className="hand-finger hand-finger--four"/>
    <div className="hand-ring"><JewelryObject kind={kind}/></div>
  </div>;
}
