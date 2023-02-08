import { motion } from "framer-motion";
import AboutSection from "../container/AboutSection";
const About = ({ quote, error }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutSection quote={quote} error={error} />;
    </motion.div>
  );
};

export default About;
