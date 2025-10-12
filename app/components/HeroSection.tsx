"use client";

import Image from "next/image";
import myImage from "@/public/my_image.jpg"; // <-- EXACT name from /public

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center py-12">
      <div className="relative w-64 h-64 rounded-full shadow-2xl ring-1 ring-black/5 overflow-hidden">
        <Image
          src={myImage}        // static import => no path bugs
          alt="Kavya Sridhar"
          fill                 // fill requires a sized, relative parent (we set w-64 h-64 + relative)
          className="object-cover"
          priority
          unoptimized          // safe for GitHub Pages static export
        />
      </div>

      <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900">
        Kavya Sridhar
      </h1>
      <p className="mt-2 text-xl text-slate-500">ML and AI Enthusiast</p>
    </section>
  );
}
