"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    title: "Linked AI Reply",
    description: "Chrome Extension For Faster Reply",
    image: "/project/Chrome-Extensions.webp", // corrected from "images" to "image"
    tag: ["ALL", "Extension"], // corrected from "Extention" to "Extension"
    gitUrl: "https://github.com/VoidMain0xx/LinkedIn-AI-Reply-Chrome-Extension",
  },
  {
    id: 2,
    title: "News Monkey",
    description: "Get The trending news on your fingertips",
    image: "/project/news.jpeg",
    tag: ["ALL", "WEB"],
    gitUrl: "https://github.com/VoidMain0xx/news-monkey",
  },
  {
    id: 3,
    title: "Employee Review System",
    description: "CRUD on Employee Management",
    image: "/project/employeeReview.jpg",
    tag: ["ALL", "WEB"],
    gitUrl: "https://github.com/VoidMain0xx/Employee_Review_System",
  },
  {
    id: 4,
    title: "IPOD",
    description: "Old 20s IPOD on Web",
    image: "/project/Ipod.jpg",
    tag: ["ALL", "WEB"],
    gitUrl: "https://github.com/VoidMain0xx/ipod-mini-project",
  },
  {
    id: 5,
    title: "Social Media API",
    description: "Social media API which performs CRUD Operations",
    image: "/project/Socialmedia.jpg",
    tag: ["ALL", "WEB"],
    gitUrl: "https://github.com/VoidMain0xx/Social-Media-API-II",
  },
  {
    id: 6,
    title: "OMDB APP",
    description: "IMDB CLONE",
    image: "/project/imdb.png",
    tag: ["ALL", "WEB"],
    gitUrl: "https://github.com/VoidMain0xx/OMDB-App",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("ALL");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("ALL")}
          name="ALL"
          isSelected={tag === "ALL"}
        />
        <ProjectTag
          onClick={() => handleTagChange("WEB")}
          name="WEB"
          isSelected={tag === "WEB"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Extension")}
          name="Extension"
          isSelected={tag === "Extension"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default ProjectSection;
