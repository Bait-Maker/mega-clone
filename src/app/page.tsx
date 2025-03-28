import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 text-2xl">
      <h1>Mega Clone ^_^</h1>
      <Link
        href={"/f/1"}
        className="rounded-sm bg-emerald-400 px-4 py-2 hover:bg-emerald-500"
      >
        MOCK LOGIN
      </Link>
    </main>
  );
}
