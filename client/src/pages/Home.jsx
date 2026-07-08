import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Ideas from "../components/home/Ideas";
import Mentorship from "../components/home/Mentorship";
import Navbar from "../components/home/Navbar";
import Resources from "../components/home/Resources";
import Skills from "../components/home/Skills";
import SuccessStories from "../components/home/SuccessStories";
import Statistics from "../components/home/Statistics";
import Trending from "../components/home/Trending";

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
