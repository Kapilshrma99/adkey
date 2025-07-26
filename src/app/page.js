import AgencyFooter from "@/components/sections/AgencyFooter";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import KPISection from "@/components/sections/KPISection";
import RevenueSection from "@/components/sections/RevenueSection";
import ServiceSection from "@/components/sections/ServiceSection";


export default function Home() {
  return (
    <div >      
     <Header />
    
     <Hero />
     <RevenueSection />
     <ServiceSection />
     <KPISection />
     <AgencyFooter />
    </div>
  );
}
