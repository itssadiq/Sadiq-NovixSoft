import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

export default function Journal() {
  const blogs = [
    {
      slug: "web-design-trends-2025",
      title: "Web Design Trends to Watch in 2025",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      readTime: "6 min read",
      date: "Feb 13, 2025",
    },
    {
      slug: "website-redesign",
      title: "Why Your Website Needs a Redesign",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
      readTime: "5 min read",
      date: "Feb 6, 2025",
    },
    {
      slug: "increase-conversions",
      title: "Design Choices to Increase Website Conversions",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      readTime: "6 min read",
      date: "Feb 3, 2025",
    },
  ];

  return (
    <section className="w-full px-1 md:px-2 pt-8 md:pt-10 pb-12 md:pb-16 max-w-[1400px] mx-auto">
      {/* --- SECTION HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
        <h2 className="text-white text-3xl md:text-5xl font-semibold whitespace-nowrap">
          My Journal
        </h2>

        <div className="h-[1px] bg-[#1a1a1a] w-full md:flex-grow"></div>

        <div className="mt-2 md:mt-0">
          <Button href="/journal" className="whitespace-nowrap">
            View all
            <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>

      {/* --- BLOGS LIST --- */}
      <div className="flex flex-col gap-4">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`/journal/${blog.slug}`}
            className="group block bg-[#121212] p-2 md:p-3 rounded-[1rem] md:rounded-full transition-all duration-300 hover:bg-[#1a1a1a] cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              {/* IMAGE (No more movement on hover) */}
              <div className="relative w-full md:w-28 md:h-28 aspect-[16/10] md:aspect-square overflow-hidden rounded-2xl md:rounded-full shrink-0 border border-[#1a1a1a]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT & META AREA */}
              <div className="flex flex-col md:flex-row md:items-center flex-grow px-2 md:px-4">
                <h3 className="text-[#bfbfbf] text-lg md:text-xl font-medium md:max-w-md">
                  {blog.title}
                </h3>

                <div className="hidden md:block flex-grow h-[1px] bg-[#1a1a1a] mx-8"></div>
                <div className="block md:hidden h-[1px] bg-[#1a1a1a] w-full my-4"></div>

                <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                  <div className="flex items-center gap-3 text-[#8A8A8A] text-sm md:text-base whitespace-nowrap">
                    <span>{blog.readTime}</span>
                    {/* YELLOW DOT SEPARATOR */}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></div>
                    <span>{blog.date}</span>
                  </div>

                  {/* ACCENT ARROW (Rotates 45deg to point right on hover) */}
                  <div className="hidden md:block">
                    <ArrowUpRight
                      size={22}
                      className="text-[var(--color-accent)] transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
