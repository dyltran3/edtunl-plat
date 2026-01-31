import React from 'react';

const CollaborativeRoom: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#141118] dark:text-white transition-colors duration-300 min-h-screen">
      {/* Animated Style Dynamic Background */}
      <div className="blob-bg dark:opacity-20">
        <div className="blob bg-primary-purple w-[500px] h-[500px] -top-20 -left-20"></div>
        <div className="blob bg-pastel-mint w-[600px] h-[600px] -bottom-40 -right-20"></div>
        <div className="blob bg-pastel-lavender w-[400px] h-[400px] top-1/2 left-1/3"></div>
      </div>
      <div className="flex h-screen w-full p-4 gap-4 overflow-hidden">
        {/* LEFT SIDEBAR: Member List */}
        <aside className="glass w-72 rounded-xl flex flex-col overflow-hidden shrink-0 shadow-xl">
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-primary-purple/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary-purple">auto_stories</span>
              </div>
              <div>
                <h1 className="text-lg font-bold leading-tight">Calc II Study</h1>
                <p className="text-xs text-[#756189] dark:text-white/60">Active: 1h 20m</p>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            <div className="px-4 py-2 text-xs font-bold text-primary-purple uppercase tracking-wider">Study Buddies (4)</div>
            {/* Member 1 */}
            <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/40 dark:bg-white/5 border border-white/20">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 border-2 border-primary-purple" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYmrlGd2p_MiqPtMtY3whP8SW805tYFO76W67P_xJ3_aVurHl9RpXJj2ydxKCuMdrDCPt1bz1l9w1qy7uzNK3ILXJyeXvijgNzE_PZRsUB5Oe77XuRqKfa2z4UcyTuFnRjt_rAKUlmn-wIRY8695-BfpXfOza29y7j7wx_cPKpfLFwMzD-6z4ogEgWrMC8IHlmdbmydWbHGf8Im4OkFPZHbTYQyY5yrRzr0YcTQsAt_HHZ00P19-Ld3255gxItiF4_ebOBq8KT5uQ")'}}></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-sm font-semibold line-clamp-1">Alice Zhang</p>
                <p className="text-[10px] text-[#756189] dark:text-white/60 font-medium">Focused 📝</p>
              </div>
              <span className="material-symbols-outlined text-xs text-primary-purple">bolt</span>
            </div>
            {/* Member 2 */}
            <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/20 transition-all cursor-pointer">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcdrzORC4V1ZmiuRl4Z1LMoEkfaujSCNoJT8jda491eneebO7pGyGIqq7jPrAOgjZ5u5bI8hUwVxcSgxVPD5Opb-puOzElcm-AzMG6VRKBe2Wjwwa58ui2lXeE4V4XnVnuytLsU-QHQ1o5-XdDi__2-Vkg5cFZxXtvX7uDLdN36HMoG3mOTAU88dQsFyGq1VWU98vu_ZgFm5qYuxaQfGidA8FZeGVHqv1WOtPpxW5lP5zpD0QuNCGwpWDylHtJK_6LvHcbihOzUvg")'}}></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold line-clamp-1">Jordan Smith</p>
                <p className="text-[10px] text-[#756189] dark:text-white/60">Online</p>
              </div>
            </div>
            {/* Member 3 */}
            <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/20 transition-all cursor-pointer">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCU0ioQdCcNSz1hXfwmeizVQQNUPDJzrOcOPSiGgPX37fYbiJUiABfkvw-LTSqjrnmFHW4Of3Flj4E6V4At2MMInXf0MfYZAslQJ153G1H1dpn575Nq42dS58qff43ailY0RaUuVbfU6jBX8vac4A9GIEYMDvOrlQMfpzLgy4aWCQRp1dldSyHrWcd4iB2-_mKXO4zns2erxJD60_Ws-scwloT1Y8qcHgw9WURm4Hi8oOJV_TBvlvLhDrhnbNmrrjLFUsXOpthxKQY")'}}></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary-purple border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold line-clamp-1">Riley Kim</p>
                <p className="text-[10px] text-[#756189] dark:text-white/60">In Flow</p>
              </div>
            </div>
            {/* Member 4 */}
            <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/20 transition-all cursor-pointer opacity-70">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 grayscale" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCe3_pg_skI30zGSHPfssXk6g9_lx91Ud38Bx0q-1__Moji4S9PQCQGPmccs1k8s9aHxJk0WstQlXWzsA4UOKvQQBAKbdHnXqUhR2AS5RvnfNcgHx4UfUM4d7NQy4pKOb7zxdzOkp8LrjVm4Cxd8AOOcFB5wd7vJ7YdEXqhrf_x34gJciZhKifZRnA4P93lXcf5sMuPSyH6z0dxxB5SsQtYRFyb8pKBn4hEXOSpytWnTXU4yzF741CzJIeyYmSLAWYCFCb_Cu7bqwg")'}}></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold line-clamp-1">Sam Taylor</p>
                <p className="text-[10px] text-[#756189] dark:text-white/60">Away</p>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-2 mt-auto border-t border-white/20">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-primary-purple text-white shadow-lg shadow-primary-purple/30">
              <span className="material-symbols-outlined text-lg">palette</span>
              <span className="text-sm font-medium">Whiteboard</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/20 transition-all">
              <span className="material-symbols-outlined text-lg">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </button>
          </div>
        </aside>
        {/* CENTER CONTENT: Video Grid */}
        <main className="flex-1 flex flex-col gap-4">
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            {/* Video Tile 1 (Self) */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/30 group">
              <img className="w-full h-full object-cover" alt="Video feed of current user" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUK_wuCXSjQmneMra96U34QcLtApPb5QZ6ZH9PWMkZSDhi3l6eMxkMH55hnpfBI30CFl234mgEXR-cMPszuk9jEIW4QKbigpEcoxJAIhcNV7sA0MCorbbwcNvHM5WNOzss89DVF64Jvg2BrjrhuefWJ1iUhepLq9iibx0JIDCTUDmrlL2E0O_asU7P6vHwFfcXpu7krsoPsQhbBa2ZJc7Zge5pcTBxXOj45Rh7USxl7XofP56v4lkjdstF-R7ioXYErtu2qRBYzbA"/>
              <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-full flex items-center gap-2">
                <span className="text-xs font-semibold">You</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="glass p-2 rounded-full hover:bg-primary-purple hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">more_vert</span>
                </button>
              </div>
            </div>
            {/* Video Tile 2 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/30 group">
              <img className="w-full h-full object-cover" alt="Video feed of Jordan Smith" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7L6jdtfD3tVCBlwsdCXu7qFw3XnCIpsg6Fby_9tEp8QjExdVpDcwOYxisCBwJSiYG8NqnfGjpDnTpz0lSVmjBGdw49k1f9musDfZN9w0pHomvBDeOuPxU80m2K5yXCHcWIlRCcpSByLXIk63HoUZi8-30EWuVxDB6W4NyzGgT-Q4b9ZI1hSRmmI_ycg1bPMjOV85GnxzFAunF62co_UNaFsOlQ6vzgL8U3SZrtcWLAUKqqOhFc3fwqqxSKyHOI_M7p_jG1sx-EI4"/>
              <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-full flex items-center gap-2">
                <span className="text-xs font-semibold">Jordan Smith</span>
                <span className="material-symbols-outlined text-xs text-primary-purple">mic_off</span>
              </div>
            </div>
            {/* Video Tile 3 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/30 group">
              <img className="w-full h-full object-cover" alt="Video feed of Riley Kim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf0CAdfxO18LhePk0PDOwt44GNucR2GMiJkKBlSrkHKywQ6YDX3A0HiEZDAZrP0tseazDjt2xGY-FmB7zDun-xGlFzl0O3P5r7m_lnVGNNy4jgNUc1xa-iAUr49NfQhE9TPtLpKmWlCNcVzHvFqvw4HYKg-gbJSV43MnCTfA5MFoeVm6cdXkqEQfzfPseScHtRWoHjqLz66IReJVtG5azoct61OSX085G3b0v3sio1qbwsIK1DnxaopKm46KZ9k2483wQk7_vnbWU"/>
              <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-full flex items-center gap-2">
                <span className="text-xs font-semibold">Riley Kim</span>
              </div>
            </div>
            {/* Video Tile 4 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/30 group">
              <img className="w-full h-full object-cover" alt="Video feed of Alice Zhang" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgXL0R5BPmvBl-KmLOJezUAftvge-l0vQEwCs1pb2fV11WFL4TdDW3zfjPkHZwwnHsE7P0jEMWiKwtYO5c5oP2SMhtLxFsHNlByJn8fyOFRGR69WRHjg_R0lV8LMjzFMM7pXRPg14j2tYePvsncci01CXhqwUN39_BdNRFlCw0DnUtf9OWFxsPs71_cxz64lezpxYTWdlaXiQvVdEefjpTUz98dPE4f4FddEftYqus5vzbANJEZGRY2QPeS8JmlmbBH_Ian9e__F8"/>
              <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-full flex items-center gap-2">
                <span className="text-xs font-semibold text-primary-purple font-bold">Alice Zhang</span>
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
              </div>
            </div>
          </div>
          {/* Bottom Controls Bar */}
          <div className="glass h-20 px-8 rounded-xl flex items-center justify-between shadow-2xl">
            <div className="flex items-center gap-4">
              <button className="p-3 glass rounded-full hover:bg-white transition-all text-[#141118]">
                <span className="material-symbols-outlined">mic</span>
              </button>
              <button className="p-3 glass rounded-full hover:bg-white transition-all text-[#141118]">
                <span className="material-symbols-outlined">videocam</span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <button className="p-3 bg-primary-purple text-white rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary-purple/30">
                <span className="material-symbols-outlined">screen_share</span>
              </button>
              <button className="p-3 glass rounded-full hover:bg-white transition-all text-[#141118]">
                <span className="material-symbols-outlined">emoji_emotions</span>
              </button>
              <button className="p-3 glass rounded-full hover:bg-white transition-all text-[#141118]">
                <span className="material-symbols-outlined">handshake</span>
              </button>
            </div>
            <button className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2 shadow-lg shadow-red-500/20">
              <span className="material-symbols-outlined">call_end</span>
              Leave
            </button>
          </div>
        </main>
        {/* RIGHT SIDEBAR: Chat Panel */}
        <aside className="glass w-80 rounded-xl flex flex-col overflow-hidden shadow-xl">
          {/* Segmented Control Toggle */}
          <div className="p-4 border-b border-white/20">
            <div className="flex bg-white/30 dark:bg-black/20 p-1 rounded-lg">
              <button className="flex-1 py-1.5 text-xs font-bold rounded-md bg-white dark:bg-white/10 shadow-sm">Chat</button>
              <button className="flex-1 py-1.5 text-xs font-bold text-[#756189] dark:text-white/60">Whiteboard</button>
            </div>
          </div>
          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Message from others */}
            <div className="flex flex-col gap-1 items-start">
              <p className="text-[10px] font-bold ml-2 text-primary-purple/80">Alice Zhang</p>
              <div className="bg-pastel-mint text-emerald-900 text-sm py-2 px-3 rounded-xl rounded-tl-none shadow-sm max-w-[90%]">
                Check out the integral on page 42! 📚
              </div>
            </div>
            {/* Message from self */}
            <div className="flex flex-col gap-1 items-end">
              <div className="bg-primary-purple text-white text-sm py-2 px-3 rounded-xl rounded-tr-none shadow-sm max-w-[90%]">
                On it! Does anyone understand the second derivative part?
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[8px] text-gray-500">Read 2:14 PM</span>
              </div>
            </div>
            {/* Message with emoji reactions */}
            <div className="flex flex-col gap-1 items-start">
              <p className="text-[10px] font-bold ml-2 text-primary-purple/80">Jordan Smith</p>
              <div className="bg-pastel-lavender text-purple-900 text-sm py-2 px-3 rounded-xl rounded-tl-none shadow-sm max-w-[90%] relative">
                I think I got it. Let&apos;s look at the graph. 📉
                <div className="absolute -bottom-2 -right-2 flex gap-1">
                  <span className="bg-white px-1.5 py-0.5 rounded-full border border-gray-100 text-[10px] shadow-sm">🔥 2</span>
                </div>
              </div>
            </div>
            {/* Shared Link Mockup */}
            <div className="flex flex-col gap-1 items-start mt-4">
              <div className="bg-white/50 dark:bg-white/5 border border-white/30 rounded-lg p-3 w-full">
                <p className="text-[10px] font-bold text-primary-purple uppercase">Shared File</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="material-symbols-outlined text-primary-purple">description</span>
                  <span className="text-xs font-medium truncate">Calc_Review_Notes.pdf</span>
                </div>
              </div>
            </div>
          </div>
          {/* Chat Input */}
          <div className="p-4 border-t border-white/20 bg-white/10">
            <div className="relative">
              <input className="w-full bg-white/60 dark:bg-black/30 border-none rounded-xl pl-4 pr-12 py-3 text-sm focus:ring-2 focus:ring-primary-purple focus:bg-white transition-all" placeholder="Send a message..." type="text"/>
              <button className="absolute right-2 top-1.5 p-1.5 bg-primary-purple text-white rounded-lg hover:scale-105 transition-all">
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </div>
            <div className="flex justify-between items-center mt-2 px-1">
              <div className="flex gap-2">
                <button className="text-gray-500 hover:text-primary-purple transition-colors">
                  <span className="material-symbols-outlined text-xl">attach_file</span>
                </button>
                <button className="text-gray-500 hover:text-primary-purple transition-colors">
                  <span className="material-symbols-outlined text-xl">image</span>
                </button>
              </div>
              <div className="text-[10px] text-gray-400">Press Enter to send</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CollaborativeRoom;
