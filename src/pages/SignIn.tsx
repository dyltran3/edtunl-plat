import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

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

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-background-light-alt dark:bg-background-dark-alt min-h-screen flex flex-col font-spline overflow-x-hidden text-[#141118] dark:text-white relative">
      <div className="fixed inset-0 pastel-mesh -z-10"></div>

      {/* Floating 3D Icons Emulation */}
      <div className="fixed inset-0 pointer-events-none -z-5 overflow-hidden">
        <div
          className="absolute top-[15%] left-[10%] opacity-40 floating-icon text-primary-purple/40 text-8xl material-symbols-outlined select-none"
          style={{ transform: 'rotate(-15deg)' }}
        >
          school
        </div>
        <div
          className="absolute top-[60%] left-[5%] opacity-30 floating-icon text-primary-purple/30 text-7xl material-symbols-outlined select-none"
          style={{ transform: 'rotate(20deg)' }}
        >
          edit
        </div>
        <div
          className="absolute top-[20%] right-[12%] opacity-40 floating-icon text-primary-purple/40 text-9xl material-symbols-outlined select-none"
          style={{ transform: 'rotate(10deg)' }}
        >
          lightbulb
        </div>
        <div
          className="absolute bottom-[10%] right-[15%] opacity-30 floating-icon text-primary-purple/30 text-8xl material-symbols-outlined select-none"
          style={{ transform: 'rotate(-25deg)' }}
        >
          rocket_launch
        </div>
      </div>

      <header className="w-full flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-3 text-primary-purple">
          <div className="size-8 flex items-center justify-center bg-primary-purple rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">
              auto_awesome
            </span>
          </div>
          <h2 className="text-[#141118] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            GenZ Portal
          </h2>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-9">
            <a
              className="text-[#141118] dark:text-white/80 text-sm font-medium hover:text-primary-purple transition-colors"
              href="#"
            >
              Explore
            </a>
            <a
              className="text-[#141118] dark:text-white/80 text-sm font-medium hover:text-primary-purple transition-colors"
              href="#"
            >
              Community
            </a>
            <a
              className="text-[#141118] dark:text-white/80 text-sm font-medium hover:text-primary-purple transition-colors"
              href="#"
            >
              Resources
            </a>
          </div>
          <button
            onClick={() => navigate('/interests')}
            className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-primary-purple text-white text-sm font-bold shadow-lg shadow-primary-purple/20 hover:scale-105 transition-transform"
          >
            Join the Squad
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 relative">
        <div className="glass-card-strong w-full max-w-[480px] p-8 md:p-12 rounded-xl shadow-2xl flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-[#141118] dark:text-white tracking-tight text-[36px] font-bold leading-tight mb-2">
              Welcome Back, Scholar
            </h1>
            <p className="text-[#756189] dark:text-white/60 text-base">
              Your journey to greatness continues here.
            </p>
          </div>
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/success');
            }}
          >
            <div className="flex flex-col gap-2">
              <label className="flex flex-col w-full">
                <p className="text-[#141118] dark:text-white/90 text-sm font-semibold pb-2 px-1">
                  Username or Email
                </p>
                <input
                  className="form-input flex w-full rounded-xl text-[#141118] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary-purple/50 border border-[#e0dbe6] dark:border-white/10 bg-white/70 dark:bg-white/5 h-14 placeholder:text-[#756189]/50 p-[15px] text-base font-normal transition-all"
                  placeholder="Enter your email"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex flex-col w-full">
                <p className="text-[#141118] dark:text-white/90 text-sm font-semibold pb-2 px-1">
                  Password
                </p>
                <div className="flex w-full items-stretch relative">
                  <input
                    className="form-input flex w-full rounded-xl text-[#141118] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary-purple/50 border border-[#e0dbe6] dark:border-white/10 bg-white/70 dark:bg-white/5 h-14 placeholder:text-[#756189]/50 p-[15px] text-base font-normal transition-all"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#756189] dark:text-white/40 hover:text-primary-purple"
                    type="button"
                  >
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </label>
            </div>
            <div className="flex justify-between items-center px-1 -mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  className="rounded text-primary-purple focus:ring-primary-purple bg-white/50 dark:bg-black/20 border-gray-300 dark:border-white/10"
                  type="checkbox"
                />
                <span className="text-xs text-[#756189] dark:text-white/60 font-medium">
                  Keep me signed in
                </span>
              </label>
              <a
                className="text-primary-purple text-xs font-bold hover:underline"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <button className="w-full glow-btn bg-gradient-to-r from-primary-purple to-[#a855f7] text-white h-14 rounded-full font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all">
              Sign In
            </button>
          </form>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#e0dbe6] dark:bg-white/10"></div>
              <span className="text-[#756189] dark:text-white/40 text-xs font-bold uppercase tracking-wider">
                or continue with
              </span>
              <div className="h-px flex-1 bg-[#e0dbe6] dark:bg-white/10"></div>
            </div>
            <div className="flex justify-center gap-6">
              <button className="size-14 rounded-full border border-[#e0dbe6] dark:border-white/10 flex items-center justify-center bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm group">
                <img
                  alt="Google"
                  className="size-6 group-hover:scale-110 transition-transform"
                  data-alt="Google colorful logo icon"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2mNMnQk6hKgCrXhwOD7HDlNwTVIRpTBSINA4yqsbwymCzT2ePn8EbOzqvMf8BuASHvgYEjIAjk_SDebILAPQdCSceQhnD7t8SmpUaaJXMMx1rEmS1jOjiZqDlMleqNiZ952XfP_nRjO_zmCLcvXvzO9lQ6h5sXjurDb3n9SZFOlaPNdxC8F-Q7JWpS9BlvxE8ivXUPXoh55CoHctOKjw3wzHvohHfaGJ7NV0EQd7u393-dxvfkA1ggBteJAogIp8uoR0KDyd6ZMk"
                />
              </button>
              <button className="size-14 rounded-full border border-[#e0dbe6] dark:border-white/10 flex items-center justify-center bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm group">
                <svg
                  className="size-6 text-[#5865F2] fill-current group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"></path>
                </svg>
              </button>
              <button className="size-14 rounded-full border border-[#e0dbe6] dark:border-white/10 flex items-center justify-center bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm group">
                <svg
                  className="size-6 text-[#141118] dark:text-white fill-current group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.702z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="text-center pt-2">
            <p className="text-[#756189] dark:text-white/60 text-sm font-medium">
              New to the squad?
              <span
                className="text-primary-purple font-bold hover:underline ml-1 cursor-pointer"
                onClick={() => navigate('/interests')}
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </main>

      <footer className="py-8 px-10 text-center">
        <p className="text-[#756189] dark:text-white/40 text-xs font-medium">
          © 2024 GenZ Portal. Built for the next generation of thinkers.
        </p>
      </footer>
    </div>
  );
};

export default SignIn;
