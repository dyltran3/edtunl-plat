import React from 'react';

const LearningDashboard: React.FC = () => {
  return (
    <div className="font-display aura-bg min-h-screen text-[#111418] dark:text-white transition-colors duration-500">
      <div className="flex h-screen overflow-hidden p-6 gap-6">
        {/* SideNavBar */}
        <aside className="w-72 glass-card rounded-3xl flex flex-col justify-between p-6">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 px-2">
              <div className="size-10 bg-[#308ce8] rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined">auto_stories</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">StudySphere</h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/50 dark:bg-white/10 active-nav text-[#308ce8]">
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm font-semibold">Dashboard</p>
              </div>
              <div className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/30 dark:hover:bg-white/5 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[#637588]">import_contacts</span>
                <p className="text-sm font-medium text-[#637588]">My Courses</p>
              </div>
              <div className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/30 dark:hover:bg-white/5 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[#637588]">group</span>
                <p className="text-sm font-medium text-[#637588]">Community</p>
              </div>
              <div className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/30 dark:hover:bg-white/5 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[#637588]">workspace_premium</span>
                <p className="text-sm font-medium text-[#637588]">Rewards</p>
              </div>
              <div className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/30 dark:hover:bg-white/5 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[#637588]">settings</span>
                <p className="text-sm font-medium text-[#637588]">Settings</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="glass-card !bg-[#308ce8]/10 p-4 rounded-2xl flex items-center gap-3">
              <div className="bg-[#308ce8]/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-[#308ce8]">bolt</span>
              </div>
              <div>
                <p className="text-xs font-bold text-[#308ce8]">LEVEL 12</p>
                <p className="text-[10px] text-[#637588]">2,450 / 3,000 XP</p>
              </div>
            </div>
            <button className="w-full bg-[#308ce8] hover:bg-[#308ce8]/90 text-white rounded-2xl py-3 font-bold text-sm transition-all shadow-lg shadow-[#308ce8]/20">
              Go Premium
            </button>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
          {/* TopNavBar (Integrated) */}
          <header className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-3xl font-black tracking-tight">Hey Alex, ready to level up? 🚀</h1>
              <p className="text-[#637588] text-sm font-medium">You're on a <span className="text-[#308ce8] font-bold">5-day streak</span>! Keep it going.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#637588] text-xl">search</span>
                <input className="bg-white/40 dark:bg-white/10 border-none rounded-2xl pl-10 pr-4 py-2.5 w-64 text-sm focus:ring-2 focus:ring-[#308ce8] transition-all" placeholder="Search courses..." type="text"/>
              </div>
              <div className="flex items-center gap-2">
                <button className="size-10 glass-card rounded-xl flex items-center justify-center hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-lg">notifications</span>
                </button>
                <div className="h-10 px-3 glass-card rounded-xl flex items-center gap-3">
                  <div className="size-7 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_zi1KB_S23ROwNF4KzGHsNVboUUQI2otvUelVzjjViu6-9zgqNHwrnG_HYEcNy6ijffj_vzTYBkeSLJDeLePBIwvBMpUKoX7Ky_zDyVSRTwGeckqIWRkSsfEiwtSq8Ds_Fxa6uVnhaQVoLu4RuUfblotGRRLBHyn95IIIgzaoEC2vLXX-7AuLfiaIPgfbuSWG-7IBJTb8RduLRHy7m_N0M-8eASLbf57QYDHv7Zx8rjovy55oBmnuGEEeetMx1VzcSXXlo9WAwlU')"}}></div>
                  <span className="text-sm font-bold">Alex J.</span>
                </div>
              </div>
            </div>
          </header>
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-3xl flex items-center gap-5">
              <div className="size-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-orange-500 text-3xl">local_fire_department</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#637588]">Focus Streak</p>
                <h3 className="text-2xl font-black">5 Days</h3>
                <p className="text-xs text-green-500 font-bold">+1 from yesterday</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-3xl flex items-center gap-5">
              <div className="size-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-purple-500 text-3xl">stars</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#637588]">Total XP</p>
                <h3 className="text-2xl font-black">2,450 XP</h3>
                <p className="text-xs text-green-500 font-bold">Top 5% this week</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-3xl flex items-center gap-5">
              <div className="size-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-500 text-3xl">timer</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#637588]">Study Time</p>
                <h3 className="text-2xl font-black">12.5 hrs</h3>
                <p className="text-xs text-[#637588] font-medium">Goal: 15 hrs</p>
              </div>
            </div>
          </div>
          {/* Main Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
            {/* Continue Learning (Main Area) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden flex-1 flex flex-col justify-center">
                {/* Abstract Background Decoration */}
                <div className="absolute -top-10 -right-10 size-40 bg-[#308ce8]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 size-40 bg-pastel-pink/30 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="relative size-32">
                    <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="3"></path>
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#308ce8" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="3"></path>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-black">75%</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="bg-[#308ce8]/20 text-[#308ce8] text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">Current Course</span>
                    <h2 className="text-2xl font-black mt-3 mb-2">Advanced UI Design Principles</h2>
                    <p className="text-[#637588] text-sm font-medium mb-6">Module 4: Color Theory & Accessibility in Digital Products</p>
                    <button className="bg-[#308ce8] hover:bg-[#308ce8]/90 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:gap-4 mx-auto md:mx-0">
                      Resume Lesson <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Enrolled Courses */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">My Courses</h3>
                  <button className="text-[#308ce8] text-sm font-bold hover:underline">View All</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-2xl flex gap-4 hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="size-20 rounded-xl bg-cover bg-center shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3bdZVHMAMECBbaRl5Rf7N1WyTXFsXIz0WYqktyzdH-PXMicemiluIaY4yFckdXInWOPcVyRV0JDkwHWw-ZoBPJG_nyUy7a5eQLgG1E_slpkqnLl17mzMEt2tiUf6dN82WBmvdiH5DTJL36yzu-WpzeoHuZZoWnzwlblihG9taV_wMWcRCCOe9TxswtF4nTbWMSvnShOj1T03YuCZ5wOL6zDscQlQZKw0xk8KKZgaoFVGPtEHdCMaj1fxjfYXUWP0hcq_K5gD9eL4')"}}></div>
                    <div className="flex flex-col justify-center gap-1">
                      <h4 className="font-bold text-sm leading-tight">3D Modeling Basics</h4>
                      <p className="text-xs text-[#637588]">12 Lessons • 45%</p>
                      <div className="w-full bg-black/5 dark:bg-white/10 h-1.5 rounded-full mt-1">
                        <div className="bg-purple-500 h-full w-[45%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl flex gap-4 hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="size-20 rounded-xl bg-cover bg-center shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0hvKoyiUCIZJIcPaMXXv4MNf75GgL2WbsCQN6KdKRjHOGU4LV6hQesXnUM-jKreKDFUI_TeQrsDgZ0qtm5k_Mjpfyh99etuiAYox67W2isPqefGWxD2wvIB1cfBD__uAZ2Q9ztv4hlhexmw1YxiG4sQgLb2yB4Z6ItwXDx9sLl9X-NqH260hKRsKefsztLCJRHcaR8vlTXjZI6ZyHNmj8gTVo3xSgRjnEah2RfpkwWDG2A9jLEbc3L0mD2Dx68l6eIXJxkFhreMI')"}}></div>
                    <div className="flex flex-col justify-center gap-1">
                      <h4 className="font-bold text-sm leading-tight">Web Dev Bootcamp</h4>
                      <p className="text-xs text-[#637588]">32 Lessons • 88%</p>
                      <div className="w-full bg-black/5 dark:bg-white/10 h-1.5 rounded-full mt-1">
                        <div className="bg-green-500 h-full w-[88%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Daily Challenges (Sidebar Area) */}
            <div className="flex flex-col gap-6">
              <div className="glass-card rounded-3xl p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Daily Quests</h3>
                  <span className="material-symbols-outlined text-[#308ce8]">emoji_events</span>
                </div>
                <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
                  {/* Challenge Item */}
                  <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/50 flex flex-col gap-3 group hover:bg-white/60 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#308ce8] uppercase tracking-tighter">Gamify</span>
                      <span className="text-xs font-bold text-[#637588]">+50 XP</span>
                    </div>
                    <h4 className="text-sm font-bold">30-min Deep Work</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="size-6 rounded-full border-2 border-white bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKTrVZu1zoeMNRpVuoAyb990EvuqGCv8WSjR_SkQZ3OG-V_cMhd8zGmv1KHOPvxjLbs74d3_g7EIQ5RFtRx64qMZJmK4V4T6zxxSAq1DmqHkUkwut1ABPUjypUmOiMz-kK7ydVzF30cGkGsNkmMDnx5ZKG7GuainT-Jh7eJXWtvGCvNjPdNzWg82z2RZUBbIJ--YGb4KhlLqcVVVG1znvpFHWyB4pyrAEPt_pgu9hvVANFY2D59oIsPjRltTkmp3agbxOA1sm3GQ8')"}}></div>
                        <div className="size-6 rounded-full border-2 border-white bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCat8k3BoiyEbfHzjxZb8NWluNT2oVfqzbgtuxx2NBDYkvlSkFILEr1-db2sXoh-gJgGUwLngGoyZtZe6FF5Z9Aisi_SMtUInOkEma9FbJl2wHUw5rpEFL0VE_QIvYU1zvfHNkefRS9DEqwHCAOvzAWLl6AGd-9xtBFv6DORUqoBWZRiGaNOPcPyosHx6U72kVzM3auBxKITTCllbS0aLIcUqlyXTJraUhQ_93pdDvYSUKNMhb2u3a1_n--3ZV1nTGqsHIJPVI4M90')"}}></div>
                        <div className="size-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[8px] font-bold">+12</div>
                      </div>
                      <button className="size-8 rounded-full bg-white flex items-center justify-center text-[#308ce8] shadow-sm hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-base">play_arrow</span>
                      </button>
                    </div>
                  </div>
                  {/* Challenge Item */}
                  <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/50 flex flex-col gap-3 opacity-60 grayscale-[0.5]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-green-500 uppercase tracking-tighter">Done</span>
                      <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                    </div>
                    <h4 className="text-sm font-bold line-through">Complete 1 Quiz</h4>
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-medium text-[#637588]">You earned 20 XP</p>
                    </div>
                  </div>
                  {/* Challenge Item */}
                  <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/50 flex flex-col gap-3 group hover:bg-white/60 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-orange-500 uppercase tracking-tighter">Community</span>
                      <span className="text-xs font-bold text-[#637588]">+30 XP</span>
                    </div>
                    <h4 className="text-sm font-bold">Answer a Question</h4>
                    <p className="text-[10px] text-[#637588]">Help someone in the Community forum</p>
                    <button className="w-full py-2 bg-white/80 rounded-xl text-xs font-bold hover:bg-white transition-all">Go to Community</button>
                  </div>
                </div>
              </div>
              {/* Community Feed Sneak-Peek */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="text-sm font-bold mb-4">Study Groups</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-pastel-blue flex items-center justify-center">
                      <span className="text-[10px] font-bold">UI</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold">Design Enthusiasts</p>
                      <p className="text-[10px] text-[#637588]">Active now: 12 members</p>
                    </div>
                    <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LearningDashboard;
