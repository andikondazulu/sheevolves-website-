"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#what-we-do", label: "What We Do" },
  { href: "/#celebrations", label: "Celebrations" },
  { href: "/#wellness", label: "Wellness" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo-link" aria-label="SheEvolves Co. home">
          <Image src="/logo.png" alt="SheEvolves Co." width={150} height={62} priority />
        </Link>

        <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Link href="/join" className="btn btn-solid nav-cta" onClick={() => setOpen(false)}>
            Join Us
          </Link>
        </nav>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}