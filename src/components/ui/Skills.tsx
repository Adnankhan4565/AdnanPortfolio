"use client";
import dynamic from 'next/dynamic';

const IconCloud = dynamic(() => import("@/components/magicui/icon-cloud"), {
  ssr: false,
});

const slugs = [
  "typescript",
  "javascript", 
  "react",

  "html5",
  "css3",
  "express",
  "nextdotjs",
  "mongodb",

  "postgresql", 
  "nginx",
  "vercel",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",

  "python",
  "digitalocean",
  "tailwindcss",
  "sass",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="container max-w-6xl mx-auto py-12 md:py-16 lg:py-20"
    >
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl md:text-4xl mb-4">Skills & Technologies</h2>
       
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* 3D Icon Cloud */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8">
              <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Description */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Full-Stack Development Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I specialize in modern web technologies, bringing ideas to life through clean, 
              efficient code and intuitive user experiences. My expertise spans across 
              frontend frameworks, backend systems, databases, and cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">Next.js</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">TypeScript</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">Tailwind</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Backend</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">Node.js</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">Express</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">MongoDB</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">PostgreSQL</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">DevOps</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">Docker</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">AWS</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">Vercel</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">NGINX</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Tools</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-sm">Git</span>
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-sm">VS Code</span>
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-sm">Jest</span>
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-sm">Jira</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;