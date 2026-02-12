import React from 'react';

const Resume = ({ theme = 'light' }) => {
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const gradientFrom = theme === 'dark' ? 'from-white' : 'from-gray-800';
  const gradientTo = theme === 'dark' ? 'to-gray-400' : 'to-gray-500';

  return (
    <section id="resume" className={`flex min-h-screen items-center justify-center ${bgColor}`}>
      <div className="text-center">
        <h2 className={`mb-6 bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-4xl font-bold text-transparent`}>
          Resume
        </h2>
        <p className={textColor}>Resume content coming soon...</p>
      </div>
    </section>
  );
};

export default Resume;
