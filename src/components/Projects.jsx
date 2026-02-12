import React from 'react';

const Projects = ({ theme = 'light' }) => {
  const bgColor = theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-50';
  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const gradientFrom = theme === 'dark' ? 'from-purple-400' : 'from-purple-600';
  const gradientTo = theme === 'dark' ? 'to-pink-600' : 'to-pink-700';

  return (
    <section id="projects" className={`flex min-h-screen items-center justify-center ${bgColor}`}>
      <div className="text-center">
        <h2 className={`mb-6 bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-4xl font-bold text-transparent`}>
          Projects
        </h2>
        <p className={textColor}>Project showcase coming soon...</p>
      </div>
    </section>
  );
};

export default Projects;
