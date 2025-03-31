import { Sidebar } from "~/components/sidebar/sidebar";

export default function Dashboard() {
  return (
    <main className="flex h-screen w-screen">
      <Sidebar />
      <h1 className="text-white">CONTENTS DISPLAY GOES HERE</h1>
    </main>
  );
}
