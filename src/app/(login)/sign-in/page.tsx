import { SignInButton } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <SignInButton forceRedirectUrl={"/dashboard"} />
      <footer className="mt-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} T3 Drive. All rights reserved.
      </footer>
    </>
  );
}
