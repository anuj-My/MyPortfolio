import { motion } from "framer-motion";
import Hero from "../container/Hero";
import ProjectSection from "../container/ProjectSection";
import ContactSection from "../container/ContactSection";
import SocialMediaIcons from "../components/SocialMediaIcons";
import SkillSection from "../container/SkillSection";
import Footer from "../container/Footer";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer/>
      <SocialMediaIcons />
    </motion.div>
  );
};

export default Home;
