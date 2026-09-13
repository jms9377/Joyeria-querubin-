import { BRAND_ASSETS } from '@/config/assets';

type BrandLogoProps = { className?: string; priority?: boolean };

export function BrandLogo({ className = '', priority = false }: BrandLogoProps) {
  return <img className={`brand-logo ${className}`} src={BRAND_ASSETS.logo} alt="Logo oficial de Joyería Querubín" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />;
}
