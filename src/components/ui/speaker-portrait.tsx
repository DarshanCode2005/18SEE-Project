import type { KeynoteSpeaker } from "@/data/keynote-speakers";

export const SpeakerPortrait = ({
  speaker,
  className = "",
}: {
  speaker: Pick<KeynoteSpeaker, "name" | "image">;
  className?: string;
}) => (
  <div className={`shrink-0 overflow-hidden rounded-[50%] bg-white isolate ${className}`}>
    <img
      src={speaker.image}
      alt={speaker.name}
      loading="lazy"
      decoding="async"
      className="block h-full w-full object-cover object-center scale-[1.08]"
    />
  </div>
);
