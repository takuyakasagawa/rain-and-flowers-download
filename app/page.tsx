// app/page.tsx

import Image from "next/image";
import TrackCard from "@/components/TrackCard";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const tracks = [
  {
    number: "01",
    title: "BRIGHT",
    audioSrc: "/audio/BRIGHT.mp3",
    tone: "pink" as const,
  },
  {
    number: "02",
    title: "ファジー",
    audioSrc: "/audio/fuzzy.mp3",
    tone: "blue" as const,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf9] text-slate-700">
      {/* HERO */}
      <section className="relative px-5 sm:min-h-screen sm:px-8 lg:px-12">
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute -left-48 top-20 h-[320px] w-[320px] rounded-full bg-sky-100/60 blur-3xl sm:h-[420px] sm:w-[420px]" />

        <div className="pointer-events-none absolute -right-48 bottom-10 h-[320px] w-[320px] rounded-full bg-pink-100/60 blur-3xl sm:h-[420px] sm:w-[420px]" />

        {/* HEADER */}
        <header className="relative z-10 flex items-start justify-between border-b border-slate-300/60 py-5 sm:py-6">
          <div>
            <p className="text-[10px] font-medium tracking-[0.14em] sm:text-xs sm:tracking-[0.16em]">
              RAIN AND FLOWERS
            </p>

            <p className="mt-1 text-[9px] tracking-[0.14em] text-slate-400 sm:text-[10px] sm:tracking-[0.16em]">
              FREE DOWNLOAD
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-pink-400">♡</p>

            <p className="mt-1 text-[9px] tracking-[0.14em] text-slate-400 sm:text-[10px]">
              2026
            </p>
          </div>
        </header>

{/* HERO PHOTO */}
<div className="pointer-events-none absolute right-0 top-[18%] z-[1] hidden w-[55%] lg:block">
  <div
    className="
      relative
      aspect-[4/3]
      overflow-hidden
      rounded-l-[3rem]
      border
      border-white/70
      shadow-[0_0_90px_35px_rgba(255,253,249,0.72)]
    "
  >
    <Image
      src="/images/hero.jpg"
      alt="Rain and Flowers"
      fill
      priority
      sizes="55vw"
      className="object-cover object-center"
    />

    {/* 左端だけ少し背景になじませる */}
    <div className="absolute inset-y-0 left-0 w-[6%] bg-gradient-to-r from-[#fffdf9]/55 to-transparent" />
  </div>
</div>

        {/* HERO BODY */}
        <div className="relative z-10 grid gap-10 py-16 sm:min-h-[78vh] sm:items-center sm:py-20 lg:grid-cols-[1fr_300px] lg:gap-12">
          {/* MAIN TITLE */}
          <div>
            <Reveal>
              <p className="mb-5 text-[10px] tracking-[0.2em] text-sky-400 sm:mb-6 sm:text-xs sm:tracking-[0.24em]">
                LIVE VENUE SPECIAL ✦
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-logo font-medium leading-[0.85] tracking-[-0.055em]">
                <span className="block text-[18vw] text-sky-500 sm:text-[12vw] lg:text-[10vw]">
                  RAIN
                </span>

                <span className="block pl-[12vw] text-[18vw] text-slate-700 sm:pl-[7vw] sm:text-[12vw] lg:text-[10vw]">
                  AND
                </span>

                <span className="block text-[16vw] text-pink-400 sm:text-[12vw] lg:text-[10vw]">
                  FLOWERS
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-md text-xs leading-6 text-slate-500 sm:mt-10 sm:text-sm sm:leading-7">
                Two songs for you.
                <br />
                ライブに来てくれたあなたへ
              </p>
            </Reveal>
          </div>
{/* MOBILE HERO PHOTO */}
<div className="relative lg:hidden">
  <div
    className="
      relative
      aspect-[16/10]
      overflow-hidden
      rounded-[2rem]
      border
      border-white/70
      shadow-[0_0_55px_18px_rgba(255,253,249,0.75)]
    "
  >
    <Image
      src="/images/hero.jpg"
      alt="Rain and Flowers"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />

    {/* 左端だけ少し背景になじませる */}
    <div className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-[#fffdf9]/45 to-transparent" />
  </div>
</div>
          {/* SPECIAL GIFT */}
          <Reveal delay={300}>
            <aside className="mx-auto w-full max-w-sm lg:translate-y-[250px] lg:max-w-none">
              <div className="rounded-[1.75rem] border border-sky-100 bg-white/80 p-5 shadow-[0_20px_50px_rgba(125,180,220,0.08)] backdrop-blur-sm sm:rounded-[2rem] lg:px-6 lg:py-5">
                <p className="text-[9px] tracking-[0.2em] text-sky-400 sm:text-[10px] sm:tracking-[0.22em]">
                  SPECIAL GIFT
                </p>

                <p className="mt-3 text-xs leading-5 sm:text-sm">
                  入場特典として
                  <br />
                  2曲の音源をプレゼントします。
                </p>

                <div className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-xs sm:text-sm">
                  <p>
                    <span className="mr-4 text-pink-300">
                      01
                    </span>
                    BRIGHT
                  </p>

                  <p>
                    <span className="mr-4 text-sky-300">
                      02
                    </span>
                    ファジー
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>

        {/* SCROLL */}
        <div className="relative z-10 flex justify-end border-t border-slate-300/60 py-4 text-[9px] tracking-[0.18em] text-slate-400 sm:py-5 sm:text-[10px] sm:tracking-[0.2em]">
          <p>SCROLL ↓</p>
        </div>
      </section>

      {/* TRACKS */}
      <section className="px-5 py-20 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="mb-10 flex items-end justify-between border-b border-slate-300/60 pb-5 sm:mb-14">
              <div>
                <p className="text-[9px] tracking-[0.22em] text-pink-300 sm:text-[10px] sm:tracking-[0.26em]">
                  FREE DOWNLOAD
                </p>

                <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em] sm:mt-3 sm:text-6xl">
                  TRACKS
                  <span className="ml-2 text-xl text-sky-300 sm:ml-3 sm:text-2xl">
                    ✦
                  </span>
                </h2>
              </div>

              <p className="hidden text-xs tracking-[0.15em] text-slate-400 sm:block">
                02 SONGS
              </p>
            </div>
          </Reveal>

          <div className="space-y-4 sm:space-y-5">
            {tracks.map((track, index) => (
              <Reveal
                key={track.number}
                delay={index * 120}
              >
                <TrackCard
                  number={track.number}
                  title={track.title}
                  audioSrc={track.audioSrc}
                  tone={track.tone}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-32 lg:px-12">
        <div className="pointer-events-none absolute left-[15%] top-0 h-48 w-48 rounded-full bg-pink-100/50 blur-3xl sm:h-56 sm:w-56" />

        <Reveal>
          <div className="relative mx-auto max-w-[1100px] rounded-[2rem] bg-sky-50/70 px-6 py-12 sm:rounded-[3rem] sm:px-14 sm:py-20">
            <p className="text-[9px] tracking-[0.22em] text-sky-400 sm:text-[10px] sm:tracking-[0.25em]">
              MESSAGE
            </p>

            <p className="mt-6 max-w-4xl text-[2rem] font-semibold leading-[1.25] tracking-[-0.04em] sm:mt-7 sm:text-5xl sm:leading-[1.35]">
              Thanks for coming.
              <br />
              Take these songs home
              <span className="text-pink-400"> ♡</span>
            </p>

            <p className="mt-8 max-w-xl text-xs leading-7 text-slate-500 sm:mt-10 sm:text-sm sm:leading-8">
              ライブに来てくれてありがとうございます。
              <br />
              Rain and Flowersから、2曲の音源をプレゼントします。
              <br />
              帰り道でも、またいつかでも。
              <br className="sm:hidden" />
              たくさん聴いてもらえたら嬉しいです。
            </p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}