import React from 'react';

const LearningHub: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen relative overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="dynamic-bg dark:opacity-20"></div>
      <div className="floating-shape top-20 left-10 w-32 h-32 rounded-full bg-[#308ce8]/20 blur-3xl"></div>
      <div className="floating-shape bottom-40 right-10 w-64 h-64 rounded-full bg-purple-400/20 blur-3xl"></div>
      <div className="floating-shape top-1/2 left-1/3 w-48 h-48 rounded-xl rotate-12 bg-orange-300/20 blur-2xl"></div>

      <div className="layout-container flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between glass-card mx-4 mt-4 rounded-xl">
          <div className="flex items-center gap-3 text-[#111418] dark:text-white">
            <div className="size-8 text-[#308ce8]">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">EdTunl Hub</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#" className="text-[#111418] dark:text-gray-200 text-sm font-semibold hover:text-[#308ce8] transition-colors">Courses</a>
            <a href="#" className="text-[#111418] dark:text-gray-200 text-sm font-semibold hover:text-[#308ce8] transition-colors">Mentors</a>
            <a href="#" className="text-[#111418] dark:text-gray-200 text-sm font-semibold hover:text-[#308ce8] transition-colors">Pricing</a>
            <a href="#" className="text-[#111418] dark:text-gray-200 text-sm font-semibold hover:text-[#308ce8] transition-colors">Community</a>
          </nav>
          <div className="flex gap-3">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-[#308ce8] text-white text-sm font-bold tracking-wide transition-all hover:scale-105 active:scale-95">
              Sign Up
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-white/50 dark:bg-white/10 text-[#111418] dark:text-white text-sm font-bold border border-white/20">
              Login
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center px-4 py-12 md:py-20 max-w-[1200px] mx-auto w-full">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mb-20">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div className="flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#308ce8]/10 text-[#308ce8] text-xs font-bold uppercase tracking-widest w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#308ce8] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#308ce8]"></span>
                  </span>
                  Join 50k+ Future Leaders
                </span>
                <h1 className="text-[#111418] dark:text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                  Level Up Your <span className="text-[#308ce8]">Future.</span> On Your Terms.
                </h1>
                <p className="text-[#444] dark:text-gray-300 text-lg md:text-xl font-medium max-w-[500px]">
                  Master the skills that actually matter today. From AI to Financial Freedom, learn from the best creators in the game.
                </p>
              </div>
              {/* Search Bar Integrated */}
              <div className="flex flex-col gap-4 max-w-lg">
                <div className="glass-card p-1.5 rounded-xl flex items-center shadow-lg">
                  <div className="pl-4 text-gray-500">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="w-full bg-transparent border-none focus:ring-0 text-[#111418] dark:text-white placeholder:text-gray-500 text-base font-medium px-4" placeholder="What do you want to master?"/>
                  <button className="bg-[#308ce8] cta-glow text-white px-6 py-3 rounded-lg font-bold hover:bg-[#308ce8]/90 transition-all">
                    Search
                  </button>
                </div>
                <div className="flex gap-2 text-xs font-bold text-gray-500 overflow-x-auto pb-2 no-scrollbar">
                  <span className="px-3 py-1 bg-white/40 dark:bg-white/10 rounded-full border border-white/20">#AI</span>
                  <span className="px-3 py-1 bg-white/40 dark:bg-white/10 rounded-full border border-white/20">#Crypto</span>
                  <span className="px-3 py-1 bg-white/40 dark:bg-white/10 rounded-full border border-white/20">#UXDesign</span>
                  <span className="px-3 py-1 bg-white/40 dark:bg-white/10 rounded-full border border-white/20">#TikTokGrowth</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square w-full bg-cover bg-center rounded-3xl shadow-2xl relative z-10 overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxyD-qcqh_iux9tYXhmdVWfryVKZrD37_4mjSzt5HTNGfrcxPAPZXTWX-vZK-b5MsIZMiabxjhF-SsLqob8SoPh9AR91Q07ussI4587-fdlzgh-HyFd056HBPyDTdA9hLlPnaS4SJD7mpTHZ5h6MIuZLScFmfPItYoXCjbeduWRrGZlSvEW2WA-hQx97gIClb4F5ywtgsVEtIlZU-vNtsbPtv2k3DWIjwSIyRai0h4WVyYTyVQn5uLNcr_Trg2-3C9JwxVO3-_T1c")'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold uppercase">Popular Now</span>
                    <span className="text-white text-lg font-bold">Generative AI Masterclass</span>
                  </div>
                  <button className="bg-white text-[#308ce8] rounded-full p-2 flex items-center justify-center">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </button>
                </div>
              </div>
              {/* Decorative back element */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#308ce8] rounded-3xl z-0"></div>
            </div>
          </div>
          {/* Stats/Social Proof */}
          <div className="w-full mb-20">
            <div className="glass-card rounded-2xl p-8 flex flex-wrap justify-between items-center gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#308ce8]">50k+</span>
                <span className="text-sm font-bold text-gray-500 uppercase">Active Learners</span>
              </div>
              <div className="h-10 w-px bg-gray-300 hidden md:block"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#111418] dark:text-white">1.2k</span>
                <span className="text-sm font-bold text-gray-500 uppercase">Pro Mentors</span>
              </div>
              <div className="h-10 w-px bg-gray-300 hidden md:block"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#111418] dark:text-white">4.9/5</span>
                <span className="text-sm font-bold text-gray-500 uppercase">Avg Rating</span>
              </div>
              <div className="h-10 w-px bg-gray-300 hidden md:block"></div>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlBzVIy658N6U5rGNN5h04qIoJnK9-S9JzYpnEh2ukMdjrDIpy7cO-Rmc0CF9RZWvH-NRq_lC4e-ToYVX4zlr7QZiBjC6YXiKddgLV8xdjSnF98Y_5Ah-96n6MFIcFsYDwP8NNzED_dusQSkdjY6lr_4xB5mvozmOJ-tjjZDG1nrnliZJPRHYSwywIYbojRq8av_y_9DVoLlx51dwK0nbd8RbPDok6pgWhVssakQNFxiupLH0aGQhcmnz3e6SeUNtmuj9CCBu2V8U')"}}></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuTZRAbNhH0JN7idzju4rBA7PxVhRriLo78cDeTvwRJiA2FQ5iydYXAmGvV-056fu0DO3cGJlUGlajAx4x2URsDvl9FTFwRG52qGCuYNYX_DU_5JeAwECEPDnRGvV3iy9la23UK80Q92lOov2Eo8iLzmWnu7t1CedFfttrk9H5wkgl-W0eAJEiAJpefXrZXi-2QEY-LckDNvy5XrFVcsmjb8w8SuQWwbAztwnpc8kdEveq4voZeQNOdCdhYsKq47WeaincGmPuEEk')"}}></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTSKyD5CDJCh18IhKqhkt4X-yXGknB7W3IMBgqknUvROM7hfsxkvQWhqE6Fxfx1CQxcHUTPfrU9Iq_W6n2NamkQSMBvR2g2tD8kWnfB-4GJr8dGnGP_jzOW4_kQCdntdTy-YxxI-exQaxUx_kK_lcjAdYh0NB7Hn4SoYD2iPQwMSNSaxeH1bVzOpHZNuj19PJa2qO_uOlHy35OdLqGXxZrP9ejUTQT_GX3r-hP1gLbRKSQhSPKWuLohhRg6WoM4epPF2YGW6A9gQY')"}}></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#308ce8] flex items-center justify-center text-white text-[10px] font-bold">+2k</div>
              </div>
            </div>
          </div>
          {/* Popular Categories Section */}
          <div className="w-full">
            <div className="flex items-end justify-between mb-8 px-2">
              <div>
                <h2 className="text-3xl font-black text-[#111418] dark:text-white">Popular Categories</h2>
                <p className="text-gray-500 font-medium">Explore trending topics curated for you.</p>
              </div>
              <button className="text-[#308ce8] font-bold text-sm flex items-center gap-1 group">
                See All <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tech Card */}
              <div className="group glass-card hover:bg-white transition-all duration-300 rounded-2xl p-6 cursor-pointer border border-white/40 flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-3xl">code</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111418] dark:text-white">Tech & Code</h3>
                  <p className="text-sm text-gray-500 mt-1">Python, React, AI, and Web3 fundamentals.</p>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#308ce8]">240+ Courses</span>
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">trending_flat</span>
                </div>
              </div>
              {/* Creative Arts */}
              <div className="group glass-card hover:bg-white transition-all duration-300 rounded-2xl p-6 cursor-pointer border border-white/40 flex flex-col gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                  <span className="material-symbols-outlined text-3xl">palette</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111418] dark:text-white">Creative Arts</h3>
                  <p className="text-sm text-gray-500 mt-1">Digital art, Motion design, and Photography.</p>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#308ce8]">180+ Courses</span>
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">trending_flat</span>
                </div>
              </div>
              {/* Financial Freedom */}
              <div className="group glass-card hover:bg-white transition-all duration-300 rounded-2xl p-6 cursor-pointer border border-white/40 flex flex-col gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined text-3xl">payments</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111418] dark:text-white">Finance</h3>
                  <p className="text-sm text-gray-500 mt-1">Investing, Crypto, and Side-hustle logic.</p>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#308ce8]">150+ Courses</span>
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">trending_flat</span>
                </div>
              </div>
              {/* Mindset */}
              <div className="group glass-card hover:bg-white transition-all duration-300 rounded-2xl p-6 cursor-pointer border border-white/40 flex flex-col gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                  <span className="material-symbols-outlined text-3xl">psychology</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111418] dark:text-white">Mindset</h3>
                  <p className="text-sm text-gray-500 mt-1">Productivity, Mental health, and Leadership.</p>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#308ce8]">120+ Courses</span>
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">trending_flat</span>
                </div>
              </div>
            </div>
          </div>
          {/* Featured Course Card (Single highlight) */}
          <div className="w-full mt-24">
            <div className="bg-[#308ce8]/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-[#308ce8]/20">
              <div className="flex-1 flex flex-col gap-6">
                <div className="bg-white/50 w-fit px-4 py-2 rounded-full text-xs font-bold text-[#308ce8] uppercase">Mentorship Program</div>
                <h2 className="text-3xl md:text-5xl font-black text-[#111418] dark:text-white leading-tight">Work 1-on-1 with <span className="text-[#308ce8] underline">Industry Experts</span></h2>
                <p className="text-lg text-[#111418]/80 dark:text-gray-300 font-medium">Get direct feedback on your projects, personalized career roadmaps, and insider networking opportunities.</p>
                <button className="bg-[#308ce8] text-white w-fit px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">Apply for Mentorship</button>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="relative">
                  <div className="bg-white dark:bg-background-dark p-4 rounded-2xl shadow-2xl rotate-3 relative z-10">
                    <div className="bg-cover bg-center aspect-video rounded-xl" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbO-wmvzpStdwYaauapded1pAmYtNnygg5gZaFCpo0bW_NQ46q4F-DjJMY4isO08T0sDNZx9ANfTXYfwhsVBgc6qDnGNaB9HZL0LfIEBlU2LXoQXUcmvnKGotYpt1ERnyPPNAGW4iZpR8EGalfJBj0sdh2uwy5ygyOGo000kFX-Kv_B5_19zbERIyAMTQlQUtz31AppfivPVTyH9kBgrXgjcOIXZ-81cBQ1PNUGES2SazlTfSBXuiGFI0yYpbqozSJDd4Y6vFoEgc')"}}></div>
                    <div className="mt-4">
                      <h4 className="font-bold text-lg text-[#111418] dark:text-white">Alex Chen</h4>
                      <p className="text-sm text-gray-500">Sr. Product Designer at Google</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[#308ce8]/20 rounded-2xl -rotate-3 z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Simple Footer */}
        <footer className="mt-auto px-6 py-12 border-t border-white/20 glass-card">
          <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#111418] dark:text-white">
                <div className="size-6 text-[#308ce8]">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-extrabold tracking-tight">EdTunl Hub</h2>
              </div>
              <p className="text-sm text-gray-500 font-medium">Empowering the next generation of digital creators and entrepreneurs.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#111418] dark:text-white uppercase mb-4 tracking-wider">Platform</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#308ce8] transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-[#308ce8] transition-colors">Scholarships</a></li>
                <li><a href="#" className="hover:text-[#308ce8] transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-[#308ce8] transition-colors">Refer a Friend</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#111418] dark:text-white uppercase mb-4 tracking-wider">Company</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#308ce8] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#308ce8] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#308ce8] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#308ce8] transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#111418] dark:text-white uppercase mb-4 tracking-wider">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-gray-600 hover:bg-[#308ce8] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-sm">public</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-gray-600 hover:bg-[#308ce8] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-gray-600 hover:bg-[#308ce8] hover:text-white transition-all">
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto w-full mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center text-xs font-bold text-gray-400">
            <p>© 2024 EdTunl Platform. All rights reserved.</p>
            <p>Made with ♥ for the future.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LearningHub;
