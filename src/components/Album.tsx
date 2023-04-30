import { Play } from "lucide-react";
import Image from "next/image";

interface AlbumProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

export function Album({ imageSrc, imageAlt, title }: AlbumProps) {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
    >
      <div className="flex items-center flex-1 gap-4">
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
        <strong>{title}</strong>
      </div>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black mr-6 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}
