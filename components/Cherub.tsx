import { BRAND_ASSETS } from '@/config/assets';

type CherubProps = { className?: string; priority?: boolean };

export function Cherub({ className = '', priority = false }: CherubProps) {
  return <img className={`cherub ${className}`} src={BRAND_ASSETS.cherub} alt="Querubín dorado de Joyería Querubín" loading={priority ? 'eager' : 'lazy'} decoding="async" />;
}
