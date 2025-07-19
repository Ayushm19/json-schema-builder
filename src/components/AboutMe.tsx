import React from "react";

const projects = [
  {
    name: "JSON Schema Builder",
    url: "https://json-schema-builder-ayushmishra-iota-seven.vercel.app/",
    description: "A modern JSON Schema Builder with recursive nesting, live preview, and beautiful UI built with React, TypeScript, and ShadCN UI.",
    preview: "/project-previews/schema-builder.png"
  },
  {
    name: "ChatGPT Clone - Mem0 Integration",
    url: "https://mychatgpt-ayusmishra-ten.vercel.app/",
    description: "Advanced ChatGPT clone with Mem0 integration, featuring AI-powered conversations and intelligent memory management.",
    preview: "/project-previews/chatgpt-clone.png"
  },
  {
    name: "Welth - Finance Assistant",
    url: "https://welth-finance-ayushmishra-zeta.vercel.app/",
    description: "AI-powered financial management platform with auto receipt scanning, monthly email alerts, and intelligent spending insights.",
    preview: "/project-previews/welth-finance.png"
  },
  {
    name: "GitHub Portfolio",
    url: "https://github.com/Ayushm19",
    description: "Explore my complete portfolio of projects, contributions, and open-source work on GitHub.",
    preview: "/project-previews/github-portfolio.png"
  }
];

