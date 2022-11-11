import Hero from "../container/Hero";
import ProjectSection from "../container/ProjectSection";
import ContactSection from "../container/ContactSection";
import SocialMediaIcons from "../components/SocialMediaIcons";
import SkillSection from "../container/SkillSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <SocialMediaIcons />
    </>
  );
};

export default Home;
