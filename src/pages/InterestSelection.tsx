import React from 'react';
import { useNavigate } from 'react-router-dom';

const InterestSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen relative overflow-hidden">
      {/* Dynamic Pastel Background with Floating Elements */}
      <div className="fixed inset-0 -z-10 pastel-bg overflow-hidden">
        {/* Floating 3D-like elements (Simulated with Gradients/Icons) */}
        <div className="absolute top-[10%] left-[15%] floating opacity-40">
          <span className="material-symbols-outlined text-pink-400 !text-7xl">
            lightbulb
          </span>
        </div>
        <div
          className="absolute bottom-[20%] right-[10%] floating opacity-40"
          style={{ animationDelay: '-2s' }}
        >
          <span className="material-symbols-outlined text-blue-400 !text-8xl">
            rocket_launch
          </span>
        </div>
        <div
          className="absolute top-[60%] left-[5%] floating opacity-30"
          style={{ animationDelay: '-4s' }}
        >
          <span className="material-symbols-outlined text-purple-400 !text-6xl">
            favorite
          </span>
        </div>
        <div className="absolute top-[20%] right-[20%] floating opacity-30">
          <span className="material-symbols-outlined text-yellow-400 !text-5xl">
            star
          </span>
        </div>
      </div>

      {/* Top Navigation */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#111318] dark:text-white tracking-tight">
            GenZ Learning
          </h1>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-2 rounded-full border-2 border-primary/20 bg-white/50 dark:bg-white/10 dark:text-white font-bold text-sm"
        >
          Sign In
        </button>
      </header>

      <main className="relative z-10 flex items-center justify-center px-4 py-10 min-h-[calc(100vh-100px)]">
        <div className="glass-card w-full max-w-[900px] rounded-lg shadow-2xl p-8 md:p-12">
          {/* Progress Section */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-primary font-bold text-sm tracking-widest uppercase">
                  Step 1 of 3
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#111318] dark:text-white mt-1">
                  Pick your interests
                </h2>
              </div>
              <p className="text-[#616f89] dark:text-gray-400 text-lg font-medium">
                33%
              </p>
            </div>
            <div className="w-full bg-gray-200 dark:bg-white/10 h-3 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-1/3 rounded-full"></div>
            </div>
            <p className="text-[#616f89] dark:text-gray-400 text-base">
              What sparks your curiosity? Choose at least three to get started ✨
            </p>
          </div>

          {/* Content Area: Step 1 Interests */}
          <div className="space-y-12">
            <div className="flex flex-wrap gap-4">
              {/* Interest Chips */}
              <div className="cursor-pointer group flex h-14 items-center justify-center gap-x-3 rounded-full bg-primary text-white px-8 transition-all">
                <span className="material-symbols-outlined text-xl">palette</span>
                <p className="text-base font-bold">UI/UX</p>
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
              </div>
              <div className="cursor-pointer group flex h-14 items-center justify-center gap-x-3 rounded-full bg-white/80 dark:bg-white/5 border border-primary/20 hover:border-primary px-8 transition-all">
                <span className="material-symbols-outlined text-xl text-primary">
                  terminal
                </span>
                <p className="text-[#111318] dark:text-white text-base font-bold leading-normal">
                  Coding
                </p>
              </div>
              <div className="cursor-pointer group flex h-14 items-center justify-center gap-x-3 rounded-full bg-white/80 dark:bg-white/5 border border-primary/20 hover:border-primary px-8 transition-all">
                <span className="material-symbols-outlined text-xl text-primary">
                  music_note
                </span>
                <p className="text-[#111318] dark:text-white text-base font-bold leading-normal">
                  K-Pop
                </p>
              </div>
              <div className="cursor-pointer group flex h-14 items-center justify-center gap-x-3 rounded-full bg-primary text-white px-8 transition-all shadow-lg">
                <span className="material-symbols-outlined text-xl">
                  psychology
                </span>
                <p className="text-base font-bold">AI</p>
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
              </div>
              <div className="cursor-pointer group flex h-14 items-center justify-center gap-x-3 rounded-full bg-white/80 dark:bg-white/5 border border-primary/20 hover:border-primary px-8 transition-all">
                <span className="material-symbols-outlined text-xl text-primary">
                  payments
                </span>
                <p className="text-[#111318] dark:text-white text-base font-bold leading-normal">
                  Finance
                </p>
              </div>
              <div className="cursor-pointer group flex h-14 items-center justify-center gap-x-3 rounded-full bg-white/80 dark:bg-white/5 border border-primary/20 hover:border-primary px-8 transition-all">
                <span className="material-symbols-outlined text-xl text-primary">
                  draw
                </span>
                <p className="text-[#111318] dark:text-white text-base font-bold leading-normal">
                  Digital Art
                </p>
              </div>
              <div className="cursor-pointer group flex h-14 items-center justify-center gap-x-3 rounded-full bg-white/80 dark:bg-white/5 border border-primary/20 hover:border-primary px-8 transition-all">
                <span className="material-symbols-outlined text-xl text-primary">
                  eco
                </span>
                <p className="text-[#111318] dark:text-white text-base font-bold leading-normal">
                  Sustainability
                </p>
              </div>
              <div className="cursor-pointer group flex h-14 items-center justify-center gap-x-3 rounded-full bg-white/80 dark:bg-white/5 border border-primary/20 hover:border-primary px-8 transition-all">
                <span className="material-symbols-outlined text-xl text-primary">
                  sports_esports
                </span>
                <p className="text-[#111318] dark:text-white text-base font-bold leading-normal">
                  Gaming
                </p>
              </div>
            </div>

            <hr className="border-white/20" />

            {/* Step 2 Preview: Daily Goals */}
            <div>
              <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-6">
                Your Daily Goal 🎯
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-5 rounded-lg border-2 border-primary bg-white/40 dark:bg-white/5 p-6 cursor-pointer">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined !text-3xl">
                      bolt
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#111318] dark:text-white text-lg font-bold">
                      Quick Learner
                    </h4>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm">
                      15 mins/day - Keep it snappy!
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border-2 border-transparent hover:border-primary/30 bg-white/40 dark:bg-white/5 p-6 cursor-pointer transition-all">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined !text-3xl">
                      timer
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#111318] dark:text-white text-lg font-bold">
                      Deep Diver
                    </h4>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm">
                      1 hour/day - Level up fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action Area */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/20">
            <button
              onClick={() => navigate('/success')}
              className="text-[#616f89] dark:text-gray-400 font-bold hover:text-primary transition-colors"
            >
              Skip for now
            </button>
            <button
              onClick={() => navigate('/success')}
              className="glow-button flex items-center gap-2 min-w-[160px] cursor-pointer justify-center rounded-full h-14 px-8 bg-primary text-white text-lg font-extrabold leading-normal tracking-wide"
            >
              <span>Next step</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>

      {/* Bottom decoration */}
      <div className="fixed bottom-4 left-0 right-0 text-center opacity-50">
        <p className="text-xs dark:text-white font-medium uppercase tracking-[0.2em]">
          Crafted for the next generation of learners
        </p>
      </div>
    </div>
  );
};

export default InterestSelection;
