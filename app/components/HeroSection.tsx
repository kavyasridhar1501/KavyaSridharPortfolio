import Image from "next/image";
import myImage from "@/public/my_image.jpg"; // ⬅️ exact file name from /public

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 rounded-full shadow-2xl ring-1 ring-black/5 overflow-hidden">
        <Image
          src={myImage}        // ⬅️ uses a module import, so no path/basePath issues
          alt="Kavya Sridhar"
          fill                  // makes it cover the parent circle
          className="object-cover"
          priority
          unoptimized           // safe with GitHub Pages static export
        />
      </div>

      <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900">
        Kavya Sridhar
      </h1>
      <p className="mt-2 text-xl text-slate-500">ML and AI Enthusiast</p>
    </div>
  );
}
