'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="py-16 px-4 border-t border-gray-100">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
          <p className="text-gray-600">
            Interested in working together? Let&apos;s have a conversation.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.5 8c0 7-7.5 12-7.5 12S4.5 15 4.5 8a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>San Diego, CA</span>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-6">
            {/* Email */}
            <a
              href="mailto:k1sridhar@ucsd.edu"
              className="text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.236l7.386 5.907a1 1 0 001.228 0L20 8.236V18H4z" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href="tel:+18583723468"
              className="text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Phone"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5.25A2.25 2.25 0 015.25 3h1.482a1.5 1.5 0 011.415 1.03l1.055 3.166a1.5 1.5 0 01-.376 1.523L7.6 10.945a11.25 11.25 0 006.456 6.456l2.226-1.227a1.5 1.5 0 011.523.376l3.166 1.055A1.5 1.5 0 0121 19.268V20.75A2.25 2.25 0 0118.75 23H18A15 15 0 013 8V5.25z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/kavya-sridhar-2b09b620b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V8h3v11zM6.5 6.732a1.732 1.732 0 110-3.464 1.732 1.732 0 010 3.464zM20 19h-3v-5.604c0-2.777-3.604-2.586-3 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kavyasridhar1501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.82 1.33 3.5 1.02.11-.78.42-1.32.76-1.63-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.41 1.24-3.26-.12-.3-.54-1.52.12-3.16 0 0 1.02-.33 3.34 1.24a11.58 11.58 0 016.08 0c2.32-1.57 3.34-1.24 3.34-1.24.66 1.64.24 2.86.12 3.16.77.85 1.24 1.94 1.24 3.26 0 4.65-2.8 5.67-5.48 5.97.43.37.81 1.1.81 2.23v3.31c0 .32.22.69.82.58A12 12 0 0012 0z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
