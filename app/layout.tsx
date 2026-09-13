import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joyería Querubín | Catálogo de joyería',
  description: 'Descubre las piezas y diseños de Joyería Querubín. Solicita información y cotización personalizada por WhatsApp.',
  openGraph: { title: 'Joyería Querubín', description: 'Descubre el oro de una nueva forma.', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
