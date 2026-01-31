import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

const interestsList = [
  { id: 'uiux', label: 'UI/UX', icon: 'palette' },
  { id: 'coding', label: 'Coding', icon: 'terminal' },
  { id: 'kpop', label: 'K-Pop', icon: 'music_note' },
  { id: 'ai', label: 'AI', icon: 'psychology' },
  { id: 'finance', label: 'Finance', icon: 'payments' },
  { id: 'art', label: 'Digital Art', icon: 'draw' },
  { id: 'eco', label: 'Sustainability', icon: 'eco' },
  { id: 'gaming', label: 'Gaming', icon: 'sports_esports' },
];

const InterestSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(['uiux', 'ai']); // Default selections matching original static
  const [goal, setGoal] = useState<string>('quick');

  const toggleInterest = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (selected.length < 3) {
      toast.error('Please select at least 3 interests!');
      return;
    }
    localStorage.setItem('user_interests', JSON.stringify(selected));
    localStorage.setItem('user_goal', goal);
    toast.success('Awesome choices!');
    setTimeout(() => navigate('/success'), 800);
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Dynamic Pastel Background with Floating Elements */}
      <div className="fixed inset-0 -z-10 pastel-bg overflow-hidden">
        {/* Floating 3D-like elements (Simulated with Gradients/Icons) */}
        <motion.div 
          animate={{ y: [-20, 0, -20] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[15%] opacity-40"
        >
          <span className="material-symbols-outlined text-pink-400 !text-7xl">
            lightbulb
          </span>
        </motion.div>
        <motion.div
           animate={{ y: [0, -20, 0] }} 
           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[10%] opacity-40"
        >
          <span className="material-symbols-outlined text-blue-400 !text-8xl">
            rocket_launch
          </span>
        </motion.div>
        <motion.div
           animate={{ y: [-15, 5, -15] }} 
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[60%] left-[5%] opacity-30"
        >
          <span className="material-symbols-outlined text-purple-400 !text-6xl">
            favorite
          </span>
        </motion.div>
        <motion.div
           animate={{ y: [0, -25, 0] }} 
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[20%] right-[20%] opacity-30"
        >
          <span className="material-symbols-outlined text-yellow-400 !text-5xl">
            star
          </span>
        </motion.div>
      </div>

      {/* Top Navigation */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#111318] dark:text-white tracking-tight">
            GenZ Learning
          </h1>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-2 rounded-full border-2 border-primary/20 bg-white/50 dark:bg-white/10 dark:text-white font-bold text-sm hover:bg-white dark:hover:bg-white/20 transition-all"
        >
          Sign In
        </button>
      </motion.header>

      <main className="relative z-10 flex items-center justify-center px-4 py-10 min-h-[calc(100vh-100px)]">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card w-full max-w-[900px] rounded-lg shadow-2xl p-8 md:p-12"
        >
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
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '33%' }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-primary h-full rounded-full"
              ></motion.div>
            </div>
            <p className="text-[#616f89] dark:text-gray-400 text-base">
              What sparks your curiosity? Choose at least three to get started ✨
            </p>
          </div>

          {/* Content Area: Step 1 Interests */}
          <div className="space-y-12">
            <div className="flex flex-wrap gap-4">
              {/* Interest Chips */}
              {interestsList.map((item) => {
                const isSelected = selected.includes(item.id);
                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleInterest(item.id)}
                    className={twMerge(
                      "cursor-pointer group flex h-14 items-center justify-center gap-x-3 rounded-full px-8 transition-all border font-bold text-base",
                      isSelected
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                        : "bg-white/80 dark:bg-white/5 border-primary/20 hover:border-primary text-[#111318] dark:text-white"
                    )}
                  >
                    <span className={twMerge("material-symbols-outlined text-xl", !isSelected && "text-primary")}>
                      {item.icon}
                    </span>
                    <p>{item.label}</p>
                    {isSelected && (
                      <span className="material-symbols-outlined text-sm">
                        check_circle
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <hr className="border-white/20" />

            {/* Step 2 Preview: Daily Goals */}
            <div>
              <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-6">
                Your Daily Goal 🎯
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div 
                  onClick={() => setGoal('quick')}
                  whileHover={{ scale: 1.02 }}
                  className={twMerge(
                    "flex items-center gap-5 rounded-lg border-2 p-6 cursor-pointer transition-all",
                    goal === 'quick' 
                      ? "border-primary bg-white/60 dark:bg-white/10 shadow-md" 
                      : "border-transparent hover:border-primary/30 bg-white/40 dark:bg-white/5"
                  )}
                >
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
                </motion.div>

                <motion.div 
                  onClick={() => setGoal('deep')}
                  whileHover={{ scale: 1.02 }}
                  className={twMerge(
                    "flex items-center gap-5 rounded-lg border-2 p-6 cursor-pointer transition-all",
                    goal === 'deep' 
                      ? "border-primary bg-white/60 dark:bg-white/10 shadow-md" 
                      : "border-transparent hover:border-primary/30 bg-white/40 dark:bg-white/5"
                  )}
                >
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
                </motion.div>
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
              onClick={handleNext}
              className="glow-button flex items-center gap-2 min-w-[160px] cursor-pointer justify-center rounded-full h-14 px-8 bg-primary text-white text-lg font-extrabold leading-normal tracking-wide shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all"
            >
              <span>Next step</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </motion.div>
      </main>

      {/* Bottom decoration */}
      <div className="fixed bottom-4 left-0 right-0 text-center opacity-50 pointer-events-none">
        <p className="text-xs dark:text-white font-medium uppercase tracking-[0.2em]">
          Crafted for the next generation of learners
        </p>
      </div>
    </div>
  );
};

export default InterestSelection;
