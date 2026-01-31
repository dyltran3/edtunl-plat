import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabase';
const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const icons = document.querySelectorAll('.floating-icon');
      const x = (window.innerWidth / 2 - e.pageX) / 40;
      const y = (window.innerHeight / 2 - e.pageY) / 40;

      icons.forEach((icon, index) => {
        const speed = (index + 1) * 0.5;
        (icon as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${(index % 2 === 0 ? -1 : 1) * 15}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;

      toast.success("Welcome back, Scholar!");
      setTimeout(() => navigate('/success'), 1000);
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'facebook') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.origin + '/success',
        },
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || `Failed to sign in with ${provider}`);
    }
  };

  return (
    <div className="bg-background-light-alt dark:bg-background-dark-alt min-h-screen flex flex-col font-spline overflow-x-hidden text-[#141118] dark:text-white relative">
      <div className="fixed inset-0 pastel-mesh -z-10"></div>

      {/* Floating 3D Icons Emulation with Framer Motion */}
      <div className="fixed inset-0 pointer-events-none -z-5 overflow-hidden">
        {[
          { icon: 'school', top: '15%', left: '10%', size: 'text-8xl', color: 'text-primary-purple/40', rotate: -15 },
          { icon: 'edit', top: '60%', left: '5%', size: 'text-7xl', color: 'text-primary-purple/30', rotate: 20 },
          { icon: 'lightbulb', top: '20%', right: '12%', size: 'text-9xl', color: 'text-primary-purple/40', rotate: 10 },
          { icon: 'rocket_launch', bottom: '10%', right: '15%', size: 'text-8xl', color: 'text-primary-purple/30', rotate: -25 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className={`absolute floating-icon ${item.top ? `top-[${item.top}]` : `bottom-[${item.bottom}]`} ${item.left ? `left-[${item.left}]` : `right-[${item.right}]`} ${item.color} ${item.size} material-symbols-outlined select-none`}
            style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right, transform: `rotate(${item.rotate}deg)` }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <header className="w-full flex items-center justify-between px-10 py-6">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-3 text-primary-purple"
        >
          <div className="size-8 flex items-center justify-center bg-primary-purple rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">auto_awesome</span>
          </div>
          <h2 className="text-[#141118] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            EdTunl Portal
          </h2>
        </motion.div>
        <div className="flex items-center gap-8">
          <motion.button
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => navigate('/interests')}
            className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-primary-purple text-white text-sm font-bold shadow-lg shadow-primary-purple/20 hover:scale-105 transition-transform"
          >
            Join the Squad
          </motion.button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 relative">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="glass-card-strong w-full max-w-[480px] p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col gap-8 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 size-48 bg-primary-purple/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 size-48 bg-primary-purple/10 blur-3xl rounded-full"></div>

          <div className="text-center relative z-10">
            <h1 className="text-[#141118] dark:text-white tracking-tight text-[36px] font-extrabold leading-tight mb-2">
              Welcome Back
            </h1>
            <p className="text-[#756189] dark:text-white/60 text-base font-medium">
              Your journey to greatness continues.
            </p>
          </div>

          <form
            className="flex flex-col gap-5 relative z-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label className="flex flex-col w-full">
                <p className="text-[#141118] dark:text-white/90 text-sm font-semibold pb-2 px-1">
                  Email Address
                </p>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                  })}
                  className={`form-input flex w-full rounded-xl text-[#141118] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary-purple/50 border ${errors.email ? 'border-red-500' : 'border-[#e0dbe6]'} dark:border-white/10 bg-white/70 dark:bg-white/5 h-14 placeholder:text-[#756189]/50 p-[15px] text-base font-normal transition-all`}
                  placeholder="name@example.com"
                  disabled={loading}
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 px-1">{(errors.email as any).message}</span>}
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex flex-col w-full">
                <p className="text-[#141118] dark:text-white/90 text-sm font-semibold pb-2 px-1">
                  Password
                </p>
                <div className="flex w-full items-stretch relative">
                  <input
                    {...register('password', { required: 'Password is required' })}
                    className={`form-input flex w-full rounded-xl text-[#141118] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary-purple/50 border ${errors.password ? 'border-red-500' : 'border-[#e0dbe6]'} dark:border-white/10 bg-white/70 dark:bg-white/5 h-14 placeholder:text-[#756189]/50 p-[15px] text-base font-normal transition-all`}
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    disabled={loading}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#756189] dark:text-white/40 hover:text-primary-purple transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
                {errors.password && <span className="text-red-500 text-xs mt-1 px-1">{(errors.password as any).message}</span>}
              </label>
            </div>
            <div className="flex justify-between items-center px-1 -mt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="rounded text-primary-purple focus:ring-primary-purple bg-white/50 dark:bg-black/20 border-gray-300 dark:border-white/10 transition-all"
                  type="checkbox"
                />
                <span className="text-xs text-[#756189] dark:text-white/60 font-medium group-hover:text-primary-purple transition-colors">
                  Keep me signed in
                </span>
              </label>
              <a className="text-primary-purple text-xs font-bold hover:underline" href="#">
                Forgot Password?
              </a>
            </div>
            <button 
              disabled={loading}
              className="w-full glow-btn bg-gradient-to-r from-primary-purple to-[#a855f7] text-white h-14 rounded-full font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="flex flex-col gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#e0dbe6] dark:bg-white/10"></div>
              <span className="text-[#756189] dark:text-white/40 text-xs font-bold uppercase tracking-wider">
                or continue with
              </span>
              <div className="h-px flex-1 bg-[#e0dbe6] dark:bg-white/10"></div>
            </div>
            <div className="flex justify-center gap-6">
              <button 
                onClick={() => handleOAuthLogin('google')}
                className="size-14 rounded-full border border-[#e0dbe6] dark:border-white/10 flex items-center justify-center bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm group hover:scale-110 active:scale-95"
              >
                <img
                  alt="Google"
                  className="size-6 transition-transform"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2mNMnQk6hKgCrXhwOD7HDlNwTVIRpTBSINA4yqsbwymCzT2ePn8EbOzqvMf8BuASHvgYEjIAjk_SDebILAPQdCSceQhnD7t8SmpUaaJXMMx1rEmS1jOjiZqDlMleqNiZ952XfP_nRjO_zmCLcvXvzO9lQ6h5sXjurDb3n9SZFOlaPNdxC8F-Q7JWpS9BlvxE8ivXUPXoh55CoHctOKjw3wzHvohHfaGJ7NV0EQd7u393-dxvfkA1ggBteJAogIp8uoR0KDyd6ZMk"
                />
              </button>
              <button 
                onClick={() => handleOAuthLogin('facebook')}
                className="size-14 rounded-full border border-[#e0dbe6] dark:border-white/10 flex items-center justify-center bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm group hover:scale-110 active:scale-95"
              >
                <svg className="size-6 text-[#1877F2] fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="text-center pt-2 relative z-10">
            <p className="text-[#756189] dark:text-white/60 text-sm font-medium">
              New to the squad?
              <button
                className="text-primary-purple font-bold hover:underline ml-1 cursor-pointer"
                onClick={() => navigate('/')}
              >
                Create an account
              </button>
            </p>
          </div>
        </motion.div>
      </main>

      <footer className="py-8 px-10 text-center">
        <p className="text-[#756189] dark:text-white/40 text-xs font-medium">
          © 2024 EdTunl Platform. Built for the next generation of thinkers.
        </p>
      </footer>
    </div>
  );
};

export default SignIn;

