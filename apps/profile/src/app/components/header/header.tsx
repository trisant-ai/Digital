import Link from 'next/link';
import MobileMenu from './mobile-menu';
import PublicationsDropdown from './publications-dropdown';
import './header.css';

function Header() {
  return (
    <div className="desktop-header-flex-box hd-background-color">
      <div className="p-6 shrink-0">
        <Link href="/">Home</Link>
      </div>
      <header className="relative">
        <nav className="desktop-nav">
          <ul className="flex items-center">
            <li>
              <PublicationsDropdown />
            </li>
            <li className="inline-block p-6">
              <Link
                href="https://patents.google.com/patent/US9806768B2/en"
                target="_blank"
              >
                My Patent
              </Link>
            </li>
            <li className="inline-block p-6">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <MobileMenu />
      </header>
    </div>
  );
}

export default Header;
