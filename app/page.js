import Link from "next/link";
import Navbar from "./components/Navbar";
import { FiExternalLink, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Section = ({ id, title, children }) => (
  <section id={id} className="mb-12">
    <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const ExperienceItem = ({ role, org, period, tech, bullets }) => (
  <div className="mb-8">
    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
      <h3 className="font-medium text-fg">{role}</h3>
      <span className="text-sm text-muted">{period}</span>
    </div>
    <p className="text-sm text-muted mb-2">{org}</p>
    {tech && <p className="text-xs text-muted mb-2">{tech}</p>}
    <ul className="text-sm text-fg space-y-1 list-disc list-inside">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

const ProjectItem = ({ title, period, tech, desc, href, github }) => (
  <div className="mb-6">
    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
      {href ? (
        <Link href={href} className="font-medium text-fg hover:underline">
          {title}
        </Link>
      ) : (
        <span className="font-medium text-fg">{title}</span>
      )}
      <span className="text-sm text-muted">{period}</span>
    </div>
    {tech && <p className="text-xs text-muted mb-1">{tech}</p>}
    <p className="text-sm text-fg">{desc}</p>
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg mt-2"
      >
        <FiGithub size={14} /> GitHub
      </a>
    )}
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-readable mx-auto px-5 py-12 sm:py-16">
        <header className="mb-12">
          <h1 className="text-2xl font-semibold text-fg mb-1">
            Thomas Cormican
          </h1>
          <p className="text-muted">
            B.Sc Computer Science, Maynooth University.
          </p>
        </header>

        <Section id="about" title="About">
          <p className="text-fg leading-relaxed">
            Computer Science student at Maynooth University with a focus on
            software development and practical application. I work on academic
            tooling, contribute to open source, and tutor at the Computer
            Science Centre.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <ExperienceItem
            role="IT Services Computer Assistant"
            org="Maynooth University"
            period="2024 – Present"
            tech="Windows, macOS, Ivanti, Pubble"
            bullets={[
              "Frontline support for hardware, software, and network issues.",
              "Troubleshoot and maintain computing infrastructure.",
              "Manage support tickets through Ivanti and Pubble.",
            ]}
          />
          <ExperienceItem
            role="Tutor"
            org="Computer Science Centre"
            period="2024 – Present"
            tech="Java, Python, HTML/CSS"
            bullets={[
              "Mentor learners in programming fundamentals.",
              "Foster a creative and collaborative learning environment.",
              "Provide individualized support on coding projects and course work.",
            ]}
          />
        </Section>

        <Section id="projects" title="Projects">
          <ProjectItem
            title="CSPrime"
            period="Jan 2025 – Present"
            tech="React, JavaScript, Git"
            desc="Academic visualization tool for the Computer Science curriculum. Implementing UI improvements and optimizing data visualization for module interdependencies."
            github="https://github.com/tomoige/csprime"
            href="https://csprime.org/"
          />
          <ProjectItem
            title="DiffEdit reimplementation"
            period="2024"
            tech="Python, deep learning"
            desc="Reimplementation of the DiffEdit paper for semantic image editing using CLIP and Stable Diffusion."
            href="/blog/0"
          />
          <ProjectItem
            title="Merge"
            period="—"
            desc="Wordle-inspired word puzzle game built with React."
            href="https://merge-e2d8c.web.app/"
            github="https://github.com/tomoige/merge"
          />
          <ProjectItem
            title="Multitimer95"
            period="—"
            desc="Windows 95–inspired multi-timer web app."
            href="https://multitimer95.vercel.app/"
            github="https://github.com/tomoige/multitimer95"
          />
          <ProjectItem
            title="This site"
            period="—"
            desc="Portfolio and blog."
            github="https://github.com/tomoige/personal-site"
          />
        </Section>

        <Section id="education" title="Education">
          <div className="mb-6">
            <h3 className="font-medium text-fg">B.Sc Computer Science</h3>
            <p className="text-sm text-muted">
              Maynooth University · Graduating 2028
            </p>
            <p className="text-xs text-muted mt-1">
              Current grade average: 98%
            </p>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-muted text-xs uppercase tracking-wider mb-2">
                Languages
              </p>
              <p className="text-fg">
                Java, Python, R, HTML, CSS, JavaScript, SQL, Bash
              </p>
            </div>
            <div>
              <p className="text-muted text-xs uppercase tracking-wider mb-2">
                Tools & technologies
              </p>
              <p className="text-fg">
                Git, Linux, TensorFlow, scikit-learn, pandas, NumPy, SEO tools
              </p>
            </div>
          </div>
        </Section>

        <Section id="awards" title="Certifications & awards">
          <ul className="text-sm text-fg space-y-1">
            <li>1st Place — Maynooth CSC Coding Competition (2025)</li>
            <li>1st Place — Maynooth CSC Programathon (2025)</li>
            <li>Geary Prize for 1st Year Statistics (2025)</li>
            <li>
              <a
                href="https://www.credly.com/badges/d7e1cfdf-8f3e-4084-b96d-3ee145e94492/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                CompTIA A+{" "}
                <FiExternalLink size={12} className="shrink-0 opacity-70" />
              </a>{" "}
              ·{" "}
              <a
                href="https://www.credly.com/badges/b5a29352-8a87-4164-9e2e-d13ea1a4953e/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                CompTIA Network+{" "}
                <FiExternalLink size={12} className="shrink-0 opacity-70" />
              </a>
            </li>
            <li>
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/2GZ73ZHN2DWE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                Machine Learning Specialization (DeepLearning.AI){" "}
                <FiExternalLink size={12} className="shrink-0 opacity-70" />
              </a>
            </li>
            <li>
              <a
                href="https://www.credly.com/badges/d47d1b90-38b2-46e4-8647-52918b28b6f9/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                Microsoft Certified: Azure Fundamentals{" "}
                <FiExternalLink size={12} className="shrink-0 opacity-70" />
              </a>
            </li>
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:thomascormican123@gmail.com"
              className="inline-flex items-center gap-2 text-muted hover:text-fg"
            >
              <FiMail size={16} /> thomascormican123@gmail.com
            </a>
            <a
              href="https://github.com/tomoige"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-fg"
            >
              <FiGithub size={16} /> github.com/tomoige
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-cormican-82077b302/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-fg"
            >
              <FiLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </Section>
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Thomas Cormican
      </footer>
    </div>
  );
}
