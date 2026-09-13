# Assets oficiales y modelos 3D

Los recursos de marca oficiales se distribuyen fuera de esta PR para no incluir archivos binarios.

- Coloca el logo oficial aprobado en `public/assets/brand/logo-querubin.webp`.
- Coloca el querubín oficial aprobado en `public/assets/brand/querubin.png`.
- Si se cambia el nombre o formato de uno de estos archivos, actualiza las rutas centralizadas en `config/assets.ts`.
- Coloca los modelos `.glb` / `.gltf` de las piezas reales en `public/assets/models/` y asígnalos mediante `modelUrl` en `data/products.ts`.

Los objetos del MVP son demostraciones tridimensionales CSS y no representan piezas reales de Joyería Querubín. El estudio de mano es un prototipo ligero que podrá sustituirse por una imagen, vídeo, mano 3D o escena GLB sin alterar los datos del producto.
