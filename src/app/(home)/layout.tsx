import { Sidebar } from "~/components/sidebar/sidebar";

export default function HomeLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <main className="flex h-screen w-screen">
        <Sidebar />
        {props.children}
      </main>
    </div>
  );
}
