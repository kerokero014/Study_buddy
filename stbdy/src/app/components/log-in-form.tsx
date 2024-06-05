'use client';
export default function LogInForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 m-4 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">
          Log In
        </h2>
        <form className="space-y-5">
          <label className="block">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Password:</span>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <button
            type="submit"
            className="w-full px-3 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
