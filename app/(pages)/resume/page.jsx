"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPython } from "react-icons/si";

// About Me
const about = {
  title: "About me",
  description:
    "A front end developer and a tech enthusiast with a love for computers. I love building pages as much as building gaming PCs.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ashish Adhikari",
    },
    {
      fieldName: "Phone",
      fieldValue: "+9779867284820",
    },
    {
      fieldName: "Email",
      fieldValue: "ashishadhikari5255@gmail.com",
    },
  ],
};

const experience = {
  icon: "../../../public/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "A year of development, 3 years of tech support and a year of writing technical documents",
  items: [
    {
      company: "Max Net Solutions",
      position: "Technical Support Executive",
      duration: "2020 - 2023",
    },
    {
      company: "Copenned",
      position: "Technical Writer",
      duration: "2023 - 2024",
    },
  ],
};

// Education
const education = {
  icon: "../../../public/assets/resume/cap.svg",
  title: "Education",
  description: "An Engineering Student",
  items: [
    {
      institution: "Institute of Engineering, Paschimanchal Campus",
      degree:
        "Bachelors of Engineering in Electronics and Communication Engineering",
      duration: "",
    },
    {
      institution: "Pokhara Higher Secondary School",
      degree: "High School (Science)",
      duration: "",
    },
    {
      institution: "Anjuli Boarding School",
      degree: "School Leaving Certificate",
      duration: "",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "I've got programming skills alongside troubleshooting and fixing things.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
  ],
};

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.3, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col gap-6 w-full max-w-[380px] mx-auto lg:mx-0 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              Experience
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
