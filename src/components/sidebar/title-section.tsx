import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { motion } from "motion/react";
import { FiChevronDown } from "react-icons/fi";

export function TitleSection(props: { open: boolean }) {
  return (
    <div className="mb-3 border-b border-neutral-500 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md py-1 transition-colors hover:bg-emerald-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center pl-1">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {props.open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold text-slate-200">
                TomIsLoading
              </span>
              <span className="block text-xs text-slate-300">Pro Plan</span>
            </motion.div>
          )}
        </div>
        {props.open && <FiChevronDown className="mr-2 text-slate-100" />}
      </div>
    </div>
  );
}

export function Logo() {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-emerald-600"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
    </motion.div>
  );
}
