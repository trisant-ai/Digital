import './header.css';
import Image from 'next/image';

function Header() {
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
                <a
                  href="/api/auth/login"
                  className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                >
                  Sign in
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
