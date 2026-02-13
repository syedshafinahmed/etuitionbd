"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { RiBookShelfFill } from "react-icons/ri";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [open, setOpen] = useState(false);

  /* Load saved theme */
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  /* Links */
  const Links = (
    <>
      <li>
        <Link
          href="/"
          className="text-sm md:text-base font-extralight block px-2 py-1"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about-us"
          className="text-sm md:text-base font-extralight block px-2 py-1"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className="text-sm md:text-base font-extralight block px-2 py-1"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/tutors"
          className="text-sm md:text-base font-extralight block px-2 py-1"
        >
          Tutors
        </Link>
      </li>
      <li>
        <Link
          href="/tuitions"
          className="text-sm md:text-base font-extralight block px-2 py-1"
        >
          Tuitions
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard"
          className="text-sm md:text-base font-extralight block px-2 py-1"
        >
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <header className="bg-background border-b dm overflow-hidden">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-foreground rounded-md">
            <RiBookShelfFill className="text-secondary text-3xl p-1 shadow-md" />
          </div>
          <span className="text-3xl font-bold text-primary">Scholara</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-4">{Links}</ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="border rounded-md p-2 hover:bg-muted transition"
          >
            {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
          </button>

          {/* Login Button */}
          <Link
            href="/login"
            className="bg-accent text-accent-foreground px-4 py-1 rounded-md font-extralight border border-primary/20 hover:opacity-90 transition hidden md:inline-flex"
          >
            Login
          </Link>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <ul className="flex flex-col gap-1 p-3">{Links}</ul>
          {/* Login Button mobile */}
          <div className="px-3 pb-3 -mt-1">
            <Link
              href="/login"
              className="text-sm md:text-base font-light block px-2 py-1 border border-primary/20 rounded-md text-center"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
