import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold">
        RateFluencer AI 🚀
      </h1>

      <p className="text-gray-500">
        AI-Powered Influencer Discovery Platform
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-6 py-3 rounded-xl bg-black text-white"
        >
          Login
        </Link>

        <Link
          href="/dashboard"
          className="px-6 py-3 rounded-xl border"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}