'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        aria-label="Toggle menu"
        className="mobile-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li>
              <Link
                href="/"
                className="mobile-menu-item"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href=""
                className="mobile-menu-item"
                onClick={() => setIsOpen(false)}
              >
                Publications
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="mobile-menu-item"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href=""
                className="mobile-menu-item"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
