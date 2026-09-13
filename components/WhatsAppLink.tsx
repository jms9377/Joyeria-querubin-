import { getWhatsAppUrl } from '@/config/site';

type Props = { productName?: string; message?: string; label?: string; className?: string };
export function WhatsAppLink({ productName, message, label = 'Solicitar cotización', className = '' }: Props) {
  const generatedMessage = message ?? (productName
    ? `Hola, estoy interesado en ${productName} de Joyería Querubín. Me gustaría conocer disponibilidad y recibir una cotización.`
    : 'Hola, me gustaría conocer más sobre los diseños de Joyería Querubín.');
  return <a className={`quote-link ${className}`} href={getWhatsAppUrl(generatedMessage)} target="_blank" rel="noreferrer" aria-label={`${label}. Se abre WhatsApp en una pestaña nueva.`}>{label}<span aria-hidden="true">↗</span></a>;
}
