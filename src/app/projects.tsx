"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/landing-page-img.jpg",
    title: "Landing Page Automation",
    desc: "Automated the creation of landing pages to save time and ensure consistency, using scripting and dynamic content generation.",
    link_to_proj: "https://github.com/Harsh-Kumar-2003/Landing-Page-Automation",
  },
  {
    img: "/image/flappy-bird-img.jpg",
    title: "Flappy Bird Game",
    desc: "Developed a Flappy Bird clone using Python, showcasing skills in game development and graphics programming.",
    link_to_proj: "#",
  },
  {
    img: "/image/weather-app-img.png",
    title: "Weather App",
    desc: "Developed a web-based weather application that provides real-time weather updates and forecasts, utilizing APIs for data retrieval.",
    link_to_proj: "https://github.com/Harsh-Kumar-2003/Weather-App",
  },
  {
    img: "/image/google-notes-img.png",
    title: "Google Notes Clone",
    desc: "Developed a web-based clone of Google Notes, featuring note-taking capabilities with rich text editing and organizational tools.",
    link_to_proj: "https://github.com/Harsh-Kumar-2003/keeper-app",
  },
  {
    img: "/logos/logo-netflix.svg",
    title: "Netflix Clone",
    desc: "Developed a web-based Netflix clone, incorporating user authentication, movie streaming, and personalized recommendations.",
    link_to_proj: "#",
  },
  {
    img: "/image/crop-img.jpg",
    title: "Crop Protection and Recommendation System",
    desc: "Developed a web app that provides farmers with crop protection advice and recommendations, using real- time data and machine learning for optimized agricultural practices.",
    link_to_proj: "https://github.com/Harsh-Kumar-2003/Crop_App",
  },
  {
    img: "/image/sudoku-img.webp",
    title: "Sudoku Solver",
    desc: "Created a Python-based Sudoku solver that efficiently finds solutions to Sudoku puzzles using backtracking algorithms.",
    link_to_proj: "#",
  },
  {
    img: "/image/drum-img.png",
    title: "Drum-Kit",
    desc: "Developed an interactive web app that simulates a drum kit, allowing users to play different drum sounds through a user-friendly interface.",
    link_to_proj: "https://github.com/Harsh-Kumar-2003/Drum_Kit",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
