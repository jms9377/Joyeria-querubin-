export type ProductKind = 'ring-lady' | 'ring-gent' | 'chain' | 'bracelet';
export type Product = {
  id: string; name: string; category: string; description: string; material: string;
  conceptual: boolean; modelUrl?: string; kind: ProductKind;
};

export const classicProducts: Product[] = [
  { id: 'anillo-dama', name: 'Anillo clásico de dama', category: 'Anillos de dama', description: 'Una silueta delicada y luminosa, pensada como estudio de una presencia sofisticada.', material: 'Oro amarillo · demostración 3D', conceptual: true, kind: 'ring-lady' },
  { id: 'anillo-hombre', name: 'Anillo clásico de hombre', category: 'Anillos de hombre', description: 'Volumen sereno y líneas precisas en una propuesta conceptual de carácter atemporal.', material: 'Oro amarillo · demostración 3D', conceptual: true, kind: 'ring-gent' },
  { id: 'cadena', name: 'Cadena clásica', category: 'Cadenas', description: 'Eslabones fluidos con un ritmo limpio que celebra la luz y el movimiento.', material: 'Oro amarillo · demostración 3D', conceptual: true, kind: 'chain' },
  { id: 'pulsera', name: 'Pulsera clásica', category: 'Pulseras', description: 'Una composición equilibrada creada para acompañar gestos cotidianos con distinción.', material: 'Oro amarillo · demostración 3D', conceptual: true, kind: 'bracelet' },
];

export const querubinDesigns = [
  { title: 'Diseños a medida', text: 'Un espacio preparado para las piezas reales de Joyería Querubín: anillos, cadenas, pulseras, dijes y encargos especiales.' },
  { title: 'Fidelidad de detalle', text: 'Al incorporar un modelo real, se conservarán sus proporciones, engastes, relieves y elementos decorativos intencionales.' },
];
