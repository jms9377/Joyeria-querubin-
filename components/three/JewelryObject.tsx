'use client';
import type { ProductKind } from '@/data/products';

type Props = { kind: ProductKind };
export function JewelryObject({ kind }: Props) {
  if (kind === 'chain') return <div className="jewel jewel-chain" role="img" aria-label="Modelo 3D conceptual de cadena"><i/><i/><i/><i/><i/><i/></div>;
  if (kind === 'bracelet') return <div className="jewel jewel-bracelet" role="img" aria-label="Modelo 3D conceptual de pulsera"><span/><span/><span/><span/><span/></div>;
  return <div className={`jewel jewel-ring ${kind === 'ring-gent' ? 'jewel-ring--bold' : ''}`} role="img" aria-label="Modelo 3D conceptual de anillo"><div className="ring-band"/><div className="ring-setting"><b/></div></div>;
}
