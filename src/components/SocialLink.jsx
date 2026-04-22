const SocialLink = ({ icon: Icon, label, href, variant = "dark" }) => {
  const isLight = variant === "light";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300 group
        ${
          isLight
            ? "border-black text-black hover:bg-black hover:text-white"
            : "border-white text-white hover:bg-white hover:text-black"
        }
      `}
    >
      <span className="text-lg">
        <Icon />
      </span>
      <span
        className={`
          type-btn font-semibold transition-all duration-300
          ${
            isLight
              ? "!text-black group-hover:!text-white"
              : "!text-white group-hover:!text-black"
          }
        `}
      >
        {label}
      </span>
    </a>
  );
};

export default SocialLink;
