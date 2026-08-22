'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PUBLICATION_ITEMS } from './publications-dropdown';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [pubOpen, setPubOpen] = useState(false);

  function closeAll() {
    setIsOpen(false);
    setPubOpen(false);
  }

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

      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li>
              <Link href="/" className="mobile-menu-item" onClick={closeAll}>
                Home
              </Link>
            </li>

            {/* Publications accordion */}
            <li>
              <button
                type="button"
                aria-expanded={pubOpen}
                aria-haspopup="true"
                className="mobile-menu-item mobile-pub-trigger"
                onClick={() => setPubOpen((p) => !p)}
              >
                Publications
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`mobile-pub-chevron${pubOpen ? ' mobile-pub-chevron--open' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {pubOpen && (
                <ul className="mobile-pub-submenu">
                  {PUBLICATION_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="mobile-pub-item"
                        onClick={closeAll}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="https://patents.google.com/patent/US9806768B2/en"
                target="_blank"
                className="mobile-menu-item"
                onClick={closeAll}
              >
                My Patent
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="mobile-menu-item"
                onClick={closeAll}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
