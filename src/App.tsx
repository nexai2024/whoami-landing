import Header from './components/Header';
import Hero from './components/Hero';
import ProblemPromise from './components/ProblemPromise';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import LeadMagnet from './components/LeadMagnet';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0E0E12]">
      <Header />
      <Hero />
      <ProblemPromise />
      <Features />
      <SocialProof />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <LeadMagnet />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
