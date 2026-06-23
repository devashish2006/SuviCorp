import { Navigation, Footer } from '@/components/layout';
import {
  Hero,
  Features,
  Services,
  Dashboard,
  Pricing,
  SuccessStories,
  About,
  CTA,
  TrustedPartners,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Services />
        <Dashboard />
        <Pricing />
        <SuccessStories />
        <TrustedPartners />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
