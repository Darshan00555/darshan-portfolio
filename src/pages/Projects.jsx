import React from 'react';
import { Link } from 'react-router-dom';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing capabilities.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
  {
    title: 'AI Image Generator',
    description:
      'An innovative tool that uses machine learning to generate unique artwork based on text descriptions, offering various styles and customization options.',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    image:
      'https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
  {
    title: 'Social Media App',
    description:
      'A feature-rich social platform enabling users to connect, share content, and interact through real-time messaging and feed updates.',
    tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
  {
    title: 'Health & Fitness Tracker',
    description:
      'A mobile-first application for tracking workouts, nutrition, and health metrics with personalized recommendations and progress visualization.',
    tags: ['Flutter', 'Dart', 'Google Fit API', 'Node.js'],
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 transition-colors hover:border-white/10"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.link}
            className="transform rounded-full bg-white p-3 text-black transition-colors hover:scale-110 hover:bg-zinc-200"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
          <a
            href={project.github}
            className="transform rounded-full border border-white/20 bg-zinc-900 p-3 text-white transition-colors hover:scale-110 hover:bg-zinc-800"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 pt-24 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="font-display mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          Featured Projects
        </h1>
        <p className="max-w-2xl text-lg text-zinc-400">
          A collection of projects exploring modern web technologies, design patterns, and creative
          problem solving.
        </p>
      </motion.div>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/contact"
          className="rounded-full bg-white px-8 py-4 font-bold text-black transition-colors hover:bg-zinc-200"
        >
          Start a Project Together
        </Link>
      </div>
    </div>
  );
}
