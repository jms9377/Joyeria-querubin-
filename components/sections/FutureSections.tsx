import { querubinDesigns } from '@/data/products';
import { WhatsAppLink } from '@/components/WhatsAppLink';
export function FutureSections() { return <>
  <section className="future-section" aria-labelledby="disenos"><p className="eyebrow">PRÓXIMAMENTE</p><h2 id="disenos">Diseños <em>Querubín</em></h2><p className="future-lead">Una vitrina modular para las piezas reales y los encargos especiales de la marca.</p><div className="future-cards">{querubinDesigns.map(item => <article key={item.title}><span aria-hidden="true">✦</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
  <section className="inspiration" aria-labelledby="inspiracion"><p className="eyebrow">LABORATORIO CREATIVO</p><h2 id="inspiracion">Inspiración</h2><p>Los diseños digitales son propuestas conceptuales. Cada posibilidad se revisa individualmente antes de confirmar si puede fabricarse o recrearse.</p><WhatsAppLink label="Conversar sobre un diseño"/></section>
</>; }
