import React from 'react';
import profilePic from '../assets/profilepic.png';

const Sidebar = () => {
  return (
    <aside className="bg-white dark:bg-slate-800 rounded-3xl p-6 w-full md:w-1/3 text-center md:sticky top-6 shadow-lg dark:shadow-slate-900 overflow-hidden">
    <div className="relative w-60 h-60 mx-auto mb-4 flex items-center justify-center">
    <svg
    viewBox="0 0 100 100"
    className="absolute w-56 h-56 mb-10 transform rotate-12 z-0"
    style={{
      stroke: '#22c55e',
      strokeWidth: 1.6,
      fill: 'transparent',
      filter: 'drop-shadow(0 0 6px #7dd3fc)',
    }}
    >
    <polygon points="50,0 0,100 100,100" />
    </svg>
        <img
            src={profilePic}
            alt="Alankrita Mohapatra"
            className="w-48 h-48 rounded-full object-cover bg-white z-10 shadow-lg ring-4 ring-black dark:ring-slate-800"
        />

    </div>


    <h2 className="text-2xl font-bold text-black dark:text-white">Alankrita Mohapatra</h2>
    <p className="text-lg dark:text-green-500  text-green-600 font-medium ">DevOps / SRE Engineer</p>

      <div className="grid grid-cols-2 justify-centre gap-x-2 gap-y-2 text-xs text-black dark:text-gray-300 mt-6">
    <div className="flex items-center space-x-2">
        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v2a1 1 0 001 1h2v3H5a1 1 0 00-1 1v9h16v-9a1 1 0 00-1-1h-4V6h2a1 1 0 001-1V3H6z" />
        </svg>
        <p>Accenture</p>
    </div>

    <div className="flex items-center space-x-2">
        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
        </svg>
        <p>Bhubaneswar</p>
    </div>


    <div className="flex items-center space-x-2">
        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M8 5v14h8V5M5 20h14" />
        </svg>
        <p>+918917393665</p>
    </div>


    <div className="flex items-center space-x-2 whitespace-nowrap">
    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4 4m0-4l-4-4m16 4a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <p>alankritamailbox@gmail.com</p>
    </div>


</div>

 <div className="flex justify-center gap-4 mt-4">
  <a
    href="/Alankrita_Mohapatra-Devops-SRE.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-1.5 text-sm text-white bg-black dark:bg-green-600 dark:text-white shadow dark:hover:bg-black hover:bg-green-700"
  >
    Get Resume
  </a>
  <a
    href="/Alankrita_Mohapatra_Coverletter.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-1.5 text-sm text-white bg-black dark:bg-green-600 dark:text-white dark:hover:bg-black shadow hover:bg-green-700"
  >
    Get Cover Letter
  </a>
</div>


          <div className="mt-6">
              <h4 className="text-medium font-semibold mb-2 text-black dark:text-white">Tech Stack</h4>
              <hr className="border-t-1 border-gray-300 dark:border-gray-600 w-[100%] mb-4" />



              {[
                  {
                      heading: "DevOps & Infrastructure Monitoring",
                      skills: ['Docker', 'Kubernetes', 'Helm', 'Terraform', 'CI/CD Pipelines', 'Keycloak', 'GitHub', 'Prometheus', 'Grafana', 'Splunk']
                  },
                  {
                      heading: "Cloud Platforms & Tools",
                      skills: ['Microsoft Azure', 'AWS', 'Azure DevOps', 'Docker Registry']
                  },
                  {
                      heading: "Automation & Scripting",
                      skills: ['Bash', 'Linux Commands', 'Python']
                  },
                  {
                      heading: "Frontend Technologies",
                      skills: ['React.js', 'JavaScript', 'Redux', 'Tailwind CSS']
                  }
              ].map((section, idx) => (
                  <div key={idx} className="mb-4">
                      <h5 className="text-sm font-bold dark:text-blue-500 text-blue-800 mb-4">{section.heading}</h5>
                      <div className=" justify-center flex flex-wrap gap-4">
                          {section.skills.map((skill, index) => (
                              <span
                                  key={index}
                                  className="flex px-3 py-1 text-xs font-medium text-white bg-green-600 dark:bg-green-900 dark:text-green-300"
                              >
                                  {skill}
                              </span>
                          ))}
                      </div>
                  </div>
              ))}
          </div>



    
    </aside>
  );
};

export default Sidebar;
