import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowDown,
  FileText,
  BrainCircuit,
  Library,
  Briefcase,
  ShieldCheck,
  ShieldAlert,
  ScanSearch,
  Swords,
  UserSearch,
  Mic,
  Wallet,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import { GalaxySphere } from "@/components/GalaxySphere";
import { Reveal } from "@/components/Reveal";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhvee Prakash | Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Vaibhvee Prakash, a CSE student and full-stack developer building MERN, cloud and AI/ML projects.",
      },
      { property: "og:title", content: "Vaibhvee Prakash — Software Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Full-stack developer specialising in cloud computing and automation. Skills, projects, resume and links.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skillGroups = [
  { title: "Languages", items: ["Java", "C++", "C", "Python", "JavaScript", "TypeScript", "SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "ESLint", "Vercel", "Render"] },
  {
    title: "Skills",
    items: ["HTML", "CSS", "Tailwind CSS", "React.js", "Node.js", "Express.js", "REST APIs"],
  },
  { title: "Databases", items: ["MongoDB", "PostgreSQL", "Redis"] },
  {
    title: "AI / GenAI",
    items: ["Gemini API", "LangGraph", "LangChain", "RAG", "AI Agents"],
  },
  {
    title: "Concepts",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

const projects = [
  {
    icon: ShieldCheck,
    title: "CloudShield",
    link: "https://github.com/Vaibhvee012/CloudShield",
    blurb:
      "Cloud security posture management platform that monitors AWS resources, identifies security risks, evaluates cloud security posture and provides actionable recommendations to improve infrastructure security.",
    tags: ["AWS", "Node.js", "React", "PostgreSQL"],
  },
  {
    icon: Mic,
    title: "Interviewly AI",
    link: "https://interviewly-ai-zeta.vercel.app/",
    blurb:
      "AI-powered interview preparation platform that simulates technical interviews, generates personalized questions, evaluates responses and provides feedback to help users improve their interview performance.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Gemini API", "Puppeteer"],
  },
  {
    icon: ScanSearch,
    title: "CodeScribe",
    link: "https://code-scribe-ashen.vercel.app/",
    blurb:
      "AI-powered code analysis platform that reviews source code, identifies quality and security issues, and provides intelligent recommendations to help developers write cleaner and more reliable code.",
    tags: ["React", "Node.js", "Gemini", "MongoDB"],
  },
  {
    icon: ShieldAlert,
    title: "Kavach",
    link: "https://d29nfc5b7f05b1.cloudfront.net",
    blurb:
      "Cybersecurity platform designed to identify vulnerabilities, analyze application security risks and help users understand and strengthen their overall security posture.",
    tags: ["Python", "FastAPI", "React", "Security"],
  },
  {
    icon: Swords,
    title: "AI Battle Arena",
    link: "https://github.com/Vaibhvee012/AI-Battle-Arena",
    blurb:
      "Multi-model AI platform that allows users to experiment with different AI models and agentic workflows, compare their responses and explore collaborative AI problem-solving.",
    tags: ["Python", "LangGraph", "LLM", "Gemini", "Gorq", "Cohere"],
  },
  {
    icon: Wallet,
    title: "SpendSense",
    link: "https://spendsense-zeta.vercel.app/",
    blurb:
      "Personal finance management platform that helps users track income and expenses, set budgets, manage recurring transactions and visualize their spending patterns through an interactive dashboard.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Chart.js"],
  },
  {
    icon: UserSearch,
    title: "AI-Powered Resume Screening & Job Recommendation System",
    link: "https://github.com/Vaibhvee012/Resume-Screening-Job-Recommender",
    blurb:
      "AI-driven recruitment platform that analyzes resumes, evaluates candidate profiles against job requirements and recommends relevant job opportunities based on skills and qualifications.",
    tags: ["Python", "ML", "React", "AI"],
  },
  {
    icon: BrainCircuit,
    title: "Grade Change Intelligence in Paper Making",
    link: "https://grade-change-intelligence-two.vercel.app/",
    blurb:
      "AI-based industrial system that predicts basis weight deviations during paper grade transitions and provides insights and recommendations to help operators make better process decisions.",
    tags: ["Python", "FastAPI", "React", "ML"],
  },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function Index() {
  const progress = useScrollProgress();

  return (
    <main className="relative">
      <div
        className="fixed left-0 top-0 z-50 h-0.5 origin-left bg-[image:var(--gradient-neon)]"
        style={{ width: "100%", transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      {/* Hero with scroll-driven sphere */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <GalaxySphere />
        </div>

        <div className="relative z-10 text-center">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground glass">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-glow" />
              Bangalore, India
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-5xl font-bold leading-[1.05] neon-title sm:text-7xl md:text-8xl">
              <span className="text-neon">Vaibhvee</span>
              <br />
              Prakash
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
              Aspiring Software Engineer and Developer with a strong foundation in Computer Science and 
              a passion for building reliable, secure and user-focused applications. 
              I enjoy turning complex problems into clean, scalable solutions and 
              I am eager to grow through real-world engineering challenges.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={resumeAsset.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-full border border-primary/50 px-7 py-3 text-sm font-medium glass neon-btn transition-all duration-500 hover:-translate-y-1"
              >
                <FileText className="h-4 w-4 text-neon-violet transition-transform duration-500 group-hover:-rotate-6" />
                View Resume
              </a>
              <a
                href="#connect"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm text-muted-foreground transition-all duration-500 hover:-translate-y-1 hover:text-foreground"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
          <Reveal delay={460}>
            <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <ArrowDown className="h-4 w-4 animate-float-slow" />
              scroll to orbit
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="relative px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">01 — Skills</p>
            <h2 className="mt-4 text-4xl font-semibold neon-title sm:text-5xl">
              The stack I <span className="text-neon">orbit</span> in
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 110}>
                <div className="group h-full rounded-2xl p-6 glass neon-card transition-transform duration-500 hover:-translate-y-1.5">
                  <h3 className="text-lg font-semibold text-foreground">
                    <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-neon-violet" />
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-all duration-300 hover:border-neon-violet hover:text-foreground hover:shadow-[0_0_18px_-4px_var(--neon-violet)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                { k: "2027", v: "B.Tech CSE — Cloud Computing & Automation, Vellore Institute of Technology" },
                { k: "3+", v: "Certifications: IBM, Google IT, Gen AI" },
                { k: "MERN", v: "Full-stack internship experience" },
              ].map((stat) => (
                <div key={stat.k} className="rounded-2xl p-6 glass neon-card">
                  <p className="font-display text-3xl font-bold text-neon">{stat.k}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="relative px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              02 — Projects
            </p>
            <h2 className="mt-4 text-4xl font-semibold neon-title sm:text-5xl">
              Things I have <span className="text-neon">built</span>
            </h2>
          </Reveal>

          <div className="mt-14 space-y-6">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 130}>
                <a
  href={project.link}
  target="_blank"
  rel="noreferrer noopener"
  aria-label={`Open ${project.title}`}
  className="group relative grid cursor-pointer gap-6 rounded-2xl p-7 glass neon-card transition-all duration-500 hover:-translate-y-1.5 sm:grid-cols-[auto_1fr]"
>
  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary/40 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_26px_-6px_var(--neon)]">
    <project.icon className="h-6 w-6 text-primary" />
  </div>
  <div>
    <h3 className="pr-14 text-xl font-semibold">{project.title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
      {project.blurb}
    </p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
  <span className="absolute right-5 top-5 inline-flex items-center gap-1 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
  {project.link.includes("github.com") ? (
    <Github className="h-4 w-4" />
  ) : (
    <Globe className="h-4 w-4" />
  )}
  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
</span>
</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / links */}
      <section id="connect" className="relative flex min-h-screen items-center px-6 py-32">
        <div className="mx-auto w-full max-w-3xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">03 — Connect</p>
            <h2 className="mt-4 text-4xl font-semibold neon-title sm:text-6xl">
              Let&apos;s build something <span className="text-neon">stellar</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/Vaibhvee012"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium glass neon-btn transition-all duration-500 hover:-translate-y-1 sm:w-auto"
              >
                <Github className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
                github.com/Vaibhvee012
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhvee-prakash-901ba7289"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium glass neon-btn transition-all duration-500 hover:-translate-y-1 sm:w-auto"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
                LinkedIn
              </a>
             <a
             href="/Resume_VAIBHVEE_PRAKASH.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="group inline-flex items-center gap-3 rounded-full border border-primary/50 px-8 py-4 text-sm font-medium glass neon-btn transition-all duration-500 hover:-translate-y-1"
             >
              <FileText className="h-5 w-5 text-neon-violet transition-transform duration-500 group-hover:-rotate-6" />
              Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <a
                href="mailto:vaibhveeprakash25@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> vaibhveeprakash25@gmail.com
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Bangalore, India
              </span>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <p className="mt-20 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Vaibhvee Prakash
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
