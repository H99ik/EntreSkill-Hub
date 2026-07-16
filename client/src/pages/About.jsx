import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import CTA from "../components/home/CTA";

import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import HowItWorks from "../components/about/HowItWorks";
import WhyChooseUs from "../components/about/WhyChooseUs";

function About() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <MissionVision />

      <HowItWorks />

      <WhyChooseUs />

      <CTA />

      <Footer />
    </>
  );
}

export default About;
