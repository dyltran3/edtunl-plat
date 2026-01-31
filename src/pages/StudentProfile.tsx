import React from 'react';

const StudentProfile: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white min-h-screen relative overflow-x-hidden font-display">
      {/* Dynamic Decorative Background Elements */}
      <div className="fixed inset-0 dynamic-bg-profile -z-10"></div>
      <div className="floating-icon top-[15%] left-[5%] rotate-12 text-primary-purple">
        <span className="material-symbols-outlined text-6xl">menu_book</span>
      </div>
      <div className="floating-icon top-[60%] right-[8%] -rotate-12 text-blue-400">
        <span className="material-symbols-outlined text-8xl">edit</span>
      </div>
      <div className="floating-icon bottom-[10%] left-[15%] rotate-45 text-pink-400">
        <span className="material-symbols-outlined text-5xl">school</span>
      </div>

      <div className="layout-container flex h-full grow flex-col">
        {/* TopNavBar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-10 py-4 glass-card sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-white">
              <div className="size-8 bg-primary-purple rounded-lg flex items-center justify-center neon-glow">
                <span className="material-symbols-outlined text-white">rocket_launch</span>
              </div>
              <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">StudyPortal</h2>
            </div>
            <label className="flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-white/5 border border-white/10">
                <div className="text-[#ab9db9] flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-sm placeholder:text-[#ab9db9] px-4" placeholder="Search courses..."/>
              </div>
            </label>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-8">
              <a href="#" className="text-white/70 hover:text-primary-purple transition-colors text-sm font-medium">Dashboard</a>
              <a href="#" className="text-white/70 hover:text-primary-purple transition-colors text-sm font-medium">Courses</a>
              <a href="#" className="text-white/70 hover:text-primary-purple transition-colors text-sm font-medium">Community</a>
              <a href="#" className="text-white/70 hover:text-primary-purple transition-colors text-sm font-medium">Library</a>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center rounded-full h-10 w-10 glass-card text-white hover:bg-primary-purple/20 transition-all">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="flex items-center justify-center rounded-full h-10 w-10 glass-card text-white hover:bg-primary-purple/20 transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary-purple neon-glow" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCF0TyNMVXyIdBe7uym38h5I4ocxXN4FEBSBRvCEHQ_MoULaYpvFz9fFDVbCxFzWG_YiYX_2wUjN7GK-0CvPT3gudtakXMwSaqMrnVkmKSyepgAFDDQen8QLlrQ4ebdc6lxhaPilZG2SxdpKNPOSOcUzUv_Uhy87AdUXPgYZbyjvYY9KvxfyZw_D5ehFnK73zX8QMuRE50wVD9xJC_Srr0FSW74tBAPLGeOG_wGgH2DqOOmjCZ367NmakFR_olfcVIHbHp5rVTbEF0")'}}></div>
          </div>
        </header>

        <main className="flex-1 px-4 sm:px-10 lg:px-40 py-10 space-y-8">
          {/* ProfileHeader Area */}
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between glass-card p-8 rounded-xl">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-background-dark" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmFLCP_BsPePZVTfpXueC7YSaDW3Rvgk0hMPItTtlk9gEFfLJasHZE5vs0HmxbT-vcgT2Ti6T6-inC0gNfCtFcqW6guKQYL4HFzfrTecd8CNZuPknnrnmrvgtfIajh0NG6aMANg8cflxGxO5PSKF3rRv8wnZSRrmc25rY0ukVRmWYs0ZwVIASqEHrtfi05gspaY3CaecnMNlgTM_fhNuYPPgLofVoV1QpCShUqYA8V51xZXFbGvFPabL8MCvk3HxrrTUgM2LCkh2E")'}}></div>
                <div className="absolute -bottom-2 -right-2 bg-primary-purple text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-background-dark neon-glow">
                  Level 24
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-3xl font-bold tracking-tight">Alex Rivera</h1>
                <p className="text-primary-purple font-medium">@alex_codes_24</p>
                <p className="text-[#ab9db9] mt-1">Computer Science & Creative Design Student</p>
                <div className="flex items-center gap-2 mt-4 bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full w-fit">
                  <span className="material-symbols-outlined text-sm">local_fire_department</span>
                  <span className="text-sm font-bold">15 Day Streak</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 w-full lg:w-auto">
              <button className="flex-1 lg:flex-none bg-primary-purple hover:bg-primary-purple/80 text-white px-8 py-3 rounded-full font-bold transition-all neon-glow">
                Edit Profile
              </button>
              <button className="flex-1 lg:flex-none glass-card hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold transition-all">
                Share Portfolio
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2 rounded-xl p-6 glass-card group transition-all">
              <div className="flex justify-between items-center">
                <p className="text-[#ab9db9] text-sm font-medium">Study Hours</p>
                <span className="material-symbols-outlined text-primary-purple group-hover:scale-110 transition-transform">schedule</span>
              </div>
              <p className="text-white tracking-light text-3xl font-bold leading-tight">124h</p>
              <p className="text-[#0bda73] text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span> +12% this week
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 glass-card group transition-all">
              <div className="flex justify-between items-center">
                <p className="text-[#ab9db9] text-sm font-medium">Courses Done</p>
                <span className="material-symbols-outlined text-blue-400 group-hover:scale-110 transition-transform">auto_stories</span>
              </div>
              <p className="text-white tracking-light text-3xl font-bold leading-tight">12</p>
              <p className="text-[#0bda73] text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span> +2 new
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 glass-card group transition-all">
              <div className="flex justify-between items-center">
                <p className="text-[#ab9db9] text-sm font-medium">Global Rank</p>
                <span className="material-symbols-outlined text-yellow-400 group-hover:scale-110 transition-transform">workspace_premium</span>
              </div>
              <p className="text-white tracking-light text-3xl font-bold leading-tight">Top 5%</p>
              <p className="text-[#0bda73] text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">arrow_upward</span> Up 140 spots
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 glass-card group transition-all">
              <div className="flex justify-between items-center">
                <p className="text-[#ab9db9] text-sm font-medium">Projects</p>
                <span className="material-symbols-outlined text-pink-400 group-hover:scale-110 transition-transform">terminal</span>
              </div>
              <p className="text-white tracking-light text-3xl font-bold leading-tight">28</p>
              <p className="text-[#0bda73] text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span> +5% active
              </p>
            </div>
          </div>

          {/* Badge Collection Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-white text-2xl font-bold tracking-tight">Badge Collection</h2>
              <a href="#" className="text-primary-purple hover:underline font-bold text-sm">View Archive</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
              {/* Badge 1 */}
              <div className="flex flex-col items-center gap-3 badge-card transition-all cursor-pointer p-4 rounded-xl glass-card">
                <div className="w-full aspect-square bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full p-6 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <span className="material-symbols-outlined text-5xl text-white">wb_twilight</span>
                </div>
                <p className="text-white text-sm font-bold text-center">Early Bird</p>
                <p className="text-[#ab9db9] text-[10px] text-center uppercase tracking-widest">Earned Aug '23</p>
              </div>
              {/* Badge 2 */}
              <div className="flex flex-col items-center gap-3 badge-card transition-all cursor-pointer p-4 rounded-xl glass-card">
                <div className="w-full aspect-square bg-gradient-to-br from-primary-purple to-purple-900 rounded-full p-6 flex items-center justify-center shadow-lg shadow-primary-purple/20">
                  <span className="material-symbols-outlined text-5xl text-white">crown</span>
                </div>
                <p className="text-white text-sm font-bold text-center">Consistency King</p>
                <p className="text-[#ab9db9] text-[10px] text-center uppercase tracking-widest">Earned Sep '23</p>
              </div>
              {/* Badge 3 */}
              <div className="flex flex-col items-center gap-3 badge-card transition-all cursor-pointer p-4 rounded-xl glass-card">
                <div className="w-full aspect-square bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full p-6 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <span className="material-symbols-outlined text-5xl text-white">bolt</span>
                </div>
                <p className="text-white text-sm font-bold text-center">Tech Whiz</p>
                <p className="text-[#ab9db9] text-[10px] text-center uppercase tracking-widest">Earned Oct '23</p>
              </div>
              {/* Badge 4 */}
              <div className="flex flex-col items-center gap-3 badge-card transition-all cursor-pointer p-4 rounded-xl glass-card">
                <div className="w-full aspect-square bg-gradient-to-br from-indigo-500 to-slate-900 rounded-full p-6 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <span className="material-symbols-outlined text-5xl text-white">dark_mode</span>
                </div>
                <p className="text-white text-sm font-bold text-center">Night Owl</p>
                <p className="text-[#ab9db9] text-[10px] text-center uppercase tracking-widest">Earned Nov '23</p>
              </div>
              {/* Badge 5 */}
              <div className="flex flex-col items-center gap-3 badge-card transition-all cursor-pointer p-4 rounded-xl glass-card">
                <div className="w-full aspect-square bg-gradient-to-br from-pink-500 to-rose-700 rounded-full p-6 flex items-center justify-center shadow-lg shadow-rose-500/20">
                  <span className="material-symbols-outlined text-5xl text-white">extension</span>
                </div>
                <p className="text-white text-sm font-bold text-center">Problem Solver</p>
                <p className="text-[#ab9db9] text-[10px] text-center uppercase tracking-widest">Earned Dec '23</p>
              </div>
              {/* Badge 6 */}
              <div className="flex flex-col items-center gap-3 badge-card transition-all cursor-pointer p-4 rounded-xl glass-card">
                <div className="w-full aspect-square bg-gradient-to-br from-emerald-400 to-teal-800 rounded-full p-6 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <span className="material-symbols-outlined text-5xl text-white">groups</span>
                </div>
                <p className="text-white text-sm font-bold text-center">Team Player</p>
                <p className="text-[#ab9db9] text-[10px] text-center uppercase tracking-widest">Earned Jan '24</p>
              </div>
            </div>
          </div>

          {/* Recent Activity List */}
          <div className="glass-card rounded-xl p-8">
            <h2 className="text-white text-xl font-bold mb-6">Learning Journey</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary-purple/50 transition-colors">
                <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Completed: Advanced React Patterns</p>
                  <p className="text-[#ab9db9] text-xs">2 hours ago</p>
                </div>
                <span className="text-primary-purple font-bold">+50 XP</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary-purple/50 transition-colors">
                <div className="size-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Unlocked: Consistency King Badge</p>
                  <p className="text-[#ab9db9] text-xs">Yesterday</p>
                </div>
                <span className="text-primary-purple font-bold">+200 XP</span>
              </div>
            </div>
          </div>
        </main>
        {/* Minimal Footer */}
        <footer className="py-10 px-10 text-center text-[#ab9db9] text-sm border-t border-white/10 mt-10">
          <p>© 2024 StudyPortal. Stay curious, stay creative. ✨</p>
        </footer>
      </div>
    </div>
  );
};

export default StudentProfile;
