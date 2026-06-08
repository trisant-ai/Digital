import Image from 'next/image';
import Link from 'next/link';

import { getUserSession } from '@/lib/keycloak/session';
import './header.css';

async function Header() {
  const user = await getUserSession();
  const isAuthenticated = !!user;

  return (
    <div className=" w-screen h-[10dvh] hd-background-color flex flex-row justify-around">
      <div className="m-[15]">
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={125}
          height={125}
        />{' '}
      </div>
      <div>
        <header>
          <nav>
            <ul>
              <li className="inline-block mt-[30] mb-[30] mr-[40] ml-[40] text-white">
                Personal Insurance
              </li>
              <li className="inline-block mt-[30] mb-[30] mr-[40] ml-[40] text-white">
                Business Insurance
              </li>
              <li className="inline-block mt-[30] mb-[30] mr-[40] ml-[40] text-white">
                Documents
              </li>
              <li className="inline-block mt-[30] mb-[30] mr-[40] ml-[40] text-white">
                About
              </li>
              <li className="inline-block mt-[30] mb-[30] mr-[40] ml-[40] text-white">
                Contact
              </li>
              <li className="inline-block mt-[30] mb-[30] mr-[40] ml-[40] text-white">
                {isAuthenticated ? (
                  <>
                    {/* <Link
                      href="/api/auth/logout/keycloak"
                      className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                    >
                      Sign Out
                    </Link> */}
                    <a
                      href="/api/auth/logout/keycloak"
                      className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                    >
                      {' '}
                      Sign Out{' '}
                    </a>
                  </>
                ) : (
                  <>
                    {/* <Link
                      href="/api/auth/login/keycloak"
                      className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                    >
                      Sign In
                    </Link> */}
                    <a
                      href="/api/auth/login/keycloak"
                      className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                    >
                      Sign In
                    </a>
                  </>
                )}
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
