import { Navigation, Footer } from '@/components/layout';
import {
  Hero,
  Features,
  Services,
  Pricing,
  About,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <About />
      </main>
      <Footer />
    </>
  );
}
