import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { curriculumData } from '../data/curriculum';
import type { CurriculumItem } from '../data/curriculum';
import { twMerge } from 'tailwind-merge';
import { supabase } from '../lib/supabase';

const CourseViewer: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<CurriculumItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
        return;
      }

      const found = curriculumData.find((c) => c.id === courseId);
      if (found) {
        setCourse(found);
      }
      setLoading(false);
    };

    checkAuth();
  }, [courseId, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Course not found 🕵️‍♂️</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-primary text-white rounded-full font-bold"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-spline text-[#141118] dark:text-white">
      <header className="sticky top-0 z-50 glass-panel border-b border-primary/10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="material-symbols-outlined hover:text-primary transition-colors">
            arrow_back
          </button>
          <div>
            <h1 className="text-lg font-bold leading-none">{course.title}</h1>
            <p className="text-xs text-[#756189] dark:text-gray-400 font-medium mt-1">
              ID: <span className="text-primary">{course.id}</span> • Importance: 
              <span className={twMerge(
                "ml-1 font-bold",
                course.importance === 'H' ? "text-red-500" : "text-yellow-500"
              )}>
                {course.importance === 'H' ? 'High' : 'Medium'}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          <span className="material-symbols-outlined !text-sm text-primary">grade</span>
          <span className="text-xs font-bold text-primary">Grade {course.grade}</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.article 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none"
        >
          {/* Simple Markdown-like renderer using traditional elements */}
          <div className="space-y-8">
            {course.content.split('\n').map((line, i) => {
              if (line.startsWith('# ')) return <h1 key={i} className="text-4xl md:text-5xl font-extrabold text-[#111318] dark:text-white mb-6 tracking-tight">{line.replace('# ', '')}</h1>;
              if (line.startsWith('## ')) return <h2 key={i} className="text-3xl font-bold text-[#111318] dark:text-white mt-12 mb-4 border-b border-primary/10 pb-2">{line.replace('## ', '')}</h2>;
              if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-primary mt-8 mb-3">{line.replace('### ', '')}</h3>;
              if (line.startsWith('- ')) return <li key={i} className="ml-6 text-lg text-[#4a5568] dark:text-gray-300 list-disc">{line.replace('- ', '')}</li>;
              if (line.trim() === '') return <br key={i} />;
              return <p key={i} className="text-lg leading-relaxed text-[#4a5568] dark:text-gray-300">{line}</p>;
            })}
          </div>
        </motion.article>

        <section className="mt-16 pt-8 border-t border-primary/10 flex items-center justify-between">
            <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                <span className="material-symbols-outlined">chevron_left</span>
                Previous Lesson
            </button>
            <button className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Next Lesson
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
        </section>
      </main>
    </div>
  );
};

export default CourseViewer;
