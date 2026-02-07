import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  category,
  image,
  bgColor,
  href = "#", // Default to # if no link provided yet
}) {
  return (
    <Link href={href} className="group block w-full">
      {/* --- CARD CONTAINER --- */}
      {/* 
         - aspect-[4/3]: Maintains the rectangular shape
         - p-8 md:p-12: Creates the thick colored border effect
         - rounded-[32px]: Large rounded corners
      */}
      <div
        className="w-full aspect-[4/3] rounded-[32px] p-8 md:p-12 transition-transform duration-500 ease-out group-hover:scale-[0.98]"
        style={{ backgroundColor: bgColor }}
      >
        {/* --- INNER IMAGE --- */}
        {/* relative + w-full h-full is needed for Next/Image to fill the container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
          {/* Using Next.js Image for optimization */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* --- TEXT BELOW --- */}
      <div className="flex items-center gap-3 mt-5 px-1">
        {/* Title */}
        <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">
          {title}
        </h3>

        {/* Separator Dot (Using your Brand Lime Color) */}
        <span className="text-[var(--color-accent)] text-xl leading-none">
          •
        </span>

        {/* Category */}
        <p className="text-[#8A8A8A] text-lg font-medium">{category}</p>
      </div>
    </Link>
  );
}
