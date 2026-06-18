import Link from 'next/link';
import MobileMenu from './mobile-menu';

import './header.css';

function Header() {
  return (
    <div className="desktop-header-flex-box hd-background-color">
      <div className="p-6">
        <Link href="/"> Home </Link>
      </div>
      <div>
        <header className="relative">
          <nav className="desktop-nav">
            <ul>
              <li className="inline-block p-6">Publications</li>
              <li className="inline-block p-6">
                <Link href="/about"> About </Link>
              </li>
              <li className="inline-block p-6">Contact</li>
            </ul>
          </nav>
          <MobileMenu />
        </header>
      </div>
    </div>
  );
}

export default Header;
