"use client"
import { motion, AnimatePresence } from "framer-motion";
import ExperienceItem from "../ui/experience-item";
import EducationItem from "./content/EducationItem";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ServerContent = ({ knowledgeSteps}: { knowledgeSteps: EducationItem[];}) => (
  <AnimatePresence>
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {knowledgeSteps.map((experience, index) => (
        <motion.div key={index} variants={itemVariants} className="relative p-5">
          <ExperienceItem {...experience} />
        </motion.div>
      ))}
    </motion.section>
  </AnimatePresence>
);
export default ServerContent;