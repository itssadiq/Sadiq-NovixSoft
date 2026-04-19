const SocialLink = ({ icon: Icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-2 rounded-full border border-white text-white transition-all duration-300 hover:bg-white hover:text-black group"
  >
    <span className="text-lg">
      <Icon />
    </span>
    <span className="type-btn font-semibold !text-white group-hover:!text-black">
      {label}
    </span>
  </a>
);

export default SocialLink;
