import { motion } from "motion/react";
import { FiChevronsRight } from "react-icons/fi";

export default function ToggleClose(props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { open, setOpen } = props;

  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute right-0 bottom-0 left-0 border-t border-neutral-500 transition-colors hover:bg-emerald-700"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"} text-slate-100`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium text-slate-100"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
}
