import React, { useState, useEffect } from 'react';
import { BookOpen, MapPin, Compass, Sparkles, GraduationCap, Code2, Cpu, Rocket, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <motion.div
          animate={{
            x: mousePosition.x ? mousePosition.x / 40 : 0,
            y: mousePosition.y ? mousePosition.y / 40 : 0,
          }}
          transition={{ type: 'spring', stiffness: 40, damping: 18 }}
          className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[15%] w-[42rem] h-[42rem] bg-indigo-500/10 rounded-full blur-[128px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[8%] right-[8%] w-[36rem] h-[36rem] bg-fuchsia-500/10 rounded-full blur-[128px]" 
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center md:items-start mb-16 md:mb-24 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <BookOpen className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-cyan-100">A quick intro</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-white"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300">Me.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-400"
          >
            I like building things that feel sharp, useful, and polished. My focus is on full-stack systems, backend logic, and AI-driven products that solve real problems without feeling overdesigned.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20 hover:bg-white/[0.05]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="flex items-start gap-5 relative z-10">
                <div className="hidden sm:flex mt-1 w-14 h-14 rounded-2xl bg-cyan-500/10 items-center justify-center shrink-0 border border-cyan-500/20">
                  <User className="h-6 w-6 text-cyan-300" />
                </div>
                <div className="space-y-5">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-200/80">Who I am</p>
                    <p className="text-2xl md:text-3xl leading-snug text-white font-semibold max-w-2xl">
                      I’m Saurabh Kumar, a Computer Science student at SRM University AP.
                    </p>
                  </div>
                  <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-300 font-light max-w-3xl">
                    <p>
                      I care about clean interfaces, reliable systems, and products that feel smooth from the first click.
                    </p>
                    <p>
                      The work I enjoy most sits between frontend polish, backend structure, and AI features that add real value instead of noise.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {['Full-stack thinking', 'Practical AI', 'Scalable backends', 'Polished UI'].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 md:p-10 backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="hidden sm:flex mt-1 w-12 h-12 rounded-2xl bg-fuchsia-500/10 items-center justify-center shrink-0 border border-fuchsia-500/20">
                  <Code2 className="h-5 w-5 text-fuchsia-300" />
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold tracking-[0.25em] uppercase text-fuchsia-200/80">How I build</p>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light">
                    My approach is simple: keep the product clear, keep the code maintainable, and make the experience feel intentional. I like working across frontend, backend architecture, databases, and AI features while continuously leveling up the craft.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 md:p-10 backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="flex items-start gap-6 relative z-10">
                <div className="hidden sm:flex mt-1 w-12 h-12 rounded-2xl bg-rose-500/10 items-center justify-center shrink-0 border border-rose-500/20">
                  <Rocket className="h-5 w-5 text-rose-300" />
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold tracking-[0.25em] uppercase text-rose-200/80">What I’m building toward</p>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light">
                    Through my projects, I’ve explored full-stack development, machine learning, and Generative AI. The goal is always the same: build something practical, refined, and genuinely useful.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="sticky top-32"
            >
              <div className="relative group rounded-[2rem]">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 via-indigo-500 to-fuchsia-500 rounded-[2rem] opacity-20 group-hover:opacity-40 transition duration-1000 blur-sm" />

                <div className="relative bg-[#0a0a0a]/85 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl h-full">
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                        <GraduationCap className="h-4 w-4 text-cyan-300" />
                      </div>
                      <h4 className="text-sm font-semibold tracking-[0.35em] text-gray-400 uppercase">Education</h4>
                    </div>
                    
                    <div className="space-y-5 ml-11">
                      <div>
                        <p className="text-white font-medium text-lg leading-snug">B.Tech Computer Science and Engineering</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">University</p>
                        <p className="text-gray-300 font-medium">SRM University AP</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                        <p className="text-gray-300 font-medium flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-cyan-300" />
                          Vijayawada, Andhra Pradesh
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-xl bg-fuchsia-500/10 flex items-center justify-center border border-fuchsia-500/20">
                        <Compass className="h-4 w-4 text-fuchsia-300" />
                      </div>
                      <h4 className="text-sm font-semibold tracking-[0.35em] text-gray-400 uppercase">Currently Interested In</h4>
                    </div>

                    <ul className="space-y-4 ml-11">
                      {["Full Stack Development", "Backend Engineering", "Artificial Intelligence"].map((item, index) => (
                        <li key={index} className="flex items-center gap-4 group/item cursor-default">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover/item:bg-cyan-300 transition-colors duration-300" />
                          <span className="text-gray-400 group-hover/item:text-gray-200 font-medium transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gray-400">Style</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-300">
                      I like sharp contrast, calm spacing, and details that make the page feel intentional rather than generic.
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
