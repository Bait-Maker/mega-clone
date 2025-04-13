import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Pully, Presets } from "pully";

export default function PlaylistsPage() {
  const getSession = async () => {
    const session = await auth();

    if (!session.userId) {
      return redirect("/sign-in");
    }
  };

  getSession();

  async function downloadVideoAction(url: string) {
    const pully = new Pully();

    const video = await pully.query(
      "https://www.youtube.com/watch?v=L_jWHffIx5E",
    );
    console.log(
      `${video.videoTitle} by ${video.channelName} has ${video.views} views!`,
    );

    const options = {
      url: url,
      preset: Presets.FourK,
      progress: (data: { percent: string }) => console.log(data.percent + "%"), // Progress reporter callback...
    };
  }

  return (
    <main className="bg-background flex">
      <div>
        <form>
          <label>Download from Url</label>
          <input
            type="text"
            placeholder="https://www.youtube.com/watch?v=L_jWHffIx5E"
          />
        </form>
      </div>
    </main>
  );
}
