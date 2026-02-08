import Link from "next/link";

export default function Button({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 bg-[#262626] text-[var(--color-text-link)] px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-black ${className}`}
    >
      {children}
    </Link>
  );
}
