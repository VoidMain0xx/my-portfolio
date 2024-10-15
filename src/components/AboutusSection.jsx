"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import ActiveTab from "./ActiveTab";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    titte: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>java (Data Structures and algorithms)</li>
        <li>HTML - V</li>
        <li>CSS - III</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>tailWind Css</li>
        <li>ReactJS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDb</li>
        <li>Sql</li>
        <li>AWS Deployment</li>
      </ul>
    ),
  },
  {
    titte: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Little Flower High School(10th)</li>
        <li>Millind College Of Science(12th)</li>
        <li>
          Deogiri Institute of Engineering and Management Studies (b.tech In
          Electronics And Telecommunication){" "}
        </li>
        <li>Coding Ninja (MERN Course)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> Mern Stack Course From Conding Ninja</li>
        <li>Creativity and Enterpreneurship (Coursera) </li>
      </ul>
    ),
  },
];

const AboutusSection = () => {
  const [tab, settab] = useState("skills");
  const [ispending, startTransition] = useTransition();

  const handletabChange = (id) => {
    startTransition(() => {
      settab(id);
    });
  };

  return (
    <section className="text-white">
      <motion.div  initial={{ opacity: 0 , scale: 0.3}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}  className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/aboutUs.avif"
          width={500}
          height={500}
          alt="This is about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m Subodh Shejwal, a passionate MERN stack developer eager to
            expand my knowledge and skills. With experience in building
            scalable, user-centric applications using MongoDB, Express.js,
            React, and Node.js, I enjoy tackling challenges across the full
            development lifecycle. My projects span from e-commerce sites to
            Chrome extensions, and I’m committed to writing clean, efficient
            code while continuously learning new technologies. I'm driven by
            curiosity and excited about opportunities that push my boundaries
            and allow me to contribute to impactful projects. Let’s connect if
            you're looking for a dedicated developer ready to grow and innovate!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <ActiveTab
              selectTab={() => handletabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </ActiveTab>
            <ActiveTab
              selectTab={() => handletabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </ActiveTab>
            <ActiveTab
              selectTab={() => handletabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </ActiveTab>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutusSection;
