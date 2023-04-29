import { Album } from "@/components/Album";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { Suggestions } from "@/components/Suggestions";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Album
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Open Heaven"
            />
            <Album
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Open Heaven"
            />
            <Album
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Open Heaven"
            />
            <Album
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Open Heaven"
            />
            <Album
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Open Heaven"
            />
            <Album
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Open Heaven"
            />
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Jefferson Santos da Silva
          </h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <Suggestions
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Title"
              description="Artists, famous, genius, music, songs, worship"
            />
            <Suggestions
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Title"
              description="Artists, famous, genius, music, songs, worship"
            />
            <Suggestions
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Title"
              description="Artists, famous, genius, music, songs, worship"
            />
            <Suggestions
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Title"
              description="Artists, famous, genius, music, songs, worship"
            />
            <Suggestions
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Title"
              description="Artists, famous, genius, music, songs, worship"
            />
            <Suggestions
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Title"
              description="Artists, famous, genius, music, songs, worship"
            />
            <Suggestions
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Title"
              description="Artists, famous, genius, music, songs, worship"
            />
            <Suggestions
              imageSrc="/album.jpg"
              imageAlt="Capa do álbum da Hillsong"
              title="Title"
              description="Artists, famous, genius, music, songs, worship"
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
