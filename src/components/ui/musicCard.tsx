import Image from "next/image";
import thumbnail from "~/assets/thumbnail.png";

function MusicCard() {
  return (
    <div className="hover:bg-foreground max-w-fit rounded-xl p-4 transition-colors">
      <Image src={thumbnail} alt="playlist card" className="mb-3 rounded-md" />
      <span className="text-sm font-medium text-stone-300">🌸AYAYA🌸</span>
    </div>
  );
}

export { MusicCard };
