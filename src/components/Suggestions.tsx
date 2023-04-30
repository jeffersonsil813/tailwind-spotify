import Image from "next/image";

interface SuggestionsProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export function Suggestions({
  imageSrc,
  imageAlt,
  title,
  description,
}: SuggestionsProps) {
  return (
    <a
      href="#"
      className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 transition-colors break-words"
    >
      <Image
        className="w-full"
        src={imageSrc}
        alt={imageAlt}
        width={120}
        height={120}
      />
      <strong className="font-semibold">{title}</strong>
      <span className="text-sm text-zinc-400">{description}</span>
    </a>
  );
}
