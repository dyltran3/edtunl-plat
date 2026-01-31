import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/interests');
      }
    });
  }, [navigate]);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
          }
        }
      });

      if (error) throw error;

      toast.success("Account created! Let's pick your interests.");
      navigate('/interests');
    } catch (error: any) {
      toast.error(error.message || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <div className="mesh-gradient min-h-screen relative flex flex-col font-display text-[#111318] dark:text-white transition-colors duration-300">
      {/* Top Navigation */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className="w-full px-8 py-6 flex items-center justify-between z-20"
      >
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/40 group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
          <h2 className="text-[#111318] dark:text-white text-xl font-extrabold tracking-tight">
            EdTunl Platform
          </h2>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all duration-300 text-[#111318] dark:text-white text-sm font-bold shadow-sm active:scale-95"
        >
          <span>Already a member? Sign In</span>
          <span className="material-symbols-outlined text-sm">login</span>
        </button>
      </motion.header>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Visuals */}
          <div className="relative hidden lg:flex flex-col items-center justify-center min-h-[500px]">
            {/* Decorative Elements */}
            <motion.div
              className="absolute top-10 left-10 floating"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="material-symbols-outlined text-pink-400 text-6xl opacity-60">
                cloud
              </span>
            </motion.div>
            <motion.div
              className="absolute bottom-10 right-20 floating"
              animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="material-symbols-outlined text-yellow-500 text-5xl opacity-60">
                grade
              </span>
            </motion.div>
            <motion.div
              className="absolute top-1/4 right-0 floating"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="material-symbols-outlined text-blue-400 text-7xl opacity-60">
                auto_awesome
              </span>
            </motion.div>
            
            {/* Hero Avatar with Pulse Effect */}
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="relative z-10 w-full max-w-md aspect-square bg-gradient-to-br from-primary/30 to-pink-200/40 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-8 border-white/30 backdrop-blur-sm"
              >
                <img
                  className="w-4/5 h-4/5 object-contain floating"
                  data-alt="A friendly 3D avatar waving with a bright smile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY9ZIQuLoin_kkUDM7ryuefCHsYs5eD03JOQLU-iTaw6wvrxa_VwCblwDdLn2Saw_iJjMLRHxrHi7nQk4SNARVVjCCXJW1gp-d7Wr4TREZG_x7aSpRtb1L8TkSO6aZLwfgCoWybB8SvGYPrWsdffhyOsMPwvwE83cO0_7J1TiHeugIbNGEPhG8ERAS_1pMmKs4JeeBETUFH5SPMZyiCQUvTdz7LTPPQDuX26TOHoLz9AnQodKqaxSZxJq6Ge4iG1r5EcOkkBvxhcE"
                  style={{ animationDuration: '4s' }}
                  alt="Friendly Avatar"
                />
              </motion.div>
              {/* Expanding Rings */}
              <motion.div 
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 border-4 border-primary/20 rounded-full"
              ></motion.div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, type: 'spring' }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-black/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/20 z-20 whitespace-nowrap"
              >
                <p className="text-primary font-black flex items-center gap-2">
                  <span className="material-symbols-outlined animate-bounce">waving_hand</span>
                  "Learn what you love!"
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Form with Staggered children */}
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="glass-panel w-full max-w-[520px] rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 size-48 bg-primary/10 blur-3xl rounded-full"></div>

              <motion.div variants={itemVariants} className="mb-10 text-center lg:text-left">
                <h1 className="text-3xl lg:text-5xl font-black text-[#111318] dark:text-white leading-tight mb-4 tracking-tight">
                  Join the EdTunl <br />
                  <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">Learning Squad</span>
                </h1>
                <p className="text-[#616f89] dark:text-gray-400 text-lg font-medium">
                  Unlock your potential with a community that speaks your language.
                </p>
              </motion.div>

              <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <motion.div variants={itemVariants}>
                  <label className="block text-[#111318] dark:text-white text-sm font-bold mb-2 ml-1">
                    Full Name
                  </label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#616f89] group-focus-within:text-primary transition-colors">
                      person
                    </span>
                    <input
                      {...register('fullName', { required: true })}
                      className={`w-full pl-12 pr-4 h-14 bg-white/50 dark:bg-background-dark/50 border ${errors.fullName ? 'border-red-500' : 'border-[#dbdfe6]/50'} dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-[#111318] dark:text-white font-medium`}
                      placeholder="Enter your full name"
                      type="text"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-[#111318] dark:text-white text-sm font-bold mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#616f89] group-focus-within:text-primary transition-colors">
                      mail
                    </span>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      className={`w-full pl-12 pr-4 h-14 bg-white/50 dark:bg-background-dark/50 border ${errors.email ? 'border-red-500' : 'border-[#dbdfe6]/50'} dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-[#111318] dark:text-white font-medium`}
                      placeholder="hello@genz.com"
                      type="email"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-[#111318] dark:text-white text-sm font-bold mb-2 ml-1">
                    Choose Password
                  </label>
                  <div className="relative flex items-center group">
                    <span className="material-symbols-outlined absolute left-4 text-[#616f89] group-focus-within:text-primary transition-colors">
                      lock
                    </span>
                    <input
                      {...register('password', { required: true, minLength: 6 })}
                      className={`w-full pl-12 pr-12 h-14 bg-white/50 dark:bg-background-dark/50 border ${errors.password ? 'border-red-500' : 'border-[#dbdfe6]/50'} dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-[#111318] dark:text-white font-medium`}
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                </motion.div>


                <motion.div variants={itemVariants} className="pt-4">
                  <button
                    disabled={loading}
                    className="group relative w-full h-14 bg-primary text-white rounded-full font-extrabold text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden disabled:opacity-70"
                    type="submit"
                  >
                    {loading ? (
                      <div className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span className="relative z-10">Start Your Journey</span>
                        <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  <p className="mt-6 text-center text-xs text-[#616f89] dark:text-gray-400 font-medium tracking-wide">
                    By joining, you agree to our <span className="text-primary cursor-pointer hover:underline">Terms</span> and <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>.
                  </p>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="p-8 text-center text-[#616f89] dark:text-gray-500 text-sm font-medium">
        <div className="flex justify-center gap-8 mb-6 flex-wrap">
          {['Explore', 'Courses', 'Mentorship', 'Support'].map(link => (
            <a key={link} className="hover:text-primary transition-colors relative group" href="#">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <p className="opacity-60 italic">© 2024 EdTunl Platform. Keep exploring, keep growing.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

