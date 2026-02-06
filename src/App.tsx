import { useState, useEffect } from 'react';
import { ExperienceItem } from './app/components/ExperienceItem';
import { ProjectCard } from './app/components/ProjectCard';
import { SocialLinks } from './app/components/SocialLinks';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900">
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        {/* Left Column - Fixed Navigation */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <img
              src="/public/me.png"
              alt="Portrait of Miguel Ruiz Licea"
              className="mb-6 h-20 w-20 rounded-full object-cover ring-2 ring-slate-700"
            />

            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Miguel Ruiz Licea
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Systems & ML Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I’m a CS Honors student at UC Irvine ('26) focused on bridging intelligence and infrastructure by building scalable, high-performance, systems.            
              </p>

            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {['about', 'experience', 'projects'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`group flex items-center py-3 ${
                        activeSection === section ? 'active' : ''
                      }`}
                    >
                      <span
                        className={`nav-indicator mr-4 h-px transition-all ${
                          activeSection === section
                            ? 'w-16 bg-slate-200'
                            : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                        }`}
                      />
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest ${
                          activeSection === section
                            ? 'text-slate-200'
                            : 'text-slate-500 group-hover:text-slate-200'
                        }`}
                      >
                        {section}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <SocialLinks />
        </header>

        {/* Right Column - Scrollable Content */}
        <main className="pt-24 lg:w-1/2 lg:py-24">

          {/* About Section */}
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                About
              </h2>
            </div>
            <div>
              <p className="mb-4">
I’m a CS Honors student at UC Irvine ('26) who enjoys building models, working on systems, and combining the two. I also like full-stack development and testing. My goal is to build technology that’s intelligent, robust, and scalable.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Experience
              </h2>
            </div>
            <div>
              <ol className="group/list">
                <li className="mb-12">
                  <ExperienceItem
                    dateRange="Jun 2025 — Sept 2025"
                    role="Software Engineering Intern"
                    company="Panasonic Avionics"
                    description="Engineered ingestion and query paths for a satellite telemetry analytics platform, designing S3 partitioning strategies and Athena schemas for 500GB+ of time-series data. Modernized legacy C++ test suites, increasing coverage from 13% to 35% using Jenkins and SonarQube."
                    technologies={['C/C++', 'AWS Athena/S3', 'Jenkins', 'SonarQube', 'GTest']}
                    link="https://www.panasonic.aero/"
                  />
                </li>
                <li className="mb-12">
                  <ExperienceItem
                    dateRange="Jan 2025 — Jun 2025"
                    role="Software Engineer Intern"
                    company="St. George & Carnegie"
                    description="Developed backend services and real-time bidding workflows for a medical procurement SaaS. Optimized P95 latency to <600ms through advanced caching and query tuning, and integrated Stripe-based subscription billing for multi-practice production traffic."
                    technologies={['Python', 'JavaScript', 'PostgreSQL', 'Stripe API', 'Redis']}
                    link="https://stgeorgecarnegie.com/"
                  />
                </li>
                <li className="mb-12">
                  <ExperienceItem
                    dateRange="Jan 2025 — Jun 2025"
                    role="Capstone Software Engineer"
                    company="Partner Valuation Advisors"
                    description="Architected a document processing platform using Retrieval-Augmented Generation (RAG) to automate data extraction from valuation reports. Implemented semantic search with ChromaDB vector indexing to reduce lookup latency and improve discovery across 500+ reports."
                    technologies={['Python', 'Next.js', 'ChromaDB', 'LLMs', 'Supabase']}
                    link="https://www.partnerval.com/"
                  />
                </li>
              </ol>

              <div className="mt-12">
                <a
                  className="inline-flex items-center font-medium leading-tight text-slate-200 group"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    View Full Resume
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Projects
              </h2>
            </div>
            <div>
              <ol className="group/list">
                <li className="mb-12">
                  <ProjectCard
                    title="Predictive L4 Load Balancer"
                    description="A high-performance L4 load balancer developed in Go that uses an XGBoost-based decision engine to replace static routing. It analyzes real-time backend telemetry from AWS CloudWatch to reduce average response times by 17% under heavy load."
                    technologies={['Go', 'AWS CloudWatch', 'Redis', 'XGBoost', 'PostgreSQL']}
                  />
                </li>
                <li className="mb-12">
                  <ProjectCard
                    title="Distributed IoT Security System"
                    description="A mesh network of ESP32 sensors utilizing multi-sensor fusion and a Random Forest classifier to detect intrusions. Achieved high reliability with fewer than 2 false alarms per week during a three-month live deployment."
                    technologies={['ESP32', 'Azure IoT', 'MQTT', 'Python', 'Scikit-learn']}
                  />
                </li>
                <li className="mb-12">
                  <ProjectCard
                    title="Hybrid Movie Recommender"
                    description="A deep learning recommendation pipeline using a Variational Autoencoder (VAE) for collaborative filtering. Integrated Thompson Sampling for probabilistic re-ranking and used K-Means/PCA to identify 18 distinct user segments."
                    technologies={['Python', 'PyTorch', 'NumPy', 'Scikit-learn']}
                  />
                </li>
              </ol>

              <div className="mt-12">
                <a
                  className="inline-flex items-center font-medium leading-tight text-slate-200 group"
                  href="/archive"
                >
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    View Full Project Archive
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p></p>
          </footer>

        </main>
      </div>
    </div>
  </div>
);
}
