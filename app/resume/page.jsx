"use client";

import {
  SiCplusplus,
  SiC,
  SiJavascript,
  SiPython,
  SiFigma,
  SiBlender,
  SiUnrealengine,
  SiUnity,
  SiCsharp,
  SiReact,
  SiVuedotjs,
  SiVite,
  SiNextdotjs,
} from "react-icons/si";

const about = {
  title: "About me",
  description: "More detailed information that reveals me better",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Mark",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "Russia",
    },
    {
      fieldName: "Interests:",
      fieldValue: "Programming, 3D-Modeling, Chess, Single-Game",
    },
    {
      fieldName: "Sport:",
      fieldValue: "Basketball",
    },
    {
      fieldName: "Email:",
      fieldValue: "marik334477@mail.ru",
    },
    {
      fieldName: "Languages:",
      fieldValue: "Russian, English",
    },
    {
      fieldName: "Favorite subject:",
      fieldValue: "Philosophy",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Всё что умею",

  skillList: [
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiVuedotjs />,
      name: "Vue",
    },
    {
      icon: <SiVite />,
      name: "Vite",
    },

    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiFigma />,
      name: "Figma",
    },
    {
      icon: <SiBlender />,
      name: "Blender",
    },
    {
      icon: <SiUnrealengine />,
      name: "Unreal engine 5",
    },
    {
      icon: <SiUnity />,
      name: "Unity",
    },
    
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaulValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about me">About me</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* about me */}
            <TabsContent value="about me" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {about.info.map((info, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{info.fieldName}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {info.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}

            <TabsContent value="Skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left" >
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]" >
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100} >
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center
                          group ">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300" >{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
