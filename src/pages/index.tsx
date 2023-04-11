import CTA from "@/components/CTA";
import Content from "@/components/Content";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <div className="relative z-10">
      <Hero />
    </div>
      <div className="main-content first-content">
        
      <Content
  title="Introducing a Novel Strategy for Addressing the Energy Crisis"
  subtitle="Innovative and Sustainable Solutions for Today's Energy Challenges, Designed for Commercial and Industrial Energy Consumers

  Discover our fully-funded, 'off-balance-sheet' approach that employs cutting-edge, energy-efficient technology to empower you to produce your own heat and power. This innovative solution is geared towards addressing the modern energy crisis while contributing to a greener and more sustainable future."
  button="Learn More Today"
  buttonLink="/aboutus"
  backgroundImage=""
  backgroundColor="bg-blue-100"
/>
      </div>

<Content
  title="A greener alternative to landfills"
  subtitle="At ECEFG, we are proud to present an eco-friendly and sustainable method that prevents non-recyclable waste from ending up in landfills. Our fully-funded, off-balance-sheet solution not only reduces the export of waste and curbs plastic pollution in our oceans but also generates a raw material with an expanding array of applications."
  button="Find Out About Our Waste Management"
  buttonLink="/technologies/wastemgt"
  backgroundImage="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  backgroundColor="bg-blue-200"
/>

      <CTA />
    </div>
  )
}
