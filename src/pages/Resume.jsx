import React from 'react';

const Resume = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-950 px-4 pt-32 text-white">
      <h1 className="mb-6 text-4xl font-bold">Coming Soon</h1>
      <p className="mb-8 text-zinc-400">
        My resume is currently being updated. Please check back later.
      </p>
      <a
        href="/"
        className="rounded-full bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-zinc-200"
      >
        Back to Home
      </a>
    </div>
  );
};

export default Resume;
