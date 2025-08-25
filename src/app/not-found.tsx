"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-9xl font-bold text-red-600 animate-bounce">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-2xl bg-red-600 px-6 py-3 text-white font-medium shadow-lg hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}