# Joyería Querubín — MVP de catálogo interactivo

Prototipo mobile-first para presentar la colección mediante una secuencia narrativa de scroll. No muestra precios: la conversión se realiza por WhatsApp Business.

## Arquitectura elegida

- **Next.js + React + TypeScript:** base SEO, rutas limpias y componentes escalables.
- **Escenas 3D ligeras de demostración:** el MVP usa objetos CSS tridimensionales sin descargar modelos pesados. Los anillos se presentan con un prototipo de mano animada vinculado al scroll, preparado para sustituirse por imagen, vídeo, mano 3D o GLB.
- **Modelos reales:** la estructura `Product` ya incluye `modelUrl`; al integrar los GLB, el renderizador se podrá intercambiar sin cambiar datos, textos ni CTAs. Se recomienda cargar el visor Three.js / React Three Fiber de forma dinámica por escena y liberar cada modelo fuera de vista.

Esta decisión evita cargar cuatro escenas WebGL simultáneas en teléfonos durante la fase de concepto. La siguiente iteración, al recibir modelos reales, sustituirá `JewelryObject` y/o `HandShowcase` por recursos lazy-loaded (imagen, vídeo o visor GLB) sin cambiar los datos ni los CTAs.

## Ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Personalización futura

| Necesidad | Ubicación |
| --- | --- |
| Número de WhatsApp | `config/site.ts` → `WHATSAPP_NUMBER` |
| Productos, textos, categorías y rutas de modelo | `data/products.ts` |
| Modelos `.glb` / `.gltf` | `public/assets/models/` |
| Logo oficial sin modificar | `public/assets/brand/logo-querubin.webp` |
| Imagen oficial del querubín dorado | `public/assets/brand/querubin.png` |
| Registro central de assets oficiales | `config/assets.ts` |

Consulta también `public/assets/README.md` antes de cargar los assets oficiales. Los cuatro objetos actuales se marcan explícitamente como **diseños conceptuales / demostración 3D** y no representan joyas reales de Joyería Querubín.
