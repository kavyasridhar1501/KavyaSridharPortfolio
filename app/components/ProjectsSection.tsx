import Link from "next/link";

type Project = {
  title: string;
  date: string;
  tech: string[];
  href: string;
};

// Assign soft colors by tech family
function getTechColor(tech: string): string {
  const name = tech.toLowerCase();
  if (["python", "tensorflow", "keras", "pytorch", "hugging face", "langchain", "llama 3-70b", "rag", "langgraph", "machine learning", "data analysis"].some((k) => name.includes(k))) {
    return "bg-green-100 text-green-800 border-green-200"; // ML/AI
  }
  if (["mysql", "postgresql", "neo4j", "spark", "hadoop", "amazon s3", "sql"].some((k) => name.includes(k))) {
    return "bg-orange-100 text-orange-800 border-orange-200"; // Data/DB
  }
  if (["html", "css", "javascript", "php"].some((k) => name.includes(k))) {
    return "bg-blue-100 text-blue-800 border-blue-200"; // Web
  }
  if (["opencv", "open3d", "colmap", "gaussian", "nerf"].some((k) => name.includes(k))) {
    return "bg-purple-100 text-purple-800 border-purple-200"; // CV/Graphics
  }
  if (["groq"].some((k) => name.includes(k))) {
    return "bg-pink-100 text-pink-800 border-pink-200"; // Tools
  }
  return "bg-gray-100 text-gray-700 border-gray-200"; // default
}

function githubOgFromUrl(url: string): string | undefined {
  try {
    const u = new URL(url);
    if (!u.hostname.includes("github.com")) return;
    const [owner, repo] = u.pathname.split("/").filter(Boolean);
    if (!owner || !repo) return;
    return `https://opengraph.githubassets.com/preview/${owner}/${repo}`;
  } catch {
    return;
  }
}

const projects: Project[] = [
  {
    title: "ChurnGuard — Churn Prediction Platform",
    date: "2024",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    href: "https://github.com/kavyasridhar1501/ChurnGuard-Churn-Prediction-Platform",
  },
  {
    title: "LegalInsight — Self-RAG Hallucination Detection",
    date: "2024",
    tech: ["RAG", "LangChain", "Python", "Hugging Face"],
    href: "https://github.com/kavyasridhar1501/LegalInsight-SelfRAG-HallucinationDetection",
  },
  {
    title: "Snap&Know — A Visual Product Discovery Assistant",
    date: "June 2025",
    tech: ["RAG", "LangChain", "LangGraph", "GROQ", "LLaMA 3-70B"],
    href: "https://github.com/kavyasridhar1501/SnapAndKnow",
  },
  {
    title: "NLA Vs SoTA Methods in 3D Reconstruction",
    date: "May 2024",
    tech: ["OpenCV", "Open3D", "Gaussian Splatting", "NeRF", "COLMAP"],
    href: "https://github.com/kavyasridhar1501/3D_Computer_Vision/tree/main",
  },
  {
    title: "Indian Sign Language (ISL) Interpreter",
    date: "May 2022",
    tech: ["TensorFlow", "Keras", "OpenCV"],
    href: "https://github.com/kavyasridhar1501/ISL-Interpreter",
  },
  {
    title: "Offline Signature Verification",
    date: "January 2022",
    tech: ["TensorFlow", "Keras", "OpenCV"],
    href: "https://github.com/kavyasridhar1501/Off-Line-Signature-Verification-",
  },
  {
    title: "Placement Portal",
    date: "May 2021",
    tech: ["MySQL", "HTML", "CSS", "JavaScript", "PHP"],
    href: "https://github.com/kavyasridhar1501/Placement-Portal-DBMS-Project",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((p) => {
            const preview = githubOgFromUrl(p.href) ?? "/code.jpg";
            return (
              <div
                key={p.title}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gray-100 relative">
                  <img
                    src={preview}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{p.date}</p>

                  {/* Tech stack as rounded color-coded pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full border text-xs sm:text-sm ${getTechColor(
                          t
                        )}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
