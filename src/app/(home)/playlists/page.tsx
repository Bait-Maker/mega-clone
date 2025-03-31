import { auth } from "@clerk/nextjs/server";
import { Sidebar } from "~/components/sidebar/sidebar";
import { redirect } from "next/navigation";

export default async function PlaylistsPage() {
  const session = await auth();

  if (!session.userId) {
    return redirect("/sign-in");
  }
  return <main className="bg-background flex"></main>;
}
