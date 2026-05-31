import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">
        RateFluencer AI 🚀
      </h1>

      <div className="flex gap-4">
        <Link href="/login">
          <button className="px-4 py-2 border rounded">
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="px-4 py-2 bg-black text-white rounded">
            Sign Up
          </button>
        </Link>
      </div>
    </main>
  );
}