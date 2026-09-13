import { BrandLogo } from '@/components/BrandLogo';
import { Hero } from '@/components/sections/Hero';
import { ProductJourney } from '@/components/sections/ProductJourney';
import { FutureSections } from '@/components/sections/FutureSections';

export default function Home() {
  return <>
    <main><Hero/><ProductJourney/><FutureSections/></main>
    <footer><BrandLogo className="footer-logo"/><span>© {new Date().getFullYear()} Joyería Querubín</span><a href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a></footer>
  </>;
}
