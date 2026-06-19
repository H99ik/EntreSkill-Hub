import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Ideas from "../components/Ideas";
import Mentorship from "../components/Mentorship";
import Navbar from "../components/Navbar";
import Resources from "../components/Resources";
import Skills from "../components/Skills";
import SuccessStories from "../components/SuccessStories";
import Statistics from "../components/Statistics";
import Trending from "../components/Trending";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Trending />
      <Ideas />
      <Resources />
      <Mentorship />
      <SuccessStories />
      <Statistics />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
