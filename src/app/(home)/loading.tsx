export default function Loading() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-emerald-400 text-4xl text-emerald-400">
        <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-amber-400 text-2xl text-amber-400"></div>
      </div>
      <h1 className="text-neutral-400">Getting your files ready...</h1>
    </div>
  );
}
