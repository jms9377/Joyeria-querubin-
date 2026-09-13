/** Centralize the WhatsApp Business destination here. Replace the placeholder before publishing. */
export const WHATSAPP_NUMBER = '573000000000';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function getWhatsAppUrl(message: string) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
