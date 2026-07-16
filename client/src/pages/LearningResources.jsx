import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import CTA from "../components/home/CTA";

import ResourceHero from "../components/publicResources/ResourceHero";
import FeaturedResources from "../components/publicResources/FeaturedResources";
import ResourceCategories from "../components/publicResources/ResourceCategories";
import StartLearning from "../components/publicResources/StartLearning";

function LearningResources() {
  return (
    <>
      <Navbar />

      <ResourceHero />

      <FeaturedResources />

      <ResourceCategories />

      <StartLearning />

      <CTA />

      <Footer />
    </>
  );
}

export default LearningResources;
