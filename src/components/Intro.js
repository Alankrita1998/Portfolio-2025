import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

const {
  REACT_APP_LINK_BLOG: blog,
  REACT_APP_LINKEDIN: linkedin,
  REACT_APP_LINK_GITHUB: github
} = process.env;
const Intro = ({ toggleDark }) => {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg dark:shadow-slate-900 p-6 mb-6 transform hover:scale-[1.03] transition-transform duration-300 relative">
      <button
        onClick={toggleDark}
        className="absolute top-4 right-4 p-2 rounded bg-slate-200 dark:bg-slate-700 hover:scale-110 transition-transform"
      >
        <FiSun className="block dark:hidden text-yellow-500" />
        <FiMoon className="hidden dark:block text-white" />
      </button>

      <p className="text-sm text-gray-400">INTRODUCTION</p>

      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <span>Here to</span>
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent typing-loop leading-none">
          Innovate. Create. Transform
        </span>
      </h1>

      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
        Driven by curiosity, I believe the best solutions often begin after hours.
      </p>

      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm flex items-center gap-2">
        <FaUserGraduate className="text-green-500" />
        Certified in Microsoft Azure Fundamentals (AZ-900), Azure Administrator Associate (AZ-104), and DevOps Engineer Expert (AZ-400).
      </p>

      <div className="flex gap-6 justify-start mt-4 ">
        {[
          { label: 'GitHub', href: github },
          { label: 'Blog', href: blog },
          { label: 'LinkedIn', href: linkedin }
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-5 py-2 text-white bg-green-600  dark:bg-green-900  dark:text-green-300 rounded-full dark:hover:bg-black hover:text-white hover:bg-black hover:scale-105 transition-all duration-200"
          >
            {label}
          </a>
        ))}
      </div>

      {/* <div className="mt-6 text-sm text-gray-400">
        <p>Worked with: Accenture</p>
      </div> */}
    </section>
  );
};

export default Intro;
