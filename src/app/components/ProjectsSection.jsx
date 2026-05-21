"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  { 
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, Tailwind CSS & Framer Motion.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vivi2705-ui/portfolio.SAWADOGOvinoria.git",
    previewUrl: null,
  }, 
  {
    id: 2,
    title: "Ahiyoyo : Internship",
    description: "React Native mobile app for global logistics & parcel shipping.",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 3,
    title: "FinLLM",
    description: "AI web app detecting inconsistencies in financial reports using LLMs.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: null,
    previewUrl: "https://quantara-sigma.vercel.app/",
  },
  {
    id: 4,
    title: "MovieLand",
    description: "Movie discovery app powered by The Movie Database (TMDb) API.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vivi2705-ui/MovieLand.git",
    previewUrl: "https://vivi2705-ui.github.io/MovieLand/",
  },
  {
    id: 5,
    title: "OtakuZone",
    description: "Anime & manga blogging platform for the otaku community.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vivi2705-ui/SawadogoJerielleVinoria.BlogUI.git",
    previewUrl: null,
  },
  {
    id: 6,
    title: "School Management Dashboard",
    description: "Full-stack academic dashboard for students, enrollments & schools administration.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vivi2705-ui/gestion_2ie_SAWADOGO_Vinoria.git",
    previewUrl: null,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#0f0a2e] mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-[#0f0a2e] flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All"    isSelected={tag === "All"}    />
        <ProjectTag onClick={handleTagChange} name="Web"    isSelected={tag === "Web"}    />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
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
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
