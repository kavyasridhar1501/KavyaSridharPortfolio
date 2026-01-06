"use client";
import Image from "next/image";
import myImage from "@/public/my_image.jpg";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center py-12 px-4">
      <div className="relative w-64 h-64 rounded-full shadow-2xl ring-1 ring-black/5 overflow-hidden">
        <Image
          src={myImage}
          alt="Kavya Sridhar"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
      <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900">
        Kavya Sridhar
      </h1>
      <p className="mt-2 text-xl text-slate-500 max-w-3xl text-center">
        I&apos;m currently a Master&apos;s in Data Science student driven by the belief that technology should be a bridge, not a barrier. Lack of access to resources can limit people&apos;s potential, I&apos;ve witnessed firsthand how the right exposure can transform lives. This perspective shapes everything I do, from building data-driven solutions to creating educational pathways for underrepresented communities. Outside my academic and professional work, I&apos;ve organized technical workshops for government school students and orphanages, teaching programming fundamentals and web development to show young people from underserved backgrounds that tech careers are within their reach. Whether I&apos;m developing machine learning models or breaking down barriers to tech education, my mission remains the same: using technology as a force for inclusion, empowerment, and creating opportunities where none existed before.
      </p>
    </section>
  );
}
