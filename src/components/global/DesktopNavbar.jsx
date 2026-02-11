import Link from "next/link";
import Button from "../ui/Button";

export default function DesktopNavbar({ links }) {
  return (
    <nav className="absolute top-0 left-0 w-full z-40 hidden md:block">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 border border-[var(--color-surface-3)] rounded-lg flex items-center justify-center transition-colors group-hover:border-[var(--color-text-secondary)]">
            <div className="w-2.5 h-2.5 bg-[var(--color-accent)] rotate-45 rounded-[1px]" />
          </div>
          <span className="text-xl font-semibold text-[var(--color-text-main)] tracking-tight">
            Sadiq Ali
          </span>
        </Link>

        {/* Theme-Linked Nav Links */}
        <div className="flex items-center gap-10">
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--color-text-link)] hover:text-[var(--color-text-main)] transition-colors text-sm font-medium cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button href="/contact">Contact Me</Button>
        </div>
      </div>
    </nav>
  );
}
