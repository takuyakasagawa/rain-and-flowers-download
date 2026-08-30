"use client";

import { useEffect, useRef, useState } from "react";

type AudioPlayerProps = {
  src: string;
};

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const stopOtherPlayers = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      if (customEvent.detail === src) return;

      const audio = audioRef.current;
      if (!audio) return;

      audio.pause();
    };

    window.addEventListener(
      "audio-player-play",
      stopOtherPlayers
    );

    return () => {
      window.removeEventListener(
        "audio-player-play",
        stopOtherPlayers
      );
    };
  }, [src]);

  // 再生 / 一時停止
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      window.dispatchEvent(
        new CustomEvent("audio-player-play", {
          detail: src,
        })
      );

      try {
        await audio.play();
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    } else {
      audio.pause();
    }
  };

  // 最初に戻る
  const restartAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    setCurrentTime(0);
  };

  // 時間表示
  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const progress =
    duration > 0 ? (currentTime / duration) * 100 : 0;

  // シーク
  const seekToPointer = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const audio = audioRef.current;
    if (!audio || duration <= 0) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const position =
      (event.clientX - rect.left) / rect.width;

    const newTime =
      Math.max(0, Math.min(1, position)) * duration;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // シーク開始
  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    seekToPointer(event);
  };

  // シーク中
  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (
      !event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      return;
    }

    seekToPointer(event);
  };

  return (
    <div className="w-full min-w-[220px] sm:w-[280px]">
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        onLoadedMetadata={(event) => {
          const audio = event.currentTarget;

          if (Number.isFinite(audio.duration)) {
            setDuration(audio.duration);
          }
        }}
        onDurationChange={(event) => {
          const audio = event.currentTarget;

          if (Number.isFinite(audio.duration)) {
            setDuration(audio.duration);
          }
        }}
        onCanPlay={(event) => {
          const audio = event.currentTarget;

          if (Number.isFinite(audio.duration)) {
            setDuration(audio.duration);
          }
        }}
        onTimeUpdate={(event) => {
          const audio = event.currentTarget;

          setCurrentTime(audio.currentTime);

          if (Number.isFinite(audio.duration)) {
            setDuration(audio.duration);
          }
        }}
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
        onEnded={(event) => {
          setIsPlaying(false);
          setCurrentTime(0);
          event.currentTarget.currentTime = 0;
        }}
      />

      {/* CONTROLS */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* PLAY / PAUSE */}
          <button
            type="button"
            onClick={togglePlay}
            className="group flex items-center gap-3"
          >
            <span
              className={`
                flex h-11 w-11 items-center justify-center
                rounded-full border transition-all duration-300
                ${
                  isPlaying
                    ? "border-sky-300 bg-sky-400 text-white"
                    : "border-slate-300 bg-white text-slate-600 group-hover:border-sky-300 group-hover:text-sky-500"
                }
              `}
            >
              {isPlaying ? "Ⅱ" : "▶"}
            </span>

            <div className="text-left">
              <p
                className={`text-[10px] font-semibold tracking-[0.18em] ${
                  isPlaying
                    ? "text-sky-500"
                    : "text-slate-600"
                }`}
              >
                {isPlaying ? "PLAYING" : "LISTEN"}
              </p>

              {isPlaying && (
                <p className="mt-1 text-[9px] tracking-[0.12em] text-sky-400">
                  NOW PLAYING
                </p>
              )}
            </div>
          </button>

          {/* RESTART */}
          <button
            type="button"
            onClick={restartAudio}
            aria-label="最初に戻る"
            title="最初に戻る"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border border-slate-200
              bg-white text-base text-slate-400
              transition
              hover:border-sky-300 hover:text-sky-500
            "
          >
            ↺
          </button>
        </div>

        {/* TIME */}
        <p className="whitespace-nowrap text-[11px] font-medium tabular-nums text-slate-500">
          {formatTime(currentTime)}
          <span className="mx-1.5 text-slate-300">/</span>
          {formatTime(duration)}
        </p>
      </div>

      {/* SEEK BAR */}
      <div
        role="slider"
        aria-label="Audio progress"
        aria-valuemin={0}
        aria-valuemax={duration || 0}
        aria-valuenow={currentTime}
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        className="mt-4 flex h-10 touch-none cursor-pointer items-center"
      >
        <div className="relative h-[5px] w-full rounded-full bg-slate-200">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-sky-400"
            style={{
              width: `${progress}%`,
            }}
          />

          {duration > 0 && (
            <div
              className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 shadow-sm"
              style={{
                left: `${progress}%`,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}