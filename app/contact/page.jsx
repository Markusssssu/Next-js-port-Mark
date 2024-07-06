"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: " (+7) 953 843 8711 not working ",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "marik334477@mail.ru",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: " NO ^^) ",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto items-center justify-center flex flex-col">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className=" text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Можете поиграться, может когда нибудь завезу back-end
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firsname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web-Development</SelectItem>
                      <SelectItem value="cst">CyberSecrurity</SelectItem>
                      <SelectItem value="mst">Linux</SelectItem>
                      <SelectItem value="bst">Game-Dev</SelectItem>
                      <SelectItem value="nst">3D-Modeling</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <Textarea
                className="h-[280px]"
                placeholder="Type your message here."
              />

              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
        </div>
        
        
      </div>
    </motion.section>
  );
};

export default Contact;
