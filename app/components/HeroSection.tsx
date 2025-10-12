'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="text-center">
        <div className="mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg transform scale-110 hover:scale-115 transition-transform duration-500">
          <Image
            src="./public/my_image.jpg"
            alt="Kavya Sridhar"
            width={224}
            height={224}
            className="object-cover w-full h-full"
            priority
          />

        </div><br/>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Kavya Sridhar</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">ML and AI Enthusiast</p>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
          Passionate Data Scientist and Machine Learning researcher pursuing a Master’s at UC San Diego. Experienced in developing scalable AI systems across data engineering, deep learning, and LLM-based workflows. Skilled at bridging research and production to build intelligent, reliable, and inclusive technologies that create real-world impact.
        </p>
      </div>
    </section>
  );
}
