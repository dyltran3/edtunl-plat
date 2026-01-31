import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const OnboardingSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen text-[#111318] dark:text-white transition-colors duration-300">
      <div className="relative w-full min-h-screen flex flex-col overflow-x-hidden">
        {/* Top Navigation */}
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between px-8 py-4 lg:px-20 border-b border-solid border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-background-dark/50 backdrop-blur-md z-50"
        >
          <div className="flex items-center gap-4">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">school</span>
            </div>
            <h2 className="text-lg font-extrabold leading-tight tracking-tight">
              EdTunl Platform
            </h2>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="#"
              >
                Explore
              </a>
              <a
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="#"
              >
                Community
              </a>
              <a
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="#"
              >
                My Profile
              </a>
            </nav>
            <div className="bg-primary/10 rounded-full p-0.5 border-2 border-primary/20">
              <div
                className="bg-cover bg-no-repeat rounded-full size-9"
                data-alt="User avatar profile picture"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2JCsr2YgfLh8BJ1rBAn_9a8Z3egjHo1Qcpu5LnqZxpUAdrUycPgBJrnMQzi1p4il-BfwiT7tzMlMidCQw-Z8vhLBWZehaGRLFv0SBVHkvEFSGNehMgQ0H58RJb8VLpnEvRprQKNrgrnC4kl7uOpnaCUzwjj3aht60f6d7jCmQ0PvKZeJY73UBc47TEmPybUB9m2zMj2YPEf1oAIEWI19dyKVeKFmblPilwY52qlMGLO4oM6VL6r7YAeTH-kM2OGMlASb51H2GfhU")',
                }}
              ></div>
            </div>
          </div>
        </motion.header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0 sparkle-bg pointer-events-none opacity-50"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>

          <div className="max-w-5xl w-full flex flex-col items-center text-center z-10">
            {/* Mascot & Welcome Hero */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative mb-8 floating-bounce"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center p-8 border border-white dark:border-gray-700">
                <div
                  className="w-full h-full bg-center bg-contain bg-no-repeat"
                  data-alt="Cute 3D robot mascot holding a welcome sign"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRjj2PQtd-8h474FQyV-cF6rzZNEdaRX6m8CMZyw3wDNntCCmv0TLySIMXIJhcQtkbsOlr5uzEIofTMM0Q28V8f5KAZb06plfSSpHOCE0bcrBrriiYyGkvwZN5dYErAvxup1cwkVz1bWQZdxf4k5XpySyOuj95QlduSnnBWIoueilbOUpvc3cbinpu1p1hUMqgcSCgnqcasTZtjYdxjImlWrM1wGQHv3Jl7TdnpcYjAXt185RuBKyVcFHX_hdnz3dTSLwSW67k0vE")',
                  }}
                ></div>
              </div>
              {/* Decorative Confetti Circles */}
              <div className="absolute top-4 -right-4 size-6 rounded-full bg-pink-400 opacity-60"></div>
              <div className="absolute -top-6 left-12 size-4 rounded-full bg-yellow-400 opacity-60"></div>
              <div className="absolute bottom-10 -left-6 size-8 rounded-full bg-blue-400 opacity-60"></div>
              <div className="absolute bottom-0 right-4 size-5 rounded-full bg-green-400 opacity-60"></div>
            </motion.div>

            {/* Headline */}
            <div className="mb-2">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight pb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500"
              >
                You're All Set, Alex!
              </motion.h1>
            </div>

            {/* Body Text */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12"
            >
              Your learning universe is ready. Where do you want to start your
              journey today?
            </motion.p>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 mb-16">
              {/* Card 1: Explore */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 rounded-xl flex flex-col items-center group cursor-pointer transition-all duration-300"
              >
                <div className="size-16 rounded-full bg-blue-400/20 text-blue-500 flex items-center justify-center mb-6 ring-4 ring-blue-500/10 group-hover:ring-blue-500/30 transition-all">
                  <span className="material-symbols-outlined text-3xl font-bold">
                    explore
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Explore Courses</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Find your next passion project and learn something new.
                </p>
              </motion.div>
              {/* Card 2: Study Room */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 rounded-xl flex flex-col items-center group cursor-pointer transition-all duration-300 border-primary/30 border-2"
              >
                <div className="size-16 rounded-full bg-purple-400/20 text-purple-500 flex items-center justify-center mb-6 ring-4 ring-purple-500/10 group-hover:ring-purple-500/30 transition-all">
                  <span className="material-symbols-outlined text-3xl font-bold">
                    groups
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Join a Study Room</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Collaborate with peers in real-time and smash your goals.
                </p>
              </motion.div>
              {/* Card 3: Avatar */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 rounded-xl flex flex-col items-center group cursor-pointer transition-all duration-300"
              >
                <div className="size-16 rounded-full bg-pink-400/20 text-pink-500 flex items-center justify-center mb-6 ring-4 ring-pink-500/10 group-hover:ring-pink-500/30 transition-all">
                  <span className="material-symbols-outlined text-3xl font-bold">
                    face_6
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Customize Avatar</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Express yourself with a new look and unique gear.
                </p>
              </motion.div>
            </div>

            {/* Final CTA */}
            <div className="w-full flex justify-center pb-10">
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => navigate('/')}
                className="bg-primary hover:bg-primary/90 text-white font-extrabold text-xl py-5 px-16 rounded-full shadow-xl shadow-primary/30 transform transition active:scale-95 flex items-center gap-3"
              >
                Let's Go!
                <span className="material-symbols-outlined font-bold">
                  rocket_launch
                </span>
              </motion.button>
            </div>
          </div>
        </main>

        {/* Minimal Footer */}
        <footer className="px-8 py-6 text-center text-sm text-gray-400 border-t border-gray-100 dark:border-gray-900 bg-white/30 dark:bg-background-dark/30 backdrop-blur-sm">
          © 2024 EdTunl Platform • Made with 💖 for the next generation
        </footer>
      </div>
    </div>
  );
};

export default OnboardingSuccess;
