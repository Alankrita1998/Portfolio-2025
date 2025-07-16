import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Projects from './components/Projects';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-[#0f172a] text-black dark:text-white p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar />
          <div className="flex-1 space-y-6">
            <Intro toggleDark={() => setDarkMode(!darkMode)} />
            <Projects />
          </div>
        </div>
             <div className="my-2 text-sm flex px-3 py-1 justify-center dark:text-white text-gray-800">
                <p>Portfolio@2025 🙌</p>
            </div>

      </div>
    </div>
  );
}

export default App;
