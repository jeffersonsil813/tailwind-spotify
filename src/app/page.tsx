import { Album } from "@/components/Album";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { Suggestions } from "@/components/Suggestions";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 overflow-y-auto">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
            <Album
              imageSrc="/images/open-heaven-album.jpg"
              imageAlt="Álbum Open Heaven"
              title="Open Heaven"
            />
            <Album
              imageSrc="/images/this-is-our-god-album.jpg"
              imageAlt="Álbum This Is Our God"
              title="This Is Our God"
            />
            <Album
              imageSrc="/images/Beerbongs-Bentleys.png"
              imageAlt="Álbum Beerbongs & Bentleys"
              title="Beerbongs & Bentleys"
            />
            <Album
              imageSrc="/images/Legends_Never_Die.png"
              imageAlt="Álbum Legends Never Die"
              title="Legends Never Die"
            />
            <Album
              imageSrc="/images/Beauty_Behind_the_Madness.png"
              imageAlt="Álbum Beauty Behind the Madness"
              title="Beauty Behind the Madness"
            />
            <Album
              imageSrc="/images/Teus_Sonhos_Fernandinho.jpg"
              imageAlt="Álbum Teus Sonhos"
              title="Teus Sonhos"
            />
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Jefferson Santos da Silva
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-6 gap-4 mt-4">
            <Suggestions
              imageSrc="/images/Hollywood's_Bleeding.png"
              imageAlt="Álbum Hollywood's Bleeding"
              title="Hollywood's Bleeding"
              description="Lorem ipsum dolor sit amet."
            />
            <Suggestions
              imageSrc="/images/attention.jpg"
              imageAlt="Álbum Atenção Banda Morada"
              title="Atenção"
              description="Lorem ipsum dolor sit amet."
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
