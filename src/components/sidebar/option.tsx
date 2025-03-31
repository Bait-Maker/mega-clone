import { auth } from "@clerk/nextjs/server";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { IconType } from "react-icons/lib";

type OptionProps = {
  Icon: IconType;
  title: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  notifs?: number;
  href?: string;
};

export default function Option({
  Icon,
  title,
  selected,
  setSelected,
  open,
  notifs,
  href,
}: OptionProps) {
  const router = useRouter();

  return (
    <motion.a
      href={href}
      layout
      onClick={(e) => {
        setSelected(title);
        e.preventDefault();
        router.replace(href!);
      }}
      className={`relative flex h-10 w-full cursor-pointer items-center rounded-md transition-colors ${selected === title ? "bg-emerald-800 text-white" : "text-slate-100 hover:bg-emerald-800"}`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-sm font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute top-1/2 right-2 size-4 rounded bg-emerald-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.a>
  );
}
