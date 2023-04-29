import { Maximize2 } from "lucide-react";
import {
  Laptop2,
  LayoutList,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/album.jpg"
          alt="Capa do álbum da Hillsong"
          width={56}
          height={56}
        />
        <div className="flex flex-col">
          <strong className="font-normal">Nome da música</strong>
          <span className="text-xs text-zinc-500">artista nome</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-5">
          <Shuffle className="text-zinc-200" size={20} />
          <SkipBack className="text-zinc-200" size={20} />
          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>
          <SkipForward className="text-zinc-200" size={20} />
          <Repeat className="text-zinc-200" size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-48 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume1 size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
          <Maximize2 size={20} />
        </div>
      </div>
    </footer>
  );
}
