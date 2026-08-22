import Link from 'next/link';

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center px-6 py-24 text-center sm:py-32 lg:px-8">
      <div className=" space-y-6 max-w-md mx-auto">
        <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
          Page not found
        </h1>
        <p className="text-base leading-7 sm:text-lg">
          Sorry, we couldn’t find that page.
        </p>
      </div>
      <div className="pt-4 ">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
