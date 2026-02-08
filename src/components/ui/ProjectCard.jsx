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
      {/* Container */}
      <div
        className="w-full aspect-[4/3.2] rounded-[14px] p-5 md:p-8"
        style={{ backgroundColor: bgColor }}
      >
        {/* Animated Wrapper */}
        <div
          className="relative w-full h-full rounded-lg transition-all duration-500 ease-out 
                        group-hover:scale-[1.03] 
                        group-hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)]"
        >
          <div className="w-full h-full rounded-lg overflow-hidden relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Metadata */}
      <div className="flex items-center gap-2 mt-2 px-1">
        <h3 className="text-white text-lg font-bold tracking-tight">{title}</h3>
        <span className="text-[var(--color-accent)] text-lg leading-none">
          •
        </span>
        <p className="text-[#8A8A8A] text-sm font-medium">{category}</p>
      </div>
    </Link>
  );
}
