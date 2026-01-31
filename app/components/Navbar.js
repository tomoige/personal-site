"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="block py-2 text-muted hover:text-fg text-sm transition-colors"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-white">
      <div className="max-w-readable mx-auto px-5">
        <div className="flex justify-between items-center h-14">
          <Link
            href="/"
            className="text-sm font-medium text-fg hover:text-muted"
          >
            Thomas Cormican
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 text-muted hover:text-fg"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden border-t border-border bg-white px-5 py-3">
          <div className="flex flex-col gap-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
