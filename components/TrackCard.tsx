import AudioPlayer from "./AudioPlayer";

type TrackCardProps = {
  number: string;
  title: string;
  audioSrc: string;
  tone: "pink" | "blue";
};

export default function TrackCard({
  number,
  title,
  audioSrc,
  tone,
}: TrackCardProps) {
  const isPink = tone === "pink";

  const styles = isPink
    ? {
        bg: "bg-pink-50/70",
        border: "border-pink-100",
        number: "text-pink-300",
        title: "text-pink-500",
        accent: "bg-pink-200",
      }
    : {
        bg: "bg-sky-50/70",
        border: "border-sky-100",
        number: "text-sky-300",
        title: "text-sky-500",
        accent: "bg-sky-200",
      };

  return (
    <article
      className={`
        group
        rounded-[1.75rem]
        border
        px-5
        py-6
        transition
        duration-300
        sm:rounded-[2rem]
        sm:px-8
        sm:py-9
        lg:hover:-translate-y-1
        ${styles.bg}
        ${styles.border}
      `}
    >
      <div
        className="
          grid
          gap-6
          lg:grid-cols-[80px_1fr_auto]
          lg:items-center
          lg:gap-8
        "
      >
        {/* TRACK NUMBER */}
        <div className="flex items-center gap-3 lg:block">
          <p
            className={`
              text-xs
              tracking-[0.2em]
              sm:text-sm
              ${styles.number}
            `}
          >
            {number}
          </p>

          <div
            className={`
              h-1
              w-7
              rounded-full
              lg:mt-3
              lg:w-8
              ${styles.accent}
            `}
          />
        </div>

        {/* TITLE */}
        <div className="min-w-0">
          <h3
            className={`
              break-words
              text-[2.6rem]
              font-semibold
              leading-[0.95]
              tracking-[-0.045em]
              sm:text-6xl
              lg:text-7xl
              ${styles.title}
            `}
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              text-[9px]
              tracking-[0.18em]
              text-slate-400
              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            Rain and Flowers
          </p>
        </div>

        {/* PLAYER + DOWNLOAD */}
        <div
          className="
            flex
            min-w-0
            flex-col
            gap-4
            border-t
            border-slate-200/70
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:border-0
            lg:pt-0
          "
        >
          <AudioPlayer src={audioSrc} />

          <a
            href={audioSrc}
            download
            className="
              flex
              min-h-11
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white/60
              px-5
              text-[10px]
              font-medium
              tracking-[0.18em]
              text-slate-600
              transition
              hover:border-slate-300
              hover:bg-white
              hover:text-slate-900
              sm:min-h-0
              sm:justify-start
              sm:rounded-none
              sm:border-0
              sm:bg-transparent
              sm:px-0
            "
          >
            DOWNLOAD
            <span className="text-base">↓</span>
          </a>
        </div>
      </div>
    </article>
  );
}