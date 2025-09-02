import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import WabtuneIntro from './components/WabtuneIntro'
import KeyBenefit from './components/KeyBenefit'
import WabtuneWorks from './components/WabtuneWorks'
import CoreFeatures from './components/CoreFeatures'
import AiBotReply from './components/AiBotReply'
import IntegrationCapabilities from './components/Integration'
import SuitableIndustries from './components/SuitableIndustries'
import PlansSection from './components/Plans'
import HowToGetStarted from './components/HowtoStart'
import WabtuneFooter from './components/WabtuneFooter'
import AOS from 'aos';
import "aos/dist/aos.css";
import BusinessHeroSection from './components/BuisnessHero'
import useSmoothScroll from './pages/smoothScroll/useSmoothScroll'


function App() {
  useSmoothScroll();
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <div>
          <div className="bg-gradient-to-r from-[#1A013E] to-[#3C0A6E] relative overflow-hidden flex flex-col min-h-screen">
            <Navbar />
            <BusinessHeroSection />
            <WabtuneIntro />
            <KeyBenefit />
            <WabtuneWorks />
            <CoreFeatures />
            <AiBotReply />
            <IntegrationCapabilities />
            <SuitableIndustries />
            <PlansSection />
            <HowToGetStarted />
            <WabtuneFooter />
          </div>
    </div>
  );
}

export default App
