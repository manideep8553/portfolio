"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  ChevronDown,
  MapPin,
  GraduationCap,
  Calendar,
  Phone,
  Star,
  Briefcase,
  Award,
  Code2,
  Layers,
  Shield,
  Workflow,
  Video,
  Brain,
  ExternalLink,
  Trophy,
  Send,
  Sparkles,
  Terminal,
} from "lucide-react";
import { resume } from "@/lib/resume-data";
import { AuroraBackground } from "./components/effects/AuroraBackground";
import { FloatingParticles } from "./components/effects/FloatingParticles";

const typingWords = [
  "AI Engineer",
  "Spring Boot Developer",
  "MERN Stack Developer",
  "Machine Learning Enthusiast",
  "Problem Solver",
];

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return <>{count}{suffix}</>;
};

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 30);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % typingWords.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <main className="relative min-h-screen bg-bg-darkest">
      <AuroraBackground />
      <FloatingParticles />
      <div className="noise-overlay" />
      <div className="grid-pattern fixed inset-0 z-0" />

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden pt-20 z-10"
      >
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-light font-medium mb-4 tracking-[0.2em] uppercase text-sm"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.05] mb-6"
            >
              <span className="text-white">Hi, I&apos;m </span>
              <br />
              <span className="gradient-text">{resume.personal.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-16 mb-8"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-heading">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-[3px] h-8 md:h-10 bg-primary-light ml-1 align-middle"
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              {resume.personal.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 items-center mb-10"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-full font-medium text-lg transition-all duration-300 overflow-hidden inline-flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href={resume.personal.resumeFile}
                download
                className="px-8 py-4 border border-primary/50 text-white rounded-full font-medium text-lg hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/kalvamanideep", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/kalvamanideep", label: "LinkedIn" },
                { icon: Mail, href: "mailto:kalvamanideep@gmail.com", label: "Email" },
                { icon: Code2, href: "https://leetcode.com/u/Manideep_06/", label: "LeetCode" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-primary-light hover:border-primary/50 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative max-w-md mx-auto aspect-square">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 animate-pulse" />
                <div className="absolute inset-2 rounded-2xl glass-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-36 h-36 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                      <span className="text-6xl font-heading font-bold text-white">
                        {resume.personal.name.split(" ").map((w) => w[0]).join("")}
                      </span>
                    </div>
                    <p className="text-gray-400 text-base">{resume.personal.title}</p>
                  </div>
                </div>
                <motion.div
                  className="absolute -inset-2 rounded-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: "linear-gradient(90deg, #7C3AED, #06B6D4, #7C3AED)",
                    padding: "2px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                {resume.personal.aboutParagraph}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {resume.quickFacts.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <item.icon size={22} className="text-primary-light" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-white text-base font-semibold">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap size={22} className="text-primary-light" />
                  Education
                </h3>
                <div className="space-y-4">
                  {resume.education.map((edu, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute left-[-5px] top-1 w-[8px] h-[8px] rounded-full bg-primary" />
                      <p className="text-white font-semibold">{edu.degree}</p>
                      <p className="text-gray-400 text-sm">{edu.institution}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{edu.year} — {edu.score}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section-padding pt-0 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {resume.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon size={26} className="text-primary-light" />
                </div>
                <span className="text-3xl md:text-4xl font-heading font-bold gradient-text block">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resume.skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-xl font-heading font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <span className="text-primary-light text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {resume.projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className={`p-8 bg-gradient-to-br ${project.gradient}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <project.icon size={32} style={{ color: project.color }} />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <Github size={20} className="text-white" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-2">{project.subtitle}</p>
                  <p className="text-gray-500 text-xs mb-4">{project.date}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: project.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {resume.experience.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-10 pb-8"
              >
                <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />
                <div className="absolute left-0 top-1">
                  <div className="w-[22px] h-[22px] rounded-full bg-primary shadow-[0_0_15px_rgba(124,58,237,0.5)] border-4 border-bg-darkest" />
                </div>
                <div className="glass-card rounded-2xl p-8 ml-6">
                  <div className="flex items-center gap-2 text-primary-light text-sm mb-2">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-primary-light font-medium mb-2 flex items-center gap-2 text-base">
                    <Briefcase size={18} />
                    {exp.company}
                  </p>
                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </p>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section id="certifications" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
              <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resume.certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <Award size={28} style={{ color: cert.color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-gray-600 text-xs mt-1">{cert.date}</p>
                  </div>
                </div>
                <div
                  className="mt-4 h-1 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CODING PROFILES ===== */}
      <section id="coding" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
              Coding <span className="gradient-text">Profiles</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {resume.codingProfiles.map((profile, idx) => (
              <motion.a
                key={profile.platform}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-8 flex items-center gap-6 group"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${profile.color}15` }}
                >
                  <profile.icon size={36} style={{ color: profile.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">
                    {profile.platform}
                  </h3>
                  <p className="text-gray-400 text-base">@{profile.username}</p>
                  {"rating" in profile && profile.rating && (
                    <p className="text-primary-light font-medium mt-1">Rating: {profile.rating}</p>
                  )}
                  <p className="text-gray-500 text-sm mt-2">{profile.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-4xl font-heading font-bold gradient-text">{profile.problems}</div>
                  <div className="text-gray-500 text-sm">problems</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section id="achievements" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
              <span className="gradient-text">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {resume.stats.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={26} className="text-primary-light" />
                </div>
                <span className="text-3xl md:text-4xl font-heading font-bold gradient-text block">
                  <Counter value={item.value} suffix={item.suffix} />
                </span>
                <span className="text-gray-400 text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { icon: Mail, label: "Email", value: resume.contact.email, href: `mailto:${resume.contact.email}` },
                { icon: Phone, label: "Phone", value: resume.contact.phone, href: `tel:${resume.contact.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: "Location", value: resume.contact.location, href: "#" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kalvamanideep", href: resume.contact.linkedin },
                { icon: Github, label: "GitHub", value: "github.com/kalvamanideep", href: resume.contact.github },
              ].map((info, idx) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-5 glass-card rounded-xl group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <info.icon size={24} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{info.label}</p>
                    <p className="text-white text-base font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="glass-card rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-base"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors resize-none text-base"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-3xl font-heading font-bold gradient-text">
              {resume.personal.name.split(" ").map((w) => w[0]).join("")}
            </span>
            <p className="text-gray-500 text-sm text-center">
              Built with <span className="text-red-500">&hearts;</span> using React + Next.js + Framer Motion
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {resume.personal.name}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
