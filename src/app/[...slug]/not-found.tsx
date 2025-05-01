import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, we couldn't find the service you were looking for.
      </p>
      <div className="space-y-4">
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Return to Home
        </Link>
        <div>
          <Link 
            href="/contact"
            className="text-emerald-500 hover:text-emerald-600 underline"
          >
            Contact us
          </Link>
          {" "}if you need assistance.
        </div>
      </div>
    </div>
  );
}