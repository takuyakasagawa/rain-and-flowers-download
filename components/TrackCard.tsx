"use client";

import { useState } from "react";
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
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    window.setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  const isPink = tone === "pink";

  const styles = isPink
    ? {
        bg: "bg-pink-50/70",
        border: "border-pink-100",
        number: "text-pink-300",
        title: "text-pink-500",
        accent: "bg-pink-200",
        download: "text-pink-400",
      }
    : {
        bg: "bg-sky-50/70",
        border: "border-sky-100",
        number: "text-sky-300",
        title: "text-sky-500",
        accent: "bg-sky-200",
        download: "text-sky-400",
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

          {/* DOWNLOAD */}
          <div className="relative">
            {isDownloading && (
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-full
                  left-1/2
                  h-10
                  w-20
                  -translate-x-1/2
                "
                aria-hidden="true"
              >
                {/* 左の光 */}
                <span
                  className={`
                    absolute
                    bottom-0
                    left-2
                    animate-[floatUp_1.1s_ease-out_forwards]
                    text-[10px]
                    ${styles.download}
                  `}
                >
                  ✦
                </span>

                {/* 中央のハート */}
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    -translate-x-1/2
                    animate-[floatUp_1.25s_ease-out_forwards]
                    text-xs
                    text-pink-300
                    [animation-delay:80ms]
                  "
                >
                  ♡
                </span>

                {/* 右の光 */}
                <span
                  className={`
                    absolute
                    bottom-0
                    right-2
                    animate-[floatUp_1s_ease-out_forwards]
                    text-[9px]
                    [animation-delay:160ms]
                    ${styles.download}
                  `}
                >
                  ✦
                </span>
              </div>
            )}

            <a
              href={audioSrc}
              download
              onClick={handleDownload}
              className={`
                flex
                min-h-11
                items-center
                justify-center
                gap-2
                rounded-full
                border
                px-5
                text-[10px]
                font-medium
                tracking-[0.18em]
                transition-all
                duration-300

                sm:min-h-0
                sm:justify-start
                sm:rounded-none
                sm:border-0
                sm:bg-transparent
                sm:px-0

                ${
                  isDownloading
                    ? `border-slate-200 bg-white/80 ${styles.download}`
                    : "border-slate-200 bg-white/60 text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-900"
                }
              `}
            >
              {isDownloading ? (
                <>
                  <span className="animate-[softPop_300ms_ease-out]">
                    THANK YOU
                  </span>

                  <span className="text-xs">
                    ♡
                  </span>
                </>
              ) : (
                <>
                  DOWNLOAD
                  <span className="text-base">↓</span>
                </>
              )}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}