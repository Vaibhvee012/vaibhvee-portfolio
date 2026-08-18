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
  Wallet,
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
  { title: "Languages", items: ["Java", "C++", "C", "Python", "JavaScript", "SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "MongoDB", "Docker"] },
  {
    title: "Skills",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
    ],
  },
  {
    title: "Concepts",
    items: [
      "Object-Oriented Programming",
      "Computer Networks",
      "Operating Systems",
      "Database Management Systems",
    ],
  },
];

const projects = [
  {
    icon: BrainCircuit,
    title: "Interviewly AI — AI Job Preparation Platform",
    blurb:
      "Production-ready full-stack GenAI platform built with React and Node.js to streamline job preparation — featuring JWT authentication, resume processing, job description analysis, skill-gap detection, AI-generated interview questions and ATS-optimised resume generation using Gemini AI and Puppeteer.",
    tags: ["React", "Node.js", "Gemini AI", "JWT"],
  },
  {
    icon: Wallet,
    title: "SpendSense — Personal Finance Intelligence System",
    blurb:
      "Full-stack personal finance platform built with the MERN stack to help users manage income and expenses, track transactions, analyse spending patterns and monitor their financial activity through an intuitive and responsive dashboard.",
    tags: ["MongoDB", "Express", "React", "Node"],
  },
  {
    icon: BrainCircuit,
    title: "Grade Change Intelligence in Paper Making",
    blurb:
      "Full-stack AI system using Python, Random Forest, FastAPI and React to predict Basis Weight deviations during paper grade transitions — with explainable recommendations, correlation analysis, interactive dashboards and operator feedback, reaching 95% prediction accuracy.",
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
              Computer Science Engineering student specialising in cloud computing and automation —
              building full-stack products with the MERN stack, Java and Python.
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
                { k: "2027", v: "B.Tech CSE — Cloud & Automation, VIT Bhopal" },
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
                <article className="group grid gap-6 rounded-2xl p-7 glass neon-card transition-all duration-500 hover:-translate-y-1.5 sm:grid-cols-[auto_1fr]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary/40 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_26px_-6px_var(--neon)]">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
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
                </article>
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
