'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function PublicationsSection() {
  return (
    <section id="publications" className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Publications
        </h2>

        <article className="bg-gray-50 border border-gray-100 rounded-lg p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            Understanding DeepFool Adversarial Attack and Defense with Skater Interpretations
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            D. Ramesh, I. Sriram, <span className="font-medium">K. Sridhar</span>, S. D. Dunston, and M. A. R. V
          </p>
          <p className="text-gray-600 text-sm">
            2023 International Conference on Wireless Communications Signal Processing and Networking (WiSPNET),
            Chennai, India, 2023, pp. 1–5.
          </p>

          <div className="mt-3">
            <a
              href="https://ieeexplore.ieee.org/document/10134485"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              IEEE Xplore →
            </a>
          </div>

          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1 mt-4">
            <li>Improved ResNet50 robustness vs. adversarial attacks by 43% via adversarial training.</li>
            <li>Used Skater’s visual interpretation tools for clearer performance analysis.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Certifications
        </h2>

        <div className="bg-white border border-gray-100 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="text-gray-900 font-medium">
                Generative AI with Large Language Models — DeepLearning.AI &amp; AWS (Coursera)
              </p>
              <p className="text-gray-600 text-sm">August 2025</p>
            </div>
            <a
              className="text-blue-600 hover:text-blue-800 font-medium"
              href="https://coursera.org/verify/OF2Z3WK6W0GY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify →
            </a>
          </div>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1 mt-3">
            <li>LLM fundamentals, lifecycle, prompt engineering, fine-tuning, and deployment.</li>
            <li>Transformer architectures (BERT, GPT), pretraining, optimization, evaluation, and real-world deployment.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  // Works both locally and on GitHub Pages (project subpath)
  const resumeUrl = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/resume.pdf';

  return (
    <section id="resume" className="py-12 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
          View My Resume
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-700 transition"
          >
            Open Resume
          </a>
          <a
            href={resumeUrl}
            download
            className="inline-block rounded-md border border-gray-300 px-6 py-2 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
}

export default function SimplePortfolio() {
  return (
    <main className="min-h-screen bg-white pt-12">
      {/* Give sections ids to support hash links like #skills, #projects, etc. */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      {/* Publications */}
      <PublicationsSection />

      {/* Certifications — after Publications, before Projects */}
      <CertificationsSection />

      {/* Projects (uses color-coded tech pills inside the component) */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Resume buttons above Contact */}
      <ResumeSection />

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
