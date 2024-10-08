import ExperienceIcon from "@icons/ExperienceIcon";
import ProjectsIcon from "@icons/ProjectsIcon";
import AboutMeIcon from "@icons/AboutMeIcon";
import SchoolIcon from "@icons/SchoolIcon";

export const homeCards = [
  {
    title: "Experience",
    link: "/experience",
    backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    icon: <ExperienceIcon />,
  },
  {
    title: "Projects",
    link: "/projects",
    backgroundColor: 'linear-gradient(45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    icon: <ProjectsIcon />,
  },
  {
    title: "Education",
    link: "/education",
    backgroundColor: 'linear-gradient(45deg, rgba(60,179,113,1) 30%, rgba(102,205,170,1) 90%)',
    icon: <SchoolIcon />,
  },
  {
    title: "About Me",
    link: "/about-me",
    backgroundColor: 'linear-gradient(90deg, rgba(85,37,130,1) 0%, rgba(0,128,128,1) 100%)',
    icon: <AboutMeIcon />,
  }
];