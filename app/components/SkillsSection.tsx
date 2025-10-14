export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      items: ['Python', 'C', 'C++'],
    },
    {
      title: 'ML Frameworks',
      items: [
        'NumPy',
        'Pandas',
        'Matplotlib',
        'Scikit-learn',
        'PyTorch',
        'Keras',
        'Hugging Face',
        'LangChain',
        'LangGraph',
      ],
    },
    {
      title: 'Data Engineering & Databases',
      items: ['MySQL', 'PostgreSQL', 'Neo4J', 'Spark', 'Hadoop', 'Amazon S3'],
    },
    {
      title: 'Concepts',
      items: [
        'Machine Learning',
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'Large Language Model',
        'Generative AI',
        'Data CI/CD Pipelines',
        'ETL (Extract, Transform, Load)',
        'Big Data Systems (Spark, Hadoop)'
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center">
          Skills & Technologies
        </h2>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center sm:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {category.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow text-sm sm:text-base"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
