import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import DetailedFeatures from "./components/home/DetailedFeatures";
import ServicesCarousel from "./components/home/ServicesCarousel";
import StackedServices from "./components/home/StackedServices";
import Faq from "./components/home/Faq";
import WorkflowOrbit from "./components/home/WorkflowOrbit";


export default function Home() {
  return (
    // The main wrapper applies our Medusa CSS gradient map
    <main className="bg-medusa-hero relative flex flex-col overflow-hidden">
      
      {/* A note on Shaders: The spec mentioned Swirl, ChromaFlow, etc. 
        Those require specific WebGL React libraries (like Three.js or a paid Framer template). 
        For now, our CSS gradient map acts as the perfect lightweight fallback. 
        If you have those shader files, they would go right here as an absolute background!
      */}

      {/* Floating Smart Header */}
      <Header />

      {/* Cinematic Bottom-Aligned Hero */}
      <Hero />
      <Features />
      <DetailedFeatures />
      <ServicesCarousel />
      <StackedServices />
      <WorkflowOrbit />
      <Faq />
      

    </main>
  );
}