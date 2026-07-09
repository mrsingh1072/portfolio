import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "B.Tech Computer Science and Engineering",
      company: "SRM University AP",
      duration: "Present",
      description: "Pursuing a comprehensive curriculum with a strong focus on Software Development, Backend Systems, and Artificial Intelligence. Actively engaged in building scalable Full Stack Applications and innovative AI solutions.",
      skills: ["Software Development", "AI Projects", "Backend Development", "Full Stack Applications"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-background overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Career Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Education & Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic background and the key areas I've focused on during my journey.
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className="relative flex flex-col md:flex-row items-start md:justify-between group"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background border-2 border-primary -translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_15px_rgba(var(--primary),0.5)] group-hover:scale-125 transition-transform duration-300 z-10" />

                {/* Left Side (Date & Company for Desktop) */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 mb-4 md:mb-0 flex flex-col ${index % 2 === 0 ? "md:items-end md:text-right" : "md:order-last md:pl-12"}`}>
                  <div className="flex items-center gap-2 text-primary font-mono font-medium mb-2 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{exp.company}</h4>
                </div>

                {/* Right Side (Role & Details) */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? "md:order-last md:pl-12" : "md:text-right md:pr-12"}`}>
                  <div className={`bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 ${index % 2 !== 0 ? "md:items-end" : ""}`}>
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
