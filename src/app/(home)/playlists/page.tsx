import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { MusicCard } from "~/components/ui/musicCard";

export default function PlaylistsPage() {
  const getSession = async () => {
    const session = await auth();

    if (!session.userId) {
      return redirect("/sign-in");
    }
  };

  getSession();

  //* Probably gonna use cobalt.tools

  return (
    <main className="bg-background max-h-screen w-full p-8">
      <div className="mt-8 mr-8 flex items-center justify-between">
        <h2 className="text-xl font-medium tracking-wide text-stone-200">
          Your Playlists
        </h2>
        <div>
          <button className="bg-background hover:bg-foreground mr-4 cursor-pointer rounded-lg border-2 border-solid border-emerald-800 p-3.5 text-stone-200">
            Upload
          </button>
          <a
            href="https://cobalt.tools/"
            target="_blank"
            className="cursor-pointer rounded-lg bg-emerald-800 p-4 text-amber-50 hover:bg-emerald-900"
          >
            Download
          </a>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </main>
  );
}
