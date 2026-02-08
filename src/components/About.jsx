import React from 'react';

import TextBlockAnimation from './ui/TextBlockAnimation';

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 py-24"
    >
      <div className="w-full max-w-4xl space-y-16">
        {/* Title */}
        <TextBlockAnimation blockColor="#6366f1" delay={0.2}>
          <h2 className="text-4xl font-bold text-white md:text-6xl">About Me</h2>
        </TextBlockAnimation>

        {/* Intro */}
        <TextBlockAnimation blockColor="#10b981" stagger={0.1}>
          <p className="text-xl leading-relaxed text-zinc-300 md:text-3xl">
            I am <strong className="text-white">Darshan Singh</strong>, a passionate Frontend
            Developer and UI Designer.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-zinc-300 md:text-3xl">
            I specialize in building bespoke digital experiences that captivate and engage.
          </p>
        </TextBlockAnimation>

        {/* Quote */}
        <div className="border-l-2 border-indigo-500 pl-6">
          <TextBlockAnimation blockColor="#f59e0b" duration={0.6}>
            <p className="text-lg text-zinc-400 italic md:text-xl">
              "Bringing designs to life with code and motion."
            </p>
          </TextBlockAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
