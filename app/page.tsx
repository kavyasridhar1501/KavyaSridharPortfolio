'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const resumeUrl =
    (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/resume.pdf'

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-6">
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Kavya Sridhar 👋</h1>
        <p className="text-lg text-gray-600 mb-6">
          I’m a passionate developer who loves building web experiences and exploring new technologies.
        </p>

        <div className="flex justify-center gap-4">
          {/* Resume button */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md border border-gray-400 hover:bg-gray-100 transition"
          >
            View Resume
          </a>

          {/* Optional download link */}
          <a
            href={resumeUrl}
            download
            className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        <p>
          Built using <Link href="https://nextjs.org" className="underline">Next.js</Link>
        </p>
      </footer>
    </main>
  )
}
