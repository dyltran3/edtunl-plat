import React from 'react';

const InteractiveWhiteboard: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#141118] dark:text-white transition-colors duration-300 min-h-screen">
      <div className="blob-bg dark:opacity-20">
        <div className="blob bg-primary-purple w-[500px] h-[500px] -top-20 -left-20"></div>
        <div className="blob bg-pastel-mint w-[600px] h-[600px] -bottom-40 -right-20"></div>
        <div className="blob bg-pastel-lavender w-[400px] h-[400px] top-1/2 left-1/3"></div>
      </div>
      <div className="flex h-screen w-full p-4 gap-4 overflow-hidden">
        <aside className="w-64 flex flex-col gap-4 shrink-0">
          <div className="glass p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-primary-purple/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary-purple">auto_stories</span>
              </div>
              <div>
                <h1 className="text-sm font-bold leading-tight">Calc II Room</h1>
                <p className="text-[10px] text-[#756189] dark:text-white/60">4 Studious Friends</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 overflow-y-auto pr-1">
            <div className="relative rounded-xl overflow-hidden shadow-md border border-white/30 aspect-video shrink-0">
              <img className="w-full h-full object-cover" alt="Video feed of current user" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUK_wuCXSjQmneMra96U34QcLtApPb5QZ6ZH9PWMkZSDhi3l6eMxkMH55hnpfBI30CFl234mgEXR-cMPszuk9jEIW4QKbigpEcoxJAIhcNV7sA0MCorbbwcNvHM5WNOzss89DVF64Jvg2BrjrhuefWJ1iUhepLq9iibx0JIDCTUDmrlL2E0O_asU7P6vHwFfcXpu7krsoPsQhbBa2ZJc7Zge5pcTBxXOj45Rh7USxl7XofP56v4lkjdstF-R7ioXYErtu2qRBYzbA"/>
              <div className="absolute bottom-1.5 left-1.5 glass px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="text-[10px] font-semibold">You</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-md border border-white/30 aspect-video shrink-0">
              <img className="w-full h-full object-cover" alt="Video feed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7L6jdtfD3tVCBlwsdCXu7qFw3XnCIpsg6Fby_9tEp8QjExdVpDcwOYxisCBwJSiYG8NqnfGjpDnTpz0lSVmjBGdw49k1f9musDfZN9w0pHomvBDeOuPxU80m2K5yXCHcWIlRCcpSByLXIk63HoUZi8-30EWuVxDB6W4NyzGgT-Q4b9ZI1hSRmmI_ycg1bPMjOV85GnxzFAunF62co_UNaFsOlQ6vzgL8U3SZrtcWLAUKqqOhFc3fwqqxSKyHOI_M7p_jG1sx-EI4"/>
              <div className="absolute bottom-1.5 left-1.5 glass px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="text-[10px] font-semibold">Jordan</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-md border border-white/30 aspect-video shrink-0">
              <img className="w-full h-full object-cover" alt="Video feed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf0CAdfxO18LhePk0PDOwt44GNucR2GMiJkKBlSrkHKywQ6YDX3A0HiEZDAZrP0tseazDjt2xGY-FmB7zDun-xGlFzl0O3P5r7m_lnVGNNy4jgNUc1xa-iAUr49NfQhE9TPtLpKmWlCNcVzHvFqvw4HYKg-gbJSV43MnCTfA5MFoeVm6cdXkqEQfzfPseScHtRWoHjqLz66IReJVtG5azoct61OSX085G3b0v3sio1qbwsIK1DnxaopKm46KZ9k2483wQk7_vnbWU"/>
              <div className="absolute bottom-1.5 left-1.5 glass px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="text-[10px] font-semibold">Riley</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-md border border-white/30 aspect-video shrink-0">
              <img className="w-full h-full object-cover" alt="Video feed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgXL0R5BPmvBl-KmLOJezUAftvge-l0vQEwCs1pb2fV11WFL4TdDW3zfjPkHZwwnHsE7P0jEMWiKwtYO5c5oP2SMhtLxFsHNlByJn8fyOFRGR69WRHjg_R0lV8LMjzFMM7pXRPg14j2tYePvsncci01CXhqwUN39_BdNRFlCw0DnUtf9OWFxsPs71_cxz64lezpxYTWdlaXiQvVdEefjpTUz98dPE4f4FddEftYqus5vzbANJEZGRY2QPeS8JmlmbBH_Ian9e__F8"/>
              <div className="absolute bottom-1.5 left-1.5 glass px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="text-[10px] font-semibold">Alice</span>
              </div>
            </div>
          </div>
          <div className="mt-auto glass p-3 rounded-xl flex flex-col gap-2">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-primary-purple text-white text-xs font-bold shadow-lg shadow-primary-purple/30">
              <span className="material-symbols-outlined text-base">screen_share</span>
              Share Screen
            </button>
            <div className="flex gap-2">
              <button className="flex-1 p-2 glass rounded-lg hover:bg-white text-[#141118]">
                <span className="material-symbols-outlined text-lg leading-none">mic</span>
              </button>
              <button className="flex-1 p-2 glass rounded-lg hover:bg-white text-[#141118]">
                <span className="material-symbols-outlined text-lg leading-none">videocam</span>
              </button>
            </div>
          </div>
        </aside>
        <main className="flex-1 relative flex flex-col gap-4 min-w-0">
          <div className="flex-1 glass whiteboard-grid rounded-2xl relative overflow-hidden shadow-2xl flex flex-col">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-2xl flex items-center gap-4 z-20 shadow-xl border border-white/50">
              <div className="flex items-center gap-2 border-r border-gray-300 pr-4">
                <button className="w-8 h-8 rounded-full bg-primary-purple flex items-center justify-center text-white ring-2 ring-primary-purple ring-offset-2">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
                <button className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-lg">brush</span>
                </button>
                <button className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-lg">edit_note</span>
                </button>
              </div>
              <div className="flex items-center gap-3 border-r border-gray-300 pr-4">
                <button className="w-10 h-10 rounded-xl hover:bg-pastel-yellow/50 transition-colors flex items-center justify-center text-gray-700">
                  <span className="material-symbols-outlined">sticky_note_2</span>
                </button>
                <button className="w-10 h-10 rounded-xl hover:bg-pastel-lavender/50 transition-colors flex items-center justify-center text-gray-700">
                  <span className="material-symbols-outlined">pentagon</span>
                </button>
                <button className="w-10 h-10 rounded-xl hover:bg-pastel-mint/50 transition-colors flex items-center justify-center text-gray-700">
                  <span className="material-symbols-outlined">image</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary-purple transition-colors">
                  <span className="material-symbols-outlined">ink_eraser</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary-purple transition-colors">
                  <span className="material-symbols-outlined">undo</span>
                </button>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden p-20">
              <div className="absolute top-32 left-40 w-40 h-40 bg-pastel-yellow shadow-lg rotate-[-2deg] p-4 flex flex-col justify-between rounded-sm">
                <p className="text-xs text-yellow-900 font-bold uppercase tracking-wider">Idea!</p>
                <p className="text-sm text-yellow-800 hand-drawn leading-tight">Integrate by parts for question 4b?</p>
                <div className="flex justify-end"><span className="material-symbols-outlined text-yellow-700/30">push_pin</span></div>
              </div>
              <div className="absolute top-24 right-48 w-44 h-44 bg-pastel-pink shadow-lg rotate-[3deg] p-4 flex flex-col justify-between rounded-sm">
                <p className="text-xs text-pink-900 font-bold uppercase tracking-wider">Note</p>
                <p className="text-sm text-pink-800 hand-drawn leading-tight">Don&apos;t forget the constant C at the end! 🤦‍♀️</p>
                <div className="flex justify-end"><span className="material-symbols-outlined text-pink-700/30">push_pin</span></div>
              </div>
              <div className="absolute bottom-40 left-1/4 select-none opacity-80 pointer-events-none">
                <svg height="150" viewBox="0 0 300 150" width="300">
                  <path d="M 50 120 Q 150 20 250 120" fill="none" stroke="#7f13ec" strokeDasharray="5 5" strokeWidth="3"></path>
                  <circle cx="150" cy="50" fill="#7f13ec" r="5"></circle>
                  <text fill="#7f13ec" fontFamily="cursive" fontSize="14" x="140" y="40">Maximum</text>
                </svg>
              </div>
              <div className="absolute bottom-24 right-1/4 select-none opacity-60">
                <svg height="100" viewBox="0 0 200 100" width="200">
                  <path d="M 20 80 L 180 80 M 20 80 L 20 20" fill="none" stroke="#10b981" strokeWidth="2"></path>
                  <path d="M 20 80 L 160 30" fill="none" stroke="#10b981" strokeWidth="3"></path>
                </svg>
              </div>
              <div className="absolute bottom-10 left-10 flex gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-primary-purple text-[8px] flex items-center justify-center text-white">AZ</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-400 text-[8px] flex items-center justify-center text-white">JS</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-400 text-[8px] flex items-center justify-center text-white">RK</div>
                </div>
                <div className="bg-black/5 rounded-full px-3 py-1 flex items-center">
                  <p className="text-[10px] text-gray-500 font-medium">3 others editing...</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <div className="glass p-1 rounded-xl flex flex-col gap-1">
                <button className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
                <div className="text-[10px] text-center font-bold text-gray-500">100%</div>
                <button className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-colors">
                  <span className="material-symbols-outlined">remove</span>
                </button>
              </div>
              <button className="glass w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white transition-colors">
                <span className="material-symbols-outlined">pan_tool</span>
              </button>
            </div>
          </div>
          <div className="glass h-14 px-6 rounded-2xl flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-xs font-bold text-primary-purple bg-primary-purple/10 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-primary-purple rounded-full animate-pulse"></span>
                Live Collaboration
              </span>
              <span className="text-xs text-gray-500">Changes autosaved 2m ago</span>
            </div>
            <button className="px-5 py-1.5 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">call_end</span>
              Leave Room
            </button>
          </div>
        </main>
        <aside className="glass w-72 rounded-xl flex flex-col overflow-hidden shadow-xl shrink-0">
          <div className="p-4 border-b border-white/20">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-bold">Group Chat</h2>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-[10px] font-bold text-gray-400">ONLINE</span>
              </div>
            </div>
            <div className="flex bg-white/30 dark:bg-black/20 p-1 rounded-lg">
              <button className="flex-1 py-1 text-[10px] font-bold rounded-md bg-white dark:bg-white/10 shadow-sm">Messages</button>
              <button className="flex-1 py-1 text-[10px] font-bold text-[#756189] dark:text-white/60">Polls</button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex flex-col gap-1 items-start">
              <p className="text-[9px] font-bold ml-1 text-primary-purple/80">Alice Zhang</p>
              <div className="bg-pastel-mint text-emerald-900 text-xs py-2 px-3 rounded-xl rounded-tl-none shadow-sm max-w-[95%]">
                Can someone draw the graph on the board? 📈
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <div className="bg-primary-purple text-white text-xs py-2 px-3 rounded-xl rounded-tr-none shadow-sm max-w-[95%]">
                Just added a basic sketch! Check it out.
              </div>
              <span className="text-[8px] text-gray-400">Read 2:15 PM</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="text-[9px] font-bold ml-1 text-primary-purple/80">Jordan Smith</p>
              <div className="bg-pastel-lavender text-purple-900 text-xs py-2 px-3 rounded-xl rounded-tl-none shadow-sm max-w-[95%] relative">
                Perfect, adding some sticky notes for labels.
                <div className="absolute -bottom-2 -right-1 flex gap-0.5">
                  <span className="bg-white px-1 py-0.5 rounded-full border border-gray-100 text-[8px] shadow-sm">💯</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-white/20 bg-white/10">
            <div className="relative">
              <input className="w-full bg-white/60 dark:bg-black/30 border-none rounded-xl pl-3 pr-10 py-2.5 text-xs focus:ring-2 focus:ring-primary-purple transition-all" placeholder="Message..." type="text"/>
              <button className="absolute right-1.5 top-1.5 p-1 bg-primary-purple text-white rounded-lg">
                <span className="material-symbols-outlined text-base">send</span>
              </button>
            </div>
            <div className="flex justify-between items-center mt-2 px-1">
              <div className="flex gap-2">
                <button className="text-gray-400 hover:text-primary-purple transition-colors">
                  <span className="material-symbols-outlined text-lg">attach_file</span>
                </button>
                <button className="text-gray-400 hover:text-primary-purple transition-colors">
                  <span className="material-symbols-outlined text-lg">mood</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default InteractiveWhiteboard;