export function AboutMe() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      {/* Banner */}
      <div className="relative w-full h-56 md:h-64 flex items-end overflow-hidden">
        {/* Banner Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] to-[#0ea5e9] z-0">
          <img 
            src="/banner-photo.jpg" 
            alt="Banner Background" 
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              // Fallback to gradient if image fails to load
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/40 to-[#0ea5e9]/40 z-0"></div>
        
        {/* Profile photo - overlaps banner */}
        <div className="absolute left-1/2 -bottom-4 md:-bottom-8 transform -translate-x-1/2 md:left-32 md:translate-x-0 z-20">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-400 to-cyan-400">
            <img 
              src="/aboutme-photo.jpg" 
              alt="Ayush Mishra" 
              className="object-cover w-full h-full"
              onError={(e) => {
                // Fallback to gradient if profile photo fails to load
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const container = target.parentElement;
                if (container) {
                  container.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center">
                      <span class="text-4xl font-bold text-white">AM</span>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>
      </div>
      {/* Main Content - Info Card and Skills */}
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-32 md:mt-28 p-6">
        {/* Left Side - Skills Section */}
        <div className="flex-1">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border-none h-full">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Frontend */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30">
                <h4 className="text-lg font-bold text-blue-400 mb-3 flex items-center">
                  <span className="mr-2">🎨</span>
                  Frontend
                </h4>
                <div className="space-y-1">
                  <div className="text-white/90">JavaScript</div>
                  <div className="text-white/90">React</div>
                  <div className="text-white/90">Redux</div>
                  <div className="text-white/90">TypeScript</div>
                  <div className="text-white/90">NextJS</div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                <h4 className="text-lg font-bold text-green-400 mb-3 flex items-center">
                  <span className="mr-2">⚙️</span>
                  Backend
                </h4>
                <div className="space-y-1">
                  <div className="text-white/90">Node</div>
                  <div className="text-white/90">Express</div>
                  <div className="text-white/90">TypeScript</div>
                </div>
              </div>

              {/* Database */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
                <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center">
                  <span className="mr-2">🗄️</span>
                  Database
                </h4>
                <div className="space-y-1">
                  <div className="text-white/90">SQL</div>
                  <div className="text-white/90">MongoDB</div>
                </div>
              </div>

              {/* DevOps */}
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/30">
                <h4 className="text-lg font-bold text-orange-400 mb-3 flex items-center">
                  <span className="mr-2">🚀</span>
                  DevOps
                </h4>
                <div className="space-y-1">
                  <div className="text-white/90">Linux</div>
                  <div className="text-white/90">Shell Scripting</div>
                  <div className="text-white/90">Docker</div>
                  <div className="text-white/90">Jenkins</div>
                  <div className="text-white/90">AWS</div>
                  <div className="text-white/90">Terraform</div>
                  <div className="text-white/90">Ansible</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Info Card and Contact Combined */}
        <div className="flex-1 flex flex-col">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border-none flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-1">Ayush Mishra <span className="inline-block align-middle ml-1 text-blue-400">✔️</span></h2>
                <div className="text-lg text-neutral-200 mb-2">
                  Full-Stack Developer | DevOps with Docker & Jenkins | CI/CD Automation | B.Tech CSE '25
                </div>
                <div className="text-md text-neutral-400 mb-2">
                  New Delhi, Delhi, India
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-md text-white">IPU-Greater Noida Institute of Technology (GNIOT)</span>
                </div>
              </div>
            </div>

            {/* Contact Info - Compact Version */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center">
                <span className="mr-2">📞</span>
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/ayush-mishra-941990211/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-lg border border-blue-500/30 hover:from-blue-500/30 hover:to-blue-600/30 transition-all group"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">in</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-semibold group-hover:text-blue-300 transition-colors">LinkedIn</div>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/Ayushm19" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-lg border border-gray-500/30 hover:from-gray-500/30 hover:to-gray-600/30 transition-all group"
                >
                  <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">GH</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-semibold group-hover:text-gray-300 transition-colors">GitHub</div>
                  </div>
                </a>

                {/* Email */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('knandan400@gmail.com');
                    // Show toast notification
                    const toast = document.createElement('div');
                    toast.className = 'fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full';
                    toast.textContent = '📧 Email copied!';
                    document.body.appendChild(toast);
                    
                    // Animate in
                    setTimeout(() => {
                      toast.classList.remove('translate-x-full');
                    }, 100);
                    
                    // Remove after 3 seconds
                    setTimeout(() => {
                      toast.classList.add('translate-x-full');
                      setTimeout(() => {
                        document.body.removeChild(toast);
                      }, 300);
                    }, 3000);
                  }}
                  className="flex items-center gap-2 p-2 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-lg border border-red-500/30 hover:from-red-500/30 hover:to-red-600/30 transition-all group cursor-pointer"
                >
                  <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">@</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-semibold group-hover:text-red-300 transition-colors">knandan400@gmail.com</div>
                  </div>
                </button>

                {/* Phone */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('+91 8826336732');
                    // Show toast notification
                    const toast = document.createElement('div');
                    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full';
                    toast.textContent = '📱 Phone number copied!';
                    document.body.appendChild(toast);
                    
                    // Animate in
                    setTimeout(() => {
                      toast.classList.remove('translate-x-full');
                    }, 100);
                    
                    // Remove after 3 seconds
                    setTimeout(() => {
                      toast.classList.add('translate-x-full');
                      setTimeout(() => {
                        document.body.removeChild(toast);
                      }, 300);
                    }, 3000);
                  }}
                  className="flex items-center gap-2 p-2 bg-gradient-to-r from-green-600/20 to-green-700/20 rounded-lg border border-green-500/30 hover:from-green-500/30 hover:to-green-600/30 transition-all group cursor-pointer"
                >
                  <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">📱</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-semibold group-hover:text-green-300 transition-colors">+91 8826336732</div>
                  </div>
                </button>
              </div>
              
              {/* Contact Message */}
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                <p className="text-sm text-white/80 text-center italic">
                  "Contact me, I will be in touch soon! 👋"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="max-w-7xl mx-auto mt-10 p-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 hover:scale-105 hover:border-blue-400/50 transition-all duration-300"
            >
              {/* Project Preview Image */}
              <div className="mb-4 rounded-lg overflow-hidden">
                {project.preview ? (
                  <img 
                    src={project.preview} 
                    alt={`${project.name} preview`}
                    className="w-full h-32 object-cover rounded-lg"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-text') as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div className="fallback-text w-full h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-400/30 flex items-center justify-center" style={{ display: project.preview ? 'none' : 'flex' }}>
                  <span className="text-2xl text-blue-300 font-bold">{project.name.split(' ')[0]}</span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="text-center">
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{project.name}</h4>
                <p className="text-sm text-white/70 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Link Button */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-blue-400 hover:to-cyan-400 transition-all">
                  <span>View Project</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 