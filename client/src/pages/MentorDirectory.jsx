import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import CTA from "../components/home/CTA";

import MentorHero from "../components/mentors/MentorHero";
import MentorGrid from "../components/mentors/MentorGrid";
import WhyMentors from "../components/mentors/WhyMentors";
import BecomeMentor from "../components/mentors/BecomeMentor";

function MentorDirectory() {
  return (
    <>
      <Navbar />

      <MentorHero />

      <MentorGrid />

      <WhyMentors />

      <BecomeMentor />

      <CTA />

      <Footer />
    </>
  );
}

export default MentorDirectory;
