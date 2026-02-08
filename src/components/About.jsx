import TextBlockAnimation from './ui/TextBlockAnimation';

export default function About() {
  return (
    <section className="about-section flex min-h-screen items-center justify-center bg-black px-4 py-16 text-white sm:px-6 md:px-8 md:py-20 lg:px-12">
      <div className="w-full max-w-5xl">
        <TextBlockAnimation
          blockColor="#3b82f6"
          stagger={0.06}
          duration={0.45}
          className="mb-8 md:mb-12"
        >
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl">
            About Me
          </h2>
        </TextBlockAnimation>

        <div className="space-y-6 text-base sm:text-lg md:space-y-8 md:text-xl lg:text-2xl">
          <TextBlockAnimation blockColor="#8b5cf6" stagger={0.05} duration={0.4}>
            <p className="leading-relaxed">
              I am <span className="font-bold text-blue-400">Darshan Singh</span>, a passionate
              Frontend Developer and UI Designer.
            </p>
          </TextBlockAnimation>

          <TextBlockAnimation blockColor="#8b5cf6" stagger={0.05} duration={0.4} delay={0.1}>
            <p className="leading-relaxed">
              I specialize in building bespoke digital experiences that captivate and engage.
            </p>
          </TextBlockAnimation>

          <TextBlockAnimation blockColor="#6366f1" stagger={0.04} duration={0.35} delay={0.15}>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm text-gray-300 italic sm:text-base md:pl-6 md:text-lg lg:text-xl">
              "Bringing designs to life with code and motion."
            </blockquote>
          </TextBlockAnimation>
        </div>

        {/* Additional Info Cards - Responsive Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:gap-6 lg:grid-cols-3">
          <TextBlockAnimation blockColor="#10b981" stagger={0.03} duration={0.3} delay={0.2}>
            <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-4 transition-all duration-300 hover:border-blue-500 md:p-6">
              <h3 className="mb-2 text-lg font-semibold text-blue-400 md:text-xl">5+ Years</h3>
              <p className="text-sm text-gray-400 md:text-base">Experience in Web Development</p>
            </div>
          </TextBlockAnimation>

          <TextBlockAnimation blockColor="#10b981" stagger={0.03} duration={0.3} delay={0.25}>
            <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-4 transition-all duration-300 hover:border-purple-500 md:p-6">
              <h3 className="mb-2 text-lg font-semibold text-purple-400 md:text-xl">
                50+ Projects
              </h3>
              <p className="text-sm text-gray-400 md:text-base">Successfully Delivered</p>
            </div>
          </TextBlockAnimation>

          <TextBlockAnimation blockColor="#10b981" stagger={0.03} duration={0.3} delay={0.3}>
            <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-4 transition-all duration-300 hover:border-green-500 sm:col-span-2 md:p-6 lg:col-span-1">
              <h3 className="mb-2 text-lg font-semibold text-green-400 md:text-xl">
                100% Satisfaction
              </h3>
              <p className="text-sm text-gray-400 md:text-base">Client Happiness Rate</p>
            </div>
          </TextBlockAnimation>
        </div>
      </div>
    </section>
  );
}
