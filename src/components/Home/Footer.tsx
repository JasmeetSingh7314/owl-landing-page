import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link
              to="/about"
              className="font-inter hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-inter hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="font-inter hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>

          <div className="flex space-x-4">
            <a
              href="https://x.com/playowl_gg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="mailto:playowl.business@gmail.com"
              className="hover:text-purple-400 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://medium.com/@playowl.business"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <FaMedium size={24} />
            </a>
            <a
              href="https://playowl.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <SiHashnode size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Owl. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
