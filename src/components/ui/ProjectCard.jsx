import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  category,
  image,
  bgColor,
  href = "#",
}) {
  return (
    <Link href={href} className="group block w-full">
      {/* --- CARD CONTAINER --- */}
      {/* Removed group-hover:scale from this div so the outer box stays static */}
      <div
        className="w-full aspect-[4/3.2] rounded-[20px] p-5 md:p-8"
        style={{ backgroundColor: bgColor }}
      >
        {/* --- INNER IMAGE WRAPPER --- */}
        {/* 
            - group-hover:-translate-y-2: Moves image UP slightly
            - group-hover:shadow-2xl: Adds shadow behind the image onto the colored bg
        */}
        <div className="relative w-full h-full rounded-xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl">
          {/* We need this inner div to clip the image roundness while allowing shadow on the parent */}
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* --- TEXT BELOW --- */}
      <div className="flex items-center gap-2 mt-4 px-1">
        <h3 className="text-white text-lg md:text-xl font-bold tracking-tight">
          {title}
        </h3>

        <span className="text-[var(--color-accent)] text-lg leading-none">
          •
        </span>

        <p className="text-[#8A8A8A] text-sm md:text-base font-medium">
          {category}
        </p>
      </div>
    </Link>
  );
}
