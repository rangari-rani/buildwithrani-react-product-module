import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-4">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 px-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#10B981]">Rani Rangari</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#10B981] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/rani-rangari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#10B981] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <a
          href="https://buildwithrani.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-teal-500 hover:text-[#10B981] transition-colors"
        >
          buildwithrani.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
