import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  const loginAction = async () => {
    "use server";

    const session = await auth();

    if (!session.userId) {
      return redirect("/sign-in");
    }

    return redirect("/dashboard");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 text-2xl">
      <h1>My Space ^_^</h1>
      <form action={loginAction}>
        <Button
          type="submit"
          className="cursor-pointer rounded-sm bg-emerald-400 px-4 py-2 text-xl font-semibold text-black hover:bg-emerald-500"
        >
          Login
        </Button>
      </form>
    </main>
  );
}
