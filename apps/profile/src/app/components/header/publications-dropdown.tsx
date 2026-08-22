'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Single source of truth — imported by mobile-menu too
export const PUBLICATION_ITEMS = [
  { label: 'Claude', href: '/publications/claude' },
  // { label: 'Tech Talks', href: '/publications/tech-talks' },
  // { label: 'Best Practices', href: '/publications/best-practices' },
  // { label: 'Articles', href: '/publications/articles' },
] as const;

export default function PublicationsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        setIsOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('mousedown', onOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="pub-wrapper">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((p) => !p)}
        className="pub-trigger"
      >
        Publications
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={`pub-chevron${isOpen ? ' pub-chevron--open' : ''}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="pub-dropdown" role="menu">
          {PUBLICATION_ITEMS.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className="pub-dropdown-item"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
