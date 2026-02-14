import Link from "next/link";
import { RiBookShelfFill } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-background backdrop-blur-md border-t border-white/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-10 py-12 md:py-16 flex flex-col md:flex-row justify-around gap-30">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-foreground rounded-md p-1">
              <RiBookShelfFill className="text-secondary text-3xl shadow-md" />
            </div>
            <span className="text-4xl font-bold text-primary">Scholara</span>
          </Link>
          <p className="text-sm text-black/60 dark:text-white/60">
            Connecting students and tutors with a seamless platform. Learn,
            grow, and achieve your academic goals.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3 mt-2">
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/syed-shafin-ahmed/"
              className="p-2 border border-primary/30 rounded-md hover:bg-white/20 transition text-black dark:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/syedshafinahmed"
              className="p-2 border border-primary/30 rounded-md hover:bg-white/20 transition text-black dark:text-white"
            >
              <TbBrandGithubFilled />
            </a>
            <a
              aria-label="Portfolio"
              href="https://syedshafinahmed.pages.dev/"
              className="p-2 border border-primary/30 rounded-md hover:bg-white/20 transition text-black dark:text-white"
            >
              <FaGlobe />
            </a>
            <a
              aria-label="Facebook"
              href="#"
              className="p-2 border border-primary/30 rounded-md hover:bg-white/20 transition text-black dark:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              aria-label="Instagram"
              href="#"
              className="p-2 border border-primary/30 rounded-md hover:bg-white/20 transition text-black dark:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h4 className="text-xl font-extralight text-black dark:text-white">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-black/60 dark:text-white/60">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/tutors">Tutors</Link>
            </li>
            <li>
              <Link href="/tuitions">Tuitions</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:w-1/3">
          <h4 className="text-xl font-extralight text-black dark:text-white">
            Legal
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-black/60 dark:text-white/60">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Contact / Newsletter */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h4 className="text-xl font-extralight text-black dark:text-white">
            Stay Updated
          </h4>
          <p className="text-sm text-black/60 dark:text-white/60">
            Subscribe to our newsletter for updates, offers, and new features.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <div className="group">
              <input
                type="email"
                placeholder="Enter your mail"
                className="bg-transparent border-b border-black/30 dark:border-white/30 py-3 outline-none
              focus:border-black dark:focus:border-white transition-colors w-50"
              />
            </div>
            <button
              type="submit"
              className="px-4 bg-foreground text-secondary rounded-md hover:opacity-90 transition mt-2 sm:mt-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-black to-transparent dark:via-white mb-4"></div>
      <div className="text-center font-extralight text-sm text-primary mb-4">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium">Scholara</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
