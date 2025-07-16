import React from 'react';
import devopsVideo from '../assets/devopsagent.mp4';
import portfolioVideo from '../assets/portfolio.mp4';
import foodieVideo from '../assets/foodieco.mp4';
import skycastVideo from '../assets/skycast.mp4';

const {
  REACT_APP_LINK_WEATHER: weatherLink,
  REACT_APP_LINK_DEVOPS: devopsLink,
  REACT_APP_LINK_FOODIE: foodieLink,
  REACT_APP_LINK_PORTFOLIO: portfolioLink
} = process.env;

const projects = [
    {
    title: "Weather App - SkyCast",
    description: "Built using React, Tailwind CSS, and OpenWeather API.",
    link: weatherLink,
    video: skycastVideo
  },
  {
    title: "DevOps Agent",
    description: "Modular Python DevOps agent with monitoring, AI diagnostics, remediation, and alerting.",
    link: devopsLink,
    video: devopsVideo
  },
  {
    title: "Food Ordering App - Foodie.co",
    description: "React app using Swiggy API, Redux, deployed on Kubernetes.",
    link: foodieLink,
    video: foodieVideo
  },
   {
    title: "CI/CD Portfolio Website",
    description: "Developed and deployed a personal portfolio using HTML, CSS, JavaScript with GitHub Actions CI/CD.",
    link: portfolioLink,
    video: portfolioVideo
  }
 
];

const Projects = () => {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg dark:shadow-slate-900 p-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-900 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
        PROJECTS
      </h2>

      <hr className="border-t-2 border-gray-300 dark:border-gray-600 w-[70%] mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="transform hover:scale-105 transition-transform duration-300 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl overflow-hidden shadow-md"
          >
            <video
              src={project.video}
              autoPlay
              loop
              muted
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black dark:text-white mb-1">{project.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
