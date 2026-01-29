import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mesh-gradient min-h-screen relative flex flex-col font-display text-[#111318] dark:text-white transition-colors duration-300">
      {/* Top Navigation */}
      <header className="w-full px-8 py-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/40">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
          <h2 className="text-[#111318] dark:text-white text-xl font-extrabold tracking-tight">
            GenZ Learning
          </h2>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white transition-all duration-300 text-[#111318] dark:text-white text-sm font-bold shadow-sm"
        >
          <span>Already a member? Sign In</span>
          <span className="material-symbols-outlined text-sm">login</span>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Visuals */}
          <div className="relative hidden lg:flex flex-col items-center justify-center min-h-[500px]">
            {/* Decorative Elements */}
            <div
              className="absolute top-10 left-10 floating"
              style={{ animationDelay: '0s' }}
            >
              <span className="material-symbols-outlined text-pink-400 text-6xl opacity-60">
                cloud
              </span>
            </div>
            <div
              className="absolute bottom-10 right-20 floating"
              style={{ animationDelay: '2s' }}
            >
              <span className="material-symbols-outlined text-yellow-400 text-5xl opacity-60">
                grade
              </span>
            </div>
            <div
              className="absolute top-1/4 right-0 floating"
              style={{ animationDelay: '1s' }}
            >
              <span className="material-symbols-outlined text-blue-400 text-7xl opacity-60">
                wb_sunny
              </span>
            </div>
            {/* Hero Avatar */}
            <div className="relative z-10 w-full max-w-md aspect-square bg-gradient-to-br from-primary/20 to-pink-200/40 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-8 border-white/30">
              <img
                className="w-4/5 h-4/5 object-contain floating"
                data-alt="A friendly 3D avatar waving with a bright smile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY9ZIQuLoin_kkUDM7ryuefCHsYs5eD03JOQLU-iTaw6wvrxa_VwCblwDdLn2Saw_iJjMLRHxrHi7nQk4SNARVVjCCXJW1gp-d7Wr4TREZG_x7aSpRtb1L8TkSO6aZLwfgCoWybB8SvGYPrWsdffhyOsMPwvwE83cO0_7J1TiHeugIbNGEPhG8ERAS_1pMmKs4JeeBETUFH5SPMZyiCQUvTdz7LTPPQDuX26TOHoLz9AnQodKqaxSZxJq6Ge4iG1r5EcOkkBvxhcE"
                style={{ animationDuration: '4s' }}
                alt="Friendly Avatar"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-xl">
                <p className="text-primary font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">waving_hand</span>
                  "Hey! Let's study."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="glass-panel w-full max-w-[520px] rounded-xl p-8 lg:p-12 shadow-2xl">
              <div className="mb-10 text-center lg:text-left">
                <h1 className="text-3xl lg:text-5xl font-black text-[#111318] dark:text-white leading-tight mb-4">
                  Join the GenZ <br />
                  <span className="text-primary">Learning Journey</span>
                </h1>
                <p className="text-[#616f89] dark:text-gray-400 text-lg">
                  Unlock your potential with a community that speaks your language.
                </p>
              </div>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate('/interests');
                }}
              >
                {/* Full Name */}
                <div>
                  <label className="block text-[#111318] dark:text-white text-sm font-bold mb-2 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#616f89]">
                      person
                    </span>
                    <input
                      className="w-full pl-12 pr-4 h-14 bg-white/50 dark:bg-background-dark/50 border border-[#dbdfe6]/50 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-[#111318] dark:text-white"
                      placeholder="Enter your full name"
                      type="text"
                    />
                  </div>
                </div>
                {/* Email */}
                <div>
                  <label className="block text-[#111318] dark:text-white text-sm font-bold mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#616f89]">
                      mail
                    </span>
                    <input
                      className="w-full pl-12 pr-4 h-14 bg-white/50 dark:bg-background-dark/50 border border-[#dbdfe6]/50 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-[#111318] dark:text-white"
                      placeholder="hello@genz.com"
                      type="email"
                    />
                  </div>
                </div>
                {/* Password */}
                <div>
                  <label className="block text-[#111318] dark:text-white text-sm font-bold mb-2 ml-1">
                    Choose Password
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-4 text-[#616f89]">
                      lock
                    </span>
                    <input
                      className="w-full pl-12 pr-12 h-14 bg-white/50 dark:bg-background-dark/50 border border-[#dbdfe6]/50 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-[#111318] dark:text-white"
                      placeholder="Create a strong password"
                      type="password"
                    />
                    <span className="material-symbols-outlined absolute right-4 cursor-pointer text-[#616f89] hover:text-primary">
                      visibility
                    </span>
                  </div>
                </div>
                {/* Grade Selection */}
                <div>
                  <label className="block text-[#111318] dark:text-white text-sm font-bold mb-2 ml-1">
                    Select Your Grade
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <label className="cursor-pointer">
                      <input
                        defaultChecked
                        className="peer hidden"
                        name="grade"
                        type="radio"
                      />
                      <div className="px-5 py-2.5 rounded-full border border-[#dbdfe6] dark:border-white/10 bg-white/30 dark:bg-white/5 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all text-sm font-semibold">
                        Middle School
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        className="peer hidden"
                        name="grade"
                        type="radio"
                      />
                      <div className="px-5 py-2.5 rounded-full border border-[#dbdfe6] dark:border-white/10 bg-white/30 dark:bg-white/5 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all text-sm font-semibold">
                        High School
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        className="peer hidden"
                        name="grade"
                        type="radio"
                      />
                      <div className="px-5 py-2.5 rounded-full border border-[#dbdfe6] dark:border-white/10 bg-white/30 dark:bg-white/5 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all text-sm font-semibold">
                        University
                      </div>
                    </label>
                  </div>
                </div>
                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    className="group relative w-full h-14 bg-primary text-white rounded-full font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                    type="submit"
                  >
                    <span className="relative z-10">Start Your Journey</span>
                    <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">
                      rocket_launch
                    </span>
                    {/* Inner Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  <p className="mt-4 text-center text-xs text-[#616f89] dark:text-gray-400">
                    By joining, you agree to our Terms and Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      {/* Footer / Credits */}
      <footer className="p-8 text-center text-[#616f89] dark:text-gray-500 text-sm">
        <div className="flex justify-center gap-8 mb-4">
          <a className="hover:text-primary transition-colors" href="#">
            About Us
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Courses
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Mentorship
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Support
          </a>
        </div>
        <p>© 2024 GenZ Learning Journey. Keep exploring.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
