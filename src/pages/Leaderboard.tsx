import React from 'react';

const Leaderboard: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen mesh-gradient text-[#181113] font-display">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 glass-card px-4 md:px-20 lg:px-40 py-3 border-b border-white/20">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-[#f4256a] rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h2 className="text-[#181113] dark:text-white text-xl font-bold leading-tight tracking-tight">EdTunl Study</h2>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-[#181113] dark:text-white/80 text-sm font-semibold hover:text-[#f4256a] transition-colors">Dashboard</a>
              <a href="#" className="text-[#181113] dark:text-white/80 text-sm font-semibold hover:text-[#f4256a] transition-colors">Courses</a>
              <a href="#" className="text-[#181113] dark:text-white/80 text-sm font-semibold hover:text-[#f4256a] transition-colors">Challenges</a>
              <a href="#" className="text-[#f4256a] text-sm font-bold border-b-2 border-[#f4256a] pb-1">Leaderboard</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex bg-white/50 dark:bg-black/20 rounded-xl px-4 py-2 items-center gap-2 border border-white/30">
              <span className="material-symbols-outlined text-[#f4256a] text-lg">local_fire_department</span>
              <span className="font-bold text-sm">12 Day Streak</span>
            </div>
            <button className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-white transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="size-10 rounded-full border-2 border-[#f4256a] bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUfMmgqmCnVfoEGCsD7c5f1Z-WFTNLgmxIYFucBnIkdCe-O6aGZie0V0mxpOvrjrJdgA08ovTjBWKK110RxggkVoorvmOQ0C8NTR6QgfKdixEaIhY79pxapvC_CajO1zf0SGUpf7OfCCxdE5BDXLm1GF5r5OCX863CHuANPgI2kcswUcqwOPv327jNziBSu-h8f8nzsu8RFB-Or0DyhkVd8E9nKgFMjL28ROOSenKbrbPTid69Ep974SOvyl7CVi3OhTdzAxtetKw")'}}></div>
          </div>
        </div>
      </header>
      <main className="max-w-[1000px] mx-auto px-4 py-10 relative">
        {/* Floating Decor */}
        <div className="absolute top-10 -left-20 text-[#f4256a]/20 floating pointer-events-none" style={{animationDelay: '0s'}}>
          <span className="material-symbols-outlined text-8xl">star</span>
        </div>
        <div className="absolute top-60 -right-20 text-[#f4256a]/20 floating pointer-events-none" style={{animationDelay: '2s'}}>
          <span className="material-symbols-outlined text-9xl">trophy</span>
        </div>
        <div className="absolute bottom-20 -left-10 text-[#f4256a]/10 floating pointer-events-none" style={{animationDelay: '1s'}}>
          <span className="material-symbols-outlined text-7xl">auto_awesome</span>
        </div>
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#181113] dark:text-white text-5xl font-black leading-none tracking-tight">Leaderboard Champions</h1>
            <p className="text-[#f4256a] font-bold text-lg">Who&apos;s leading the grind today? 🚀</p>
          </div>
          <button className="bg-[#f4256a] text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-[#f4256a]/30 hover:scale-105 transition-transform flex items-center gap-2">
            <span className="material-symbols-outlined">analytics</span>
            View My Stats
          </button>
        </div>
        {/* Podium Section */}
        <div className="grid grid-cols-3 items-end gap-2 md:gap-6 mb-16 relative z-10 max-w-2xl mx-auto">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="size-20 md:size-24 rounded-full border-4 border-gray-300 bg-cover bg-center bg-[#f5f0f1]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAO1Rjxl7MWvEHI5XtWf0tUeqC9PCsgp48rgNwolpZ4xpJekHeqJ-kWzsvKtF4XMKs05MurWX4mTlhNQF38PN2dQRltr8wBVp2p0bChuYq1-IT1dZ7Z2gGyIv2pkUPnJRbJ9fGJvqnDSU_udWvD1pbMUnawQpgmGkhL0ZnKDaquZQGKB4t5qILrSPRT5P7Og9gvLkf1iWJSHQoUI_SLLgoVOBiv_RPBL2OMwvojbRXfHVPh4eiiTwxUmYIJVp4Ob0Nwg0l2PXC7QRE")'}}></div>
              <div className="absolute -bottom-2 -right-2 size-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white border-2 border-white">2</div>
            </div>
            <div className="w-full h-32 md:h-40 glass-card rounded-t-2xl podium-shadow flex flex-col items-center justify-center p-4 text-center">
              <p className="font-bold text-[#181113] text-sm md:text-base truncate w-full">Alex Rivera</p>
              <p className="text-xs font-semibold text-[#f4256a]">Elite Scholar</p>
              <div className="mt-2 text-lg font-black">12.4k</div>
            </div>
          </div>
          {/* 1st Place */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#f4256a] blur-2xl opacity-30 animate-pulse"></div>
              <div className="size-28 md:size-32 rounded-full border-4 border-[#f4256a] bg-cover bg-center bg-[#f5f0f1] relative z-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_lTpYbGZsWdVBt3jyEtKZeEesnF3_0dVqindCkAVEKxrnyVWAb6a8Ykzip3jPjGaW9MgvphBumlaRDUCVy1csztGcR2lw3wvVlmkHGEoRVehM4Wli5jfTKnYd1bWNgmhNaaQTwJlT-_tIMB60kyA5mMqKaaC1l8MLd9JF-XLceXj5_x6ugUfmhfFEojX2WMvL_lbASkVR1scHcGdBvkuGgm8NM5-Jp1BT8RVT24a2iYsettO7YovLzzj7g8WjhvWy-Gr-GXBU3MQ")'}}></div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <span className="material-symbols-outlined text-4xl text-yellow-500">crown</span>
              </div>
              <div className="absolute -bottom-2 -right-2 size-10 bg-[#f4256a] rounded-full flex items-center justify-center font-black text-white border-2 border-white z-20 shadow-lg">1</div>
            </div>
            <div className="w-full h-44 md:h-56 bg-[#f4256a] rounded-t-3xl shadow-2xl shadow-[#f4256a]/40 flex flex-col items-center justify-center p-4 text-center text-white">
              <p className="font-extrabold text-lg md:text-xl truncate w-full">Jordan Smith</p>
              <p className="text-xs md:text-sm font-medium opacity-90">Supreme Learner</p>
              <div className="mt-4 text-2xl md:text-3xl font-black">15.8k</div>
              <div className="mt-2 bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Top of the world</div>
            </div>
          </div>
          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="size-20 md:size-24 rounded-full border-4 border-orange-400 bg-cover bg-center bg-[#f5f0f1]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYb0csZK9U1CtDUp4d2a1hQf2zw87CV24f6r21C7IhOKZ8bA8jH_6SFAkGsnaQwaJXbQ0gr3-HZyIatm-hOl_ig8nKMY3Pega3886AYo-WqVzprb6r94XeDVDMRxOmVVg7F3zyZl3c_QQQXm0_Bmi1Y6kZ-bLc9la0HF3AQm4VkCDNlcBnGmu9ibOBmixt1xGq8HsiKtIpVOsETex2lAsHaeMOC3ZT3MjussLLNtKJQzCaxr_GpuOWUo2-nDtYgvrDEpTxSjT9iOA")'}}></div>
              <div className="absolute -bottom-2 -right-2 size-8 bg-orange-400 rounded-full flex items-center justify-center font-bold text-white border-2 border-white">3</div>
            </div>
            <div className="w-full h-28 md:h-32 glass-card rounded-t-2xl podium-shadow flex flex-col items-center justify-center p-4 text-center">
              <p className="font-bold text-[#181113] text-sm md:text-base truncate w-full">Casey Chen</p>
              <p className="text-xs font-semibold text-[#f4256a]">Master Grinder</p>
              <div className="mt-1 text-lg font-black">10.9k</div>
            </div>
          </div>
        </div>
        {/* Ranking Table */}
        <div className="glass-card rounded-3xl overflow-hidden relative z-10 border border-white/50 shadow-xl">
          <div className="p-6 md:px-10 border-b border-white/20 flex justify-between items-center bg-white/10">
            <h3 className="font-bold text-lg">Top 100 Scholars</h3>
            <div className="flex gap-4">
              <button className="text-sm font-bold text-[#f4256a] px-4 py-2 bg-[#f4256a]/10 rounded-lg">Monthly</button>
              <button className="text-sm font-semibold text-gray-500 hover:text-[#f4256a] transition-colors px-4 py-2">All-Time</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-white/10">
                  <th className="px-8 py-5">Rank</th>
                  <th className="px-8 py-5">Student</th>
                  <th className="px-8 py-5 text-center">Study Points</th>
                  <th className="px-8 py-5 text-right">Streaks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/20">
                {/* Rank 4 */}
                <tr className="hover:bg-white/40 transition-colors group">
                  <td className="px-8 py-6 font-black text-2xl text-gray-400 group-hover:text-[#f4256a]">4</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full border-2 border-white bg-cover bg-center shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxQe3lLs4Zj5SA-nEHvqDCccm6B4i0t-dkhQbhvzu04fspjPkGqp3GFMLTY3Nl9jVbWwA5vDKGvCBIwqXAf_pwmBGpPzDx148RAQyF1xibTLqjWLY3yBFHzx1z418AZmVW70zlQRnHS_q1ZGBl42W09H1yHtQ1evPiugSui5HxbghHsjtGa-czMx4x4zbHrc41FRSDdkQqua9a56EFQoewVFZpAtB3I9VtBk1AHBhuRy_oHrp-ig48EZgvDMxgXu_K9FUwUdczVck")'}}></div>
                      <div>
                        <p className="font-bold text-[#181113]">Taylor Swiftie</p>
                        <p className="text-xs text-gray-500">Sophomore Explorer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="bg-[#f4256a]/10 text-[#f4256a] font-bold px-4 py-2 rounded-xl text-sm">9,400 XP</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="flex items-center justify-end gap-1 font-bold text-[#f4256a]">
                      7 Days <span className="material-symbols-outlined text-sm">local_fire_department</span>
                    </span>
                  </td>
                </tr>
                {/* Rank 5 */}
                <tr className="hover:bg-white/40 transition-colors group">
                  <td className="px-8 py-6 font-black text-2xl text-gray-400 group-hover:text-[#f4256a]">5</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full border-2 border-white bg-cover bg-center shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfs7geLBMnPJFKirWpuBoPErfImlND0fXbyl88udZ5ITymhjNYv6uXOMG8hIVmdP1cXIAX1OuWTx98T_nAUaGweL8ESvw_Egsvxbe_iXBkwFx_pcyR4OVa5oYJJtw-hTGPGq1XlDKDbhbbeXOiKio0Ovmkc36A80nMfNffsvWJVmtlZzkivWCV4HWgvL2vf0Px_M9p4AhNpOzZMOMfyNZhd1vn2kqKki9Ff5s0jIP8yASMWHgszviy8U56mD14_VxxKSId9kRmK3Q")'}}></div>
                      <div>
                        <p className="font-bold text-[#181113]">Morgan Free</p>
                        <p className="text-xs text-gray-500">Daily Hustler</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="bg-[#f4256a]/10 text-[#f4256a] font-bold px-4 py-2 rounded-xl text-sm">8,210 XP</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="flex items-center justify-end gap-1 font-bold text-[#f4256a]">
                      3 Days <span className="material-symbols-outlined text-sm">local_fire_department</span>
                    </span>
                  </td>
                </tr>
                {/* Rank 6 */}
                <tr className="hover:bg-white/40 transition-colors group">
                  <td className="px-8 py-6 font-black text-2xl text-gray-400 group-hover:text-[#f4256a]">6</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full border-2 border-white bg-cover bg-center shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALaa2bgerwb4YF3f98uDc9EkkxO_6o5wNkphLLOViyrLdbfIuvZa0W9KodOANL3BPyJK3A_cUAzXx2IN-Z86IlRBCVww5GDxFYqlweivAgMC3FMReUN9idqvXHZmblyRI-lGnR88dOn07YAMmTj01gG5Cn9uKWvjUijCasyG0gIDEALD3JbmoGA8q_wB5HDUBoGc1q0rFAIth8xL3MJ2EA0CFYb0Tek0OCV2x3PIax1Hli5pfVHH72QD3s-RvBeuMf7UDq8BSwUR4")'}}></div>
                      <div>
                        <p className="font-bold text-[#181113]">Sasha Blue</p>
                        <p className="text-xs text-gray-500">Knowledge Seeker</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="bg-[#f4256a]/10 text-[#f4256a] font-bold px-4 py-2 rounded-xl text-sm">7,950 XP</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="flex items-center justify-end gap-1 font-bold text-[#f4256a]">
                      21 Days <span className="material-symbols-outlined text-sm">local_fire_department</span>
                    </span>
                  </td>
                </tr>
                {/* Rank 7 */}
                <tr className="hover:bg-white/40 transition-colors group">
                  <td className="px-8 py-6 font-black text-2xl text-gray-400 group-hover:text-[#f4256a]">7</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full border-2 border-white bg-cover bg-center shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTuEU8G4RkOPrKsfaiyVud9-Wzd5rY5LhD5-Ym1MLxbkik5iE-Ud_pqxtlMqOWMBmeQRYpZcA0kOp7wmBDYf-Gds7xkp5DEjGUTBPT0q22rk0eVNNy4-oz8X-oUP2UGwtHW2dBaDwVacbvbRGt8361AZLZ6tVjt2YcRnsVqZymCBPTL7tJJGZHaU0uFUHmTZEZwv1u81iyTjeGdzVCaX5DppTuIqHYqrRohPFSpxTo1flKEB-xF2ul2fD5aT3WxLURM1vCq1wt0t0")'}}></div>
                      <div>
                        <p className="font-bold text-[#181113]">Jamie Fox</p>
                        <p className="text-xs text-gray-500">Flashcard Pro</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="bg-[#f4256a]/10 text-[#f4256a] font-bold px-4 py-2 rounded-xl text-sm">7,100 XP</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="flex items-center justify-end gap-1 font-bold text-[#f4256a]">
                      5 Days <span className="material-symbols-outlined text-sm">local_fire_department</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 flex justify-center bg-white/10">
            <button className="text-[#f4256a] font-bold flex items-center gap-2 hover:underline">
              Show More Rankings
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-12 text-center relative z-10">
          <div className="glass-card p-8 rounded-[2rem] border-2 border-[#f4256a]/20 flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
            <div className="text-left">
              <h4 className="text-xl font-extrabold mb-1">Want to climb higher?</h4>
              <p className="text-gray-600 text-sm">Start a 1v1 challenge and earn double XP for the next hour!</p>
            </div>
            <button className="w-full md:w-auto px-10 py-4 bg-[#f4256a] text-white font-black rounded-2xl shadow-xl hover:shadow-[#f4256a]/40 transition-all active:scale-95">
              CHALLENGE A FRIEND
            </button>
          </div>
        </div>
      </main>
      <footer className="mt-20 py-10 glass-card text-center border-t border-white/20">
        <div className="flex justify-center items-center gap-1 text-sm font-bold text-gray-500 mb-2">
          MADE WITH <span className="material-symbols-outlined text-[#f4256a] text-sm">favorite</span> FOR THE GRIND
        </div>
        <p className="text-xs text-gray-400">© 2024 EdTunl Platform. Stay focused, stay winning.</p>
      </footer>
    </div>
  );
};

export default Leaderboard;
