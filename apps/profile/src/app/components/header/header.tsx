import Image from 'next/image';
import Link from 'next/link';

import './header.css';

async function Header() {
  return (
    <div className=" w-screen h-[8dvh] hd-background-color flex flex-row justify-around">
      <div className="mt-[25] mb-[25] mr-[40] ml-[40] font-roboto font-400">
        <Link href="/"> Home </Link>
      </div>
      <div>
        <header>
          <nav>
            <ul>
              <li className="inline-block mt-[25] mb-[25] mr-[40] ml-[40] font-roboto font-400">
                Publications
              </li>
              <li className="inline-block mt-[25] mb-[25] mr-[40] ml-[40] font-roboto font-400">
                <Link href="/about"> About </Link>
              </li>
              <li className="inline-block mt-[25] mb-[25] mr-[40] ml-[40] font-roboto font-400">
                Contact
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
