import React from 'react';

export default function About() {
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'HTML5 & CSS3',
    'Tailwind CSS',
    'Git & GitHub',
    'Redux Toolkit',
    'Framer Motion',
    'Next.js',
    'TypeScript',
  ];

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 pt-24 pb-20">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            About Me
          </h1>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Passionate MERN S tack Developer
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-zinc-400">
            Hi, I'm Darshan Singh. I specialize in building responsive, high-performance web
            applications using the MERN stack. With a keen eye for design and a strong foundation in
            logic, I bridge the gap between aesthetics and functionality.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-zinc-400">
            My journey in web development started with a curiosity for how things work on the
            internet. Today, I craft seamless digital experiences that solve real-world problems.
            When I'm not coding, you can find me exploring new technologies or contributing to
            open-source projects.
          </p>

          <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
            <h3 className="mb-4 text-xl font-bold text-white">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl"></div>
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Workspace"
            className="aspect-square w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
