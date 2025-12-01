import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <p className="text-base font-semibold text-400">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
        Page not found
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link className="btn btn-primary" href="/">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
