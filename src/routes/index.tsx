import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ExternalLink,
  Maximize2,
  Pause,
  Play,
  RotateCcw,
  Rocket,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import solarPoster from "@/assets/cinematic-solar-system.jpg";
import moonPoster from "@/assets/cinematic-moon.jpg";
import marsPoster from "@/assets/cinematic-mars.jpg";
import voyagerPoster from "@/assets/cinematic-voyager.jpg";
import solarVideo from "@/assets/cinematic-solar-system.mp4.asset.json";
import moonVideo from "@/assets/cinematic-moon.mp4.asset.json";
import marsVideo from "@/assets/cinematic-mars.mp4.asset.json";
import voyagerVideo from "@/assets/cinematic-voyager.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Into The Remnants — A Cinematic Doraemon Space Odyssey" },
      {
        name: "description",
        content:
          "Watch Doraemon and Nobita explore NASA hardware on the Moon, Mars and in interstellar space in a cinematic 3D animated episode.",
      },
      { property: "og:title", content: "Into The Remnants — A Cinematic Doraemon Space Odyssey" },
      {
        property: "og:description",
        content: "A realistic 3D space episode about the Moon, Mars, Voyager and the science their hardware made possible.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Source = { label: string; url: string };
type Artifact = {
  name: string;
  year: string;
  text: string;
  science: string;
  sources?: Source[];
};
type Subtitle = { speaker: string; text: string; at: number; until: number };
type Scene = {
  id: string;
  act: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  status: string;
  tone: string;
  video: string;
  poster: string;
  duration: number;
  lines: Subtitle[];
  artifacts: Artifact[];
};

const SCENES: Scene[] = [
  {
    id: "journey",
    act: "Prologue",
    shortTitle: "Departure",
    title: "Into The Remnants",
    subtitle: "A Doraemon Space Odyssey",
    status: "TIME-SPACE POD 01 · DEPARTING EARTH",
    tone: "text-primary",
    video: solarVideo.url,
    poster: solarPoster,
    duration: 14000,
    lines: [
      {
        speaker: "Nobita",
        text: "Whoa! Are we really going to visit machines humans left all across space?",
        at: 0,
        until: 0.48,
      },
      {
        speaker: "Doraemon",
        text: "Yes! They aren't just leftovers. Every one is a time capsule with a discovery inside.",
        at: 0.48,
        until: 1,
      },
    ],
    artifacts: [
      {
        name: "A solar system of time capsules",
        year: "1969 – today",
        text: "Some spacecraft finished their missions. Others still send signals home from interstellar space.",
        science: "Each relic marks a moment when human curiosity became a real journey.",
      },
    ],
  },
  {
    id: "moon",
    act: "Chapter I",
    shortTitle: "Moon",
    title: "The Lunar Graveyard",
    subtitle: "Humanity's First Footprint",
    status: "DORMANT · ETERNAL MISSION",
    tone: "text-moon",
    video: moonVideo.url,
    poster: moonPoster,
    duration: 16000,
    lines: [
      {
        speaker: "Nobita",
        text: "That spidery metal bug stayed behind? Is someone littering on the Moon?!",
        at: 0,
        until: 0.42,
      },
      {
        speaker: "Doraemon",
        text: "That's an Apollo descent stage! Saving weight helped astronauts bring 382 kg of lunar rock and soil home.",
        at: 0.42,
        until: 1,
      },
    ],
    artifacts: [
      {
        name: "Apollo Descent Stages",
        year: "1969–1972",
        text: "The bottom halves of the Lunar Modules stayed behind as launch pads for the trip home.",
        science: "Across six Apollo Moon landings, astronauts returned 382 kg (842 lb) of rock and soil for study.",
        sources: [{ label: "Moon Exploration", url: "https://science.nasa.gov/moon/exploration/" }],
      },
      {
        name: "Toss Zones",
        year: "1969–1972",
        text: "Empty tool bags, TV cameras and spare gear were left to lighten the load for liftoff.",
        science: "Every kilogram left behind meant another kilogram of samples could return to Earth.",
      },
      {
        name: "ALSEP Science Stations",
        year: "1969–1977",
        text: "Small nuclear-powered laboratories kept working after the astronauts left.",
        science: "They measured moonquakes, solar wind and the Moon's thin atmosphere.",
      },
      {
        name: "Surprise Human Touches",
        year: "1971",
        text: "Golf balls, family photos, plaques and the Fallen Astronaut memorial remain on the Moon.",
        science: "They remind us that explorers are people, too.",
      },
    ],
  },
  {
    id: "mars",
    act: "Chapter II",
    shortTitle: "Mars",
    title: "The Red Planet",
    subtitle: "Rovers That Never Came Home",
    status: "SLEEPING IN THE DUST",
    tone: "text-mars",
    video: marsVideo.url,
    poster: marsPoster,
    duration: 16000,
    lines: [
      {
        speaker: "Nobita",
        text: "Spirit and Opportunity were only designed to explore for 90 days?",
        at: 0,
        until: 0.42,
      },
      {
        speaker: "Doraemon",
        text: "Yes—and Opportunity drove 45.16 km! Both rovers found evidence that liquid water once flowed on Mars.",
        at: 0.42,
        until: 1,
      },
    ],
    artifacts: [
      {
        name: "Heat Shields & Backshells",
        year: "2012, 2021",
        text: "These shells protected Curiosity and Perseverance during their fiery fall through the Martian sky.",
        science: "They taught engineers how to land heavy rovers safely on Mars.",
      },
      {
        name: "Viking 1",
        year: "1976",
        text: "The first lander to work on Mars sent home photographs of a world we'd only dreamed of.",
        science: "It ran the first experiments searching for signs of life on Mars.",
      },
      {
        name: "Pathfinder & Sojourner",
        year: "1997",
        text: "A lander and the first small rover to roll across another planet.",
        science: "They captured panoramas and studied Martian rocks and weather.",
      },
      {
        name: "Spirit & Opportunity",
        year: "2004–2018",
        text: "Built for 90-day missions, they explored for years. Opportunity drove 45.16 km (28.06 miles).",
        science: "Both found evidence that liquid water once flowed on Mars. Spirit fell silent after becoming stuck and losing solar power; Opportunity was silenced by a global dust storm.",
        sources: [
          { label: "Opportunity Mission", url: "https://science.nasa.gov/mission/mer-opportunity/" },
          { label: "Spirit Mission End", url: "https://www.jpl.nasa.gov/news/nasas-spirit-rover-completes-mission-on-mars/" },
        ],
      },
    ],
  },
  {
    id: "deep",
    act: "Chapter III",
    shortTitle: "Beyond",
    title: "Deep Space & Beyond",
    subtitle: "The Golden Record in the Endless Void",
    status: "INTERSTELLAR · STILL TRANSMITTING",
    tone: "text-gold",
    video: voyagerVideo.url,
    poster: voyagerPoster,
    duration: 19000,
    lines: [
      {
        speaker: "Nobita",
        text: "Are those tiny probes really carrying music from Earth all by themselves?",
        at: 0,
        until: 0.32,
      },
      {
        speaker: "Doraemon",
        text: "Voyager 1 and 2 crossed into interstellar space in 2012 and 2018, carrying the Golden Record.",
        at: 0.32,
        until: 0.68,
      },
      {
        speaker: "Doraemon",
        text: "And back in 1979, Voyager 1 discovered active volcanoes on Jupiter's moon Io!",
        at: 0.68,
        until: 1,
      },
    ],
    artifacts: [
      {
        name: "Voyager 1 & 2",
        year: "1977 – today",
        text: "The twin probes explored the giant planets; Voyager 2 visited all four.",
        science: "Voyager 1 discovered active volcanoes on Io in 1979; the mission also revealed new rings and moons.",
        sources: [
          { label: "Io Exploration", url: "https://science.nasa.gov/jupiter/jupiter-moons/io/exploration/" },
          { label: "Voyager Mission Overview", url: "https://science.nasa.gov/mission/voyager/mission-overview/" },
        ],
      },
      {
        name: "Crossing the Heliopause",
        year: "2012 · 2018",
        text: "Voyager 1 crossed the heliopause on August 25, 2012; Voyager 2 followed on November 5, 2018.",
        science: "They became the first human-made objects in interstellar space, where they measure particles, plasma waves and magnetic fields.",
        sources: [
          { label: "Voyager Fast Facts", url: "https://science.nasa.gov/mission/voyager/fast-facts/" },
          { label: "Interstellar Mission", url: "https://science.nasa.gov/mission/voyager/interstellar-mission/" },
        ],
      },
      {
        name: "The Golden Record",
        year: "1977",
        text: "A gold-plated disc carries greetings in 55 languages, music and sounds of Earth.",
        science: "It is a time capsule telling anyone out there who we are.",
      },
    ],
  },
];

const QUIZ = [
  { q: "Why did Apollo astronauts leave gear on the Moon?", a: ["To make room for moon rocks", "Aliens asked them to", "They forgot it"], c: 0 },
  { q: "How long were Spirit and Opportunity built to last?", a: ["10 years", "90 days", "1 week"], c: 1 },
  { q: "What does Voyager carry for anyone who finds it?", a: ["A dorayaki", "A golf ball", "The Golden Record"], c: 2 },
];

const KINDER_GARDEN_URL = "https://kindergarden-nasa.vercel.app";

function KinderGardenFooter() {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 px-5 pb-3 font-sci text-[10px] tracking-wider text-muted-foreground md:px-8">
      <span>NASA-SOURCED SPACE STORIES</span>
      <a
        href={KINDER_GARDEN_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Kinder Garden <ExternalLink className="size-3" aria-hidden="true" />
      </a>
    </footer>
  );
}

export function Index() {
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [logOpen, setLogOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [picks, setPicks] = useState<(number | null)[]>(QUIZ.map(() => null));
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLElement>(null);
  const scene = SCENES[sceneIndex];
  const line = scene.lines.find((item) => progress >= item.at && progress < item.until) ?? scene.lines[scene.lines.length - 1];
  const score = picks.filter((pick, index) => pick === QUIZ[index]?.c).length;
  const quizFinished = quizStep >= QUIZ.length;

  useEffect(() => {
    if (!started || !playing || logOpen || quizOpen || showEnd) return;
    const timer = window.setInterval(() => {
      setProgress((current) => Math.min(1, current + 100 / scene.duration));
    }, 100);
    return () => window.clearInterval(timer);
  }, [started, playing, logOpen, quizOpen, showEnd, scene.duration]);

  useEffect(() => {
    if (!started || progress < 1) return;
    if (sceneIndex === SCENES.length - 1) {
      setPlaying(false);
      setShowEnd(true);
      return;
    }
    setSceneIndex((current) => current + 1);
    setProgress(0);
  }, [progress, sceneIndex, started]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (started && playing && !logOpen && !quizOpen && !showEnd) {
      const playback = video.play();
      if (playback) void playback.catch(() => undefined);
    } else {
      video.pause();
    }
  }, [started, playing, sceneIndex, logOpen, quizOpen, showEnd]);

  function goToScene(index: number) {
    setStarted(true);
    setSceneIndex(index);
    setProgress(0);
    setShowEnd(false);
    setQuizOpen(false);
    setLogOpen(false);
    setPlaying(true);
  }

  function startEpisode() {
    setStarted(true);
    setSceneIndex(0);
    setProgress(0);
    setShowEnd(false);
    setPlaying(true);
  }

  function previousScene() {
    if (progress > 0.05) {
      setProgress(0);
      return;
    }
    if (sceneIndex > 0) goToScene(sceneIndex - 1);
  }

  function nextScene() {
    if (sceneIndex === SCENES.length - 1) {
      setProgress(1);
      setShowEnd(true);
      setPlaying(false);
      return;
    }
    goToScene(sceneIndex + 1);
  }

  function openQuiz() {
    setQuizStep(0);
    setPicks(QUIZ.map(() => null));
    setQuizOpen(true);
    setShowEnd(false);
    setPlaying(false);
  }

  function closeQuiz() {
    setQuizOpen(false);
    if (progress >= 1 && sceneIndex === SCENES.length - 1) setShowEnd(true);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * -10;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
    frameRef.current?.style.setProperty("--scene-x", `${x}px`);
    frameRef.current?.style.setProperty("--scene-y", `${y}px`);
  }

  return (
    <main
      id="episode"
      ref={frameRef}
      data-scene-ready="true"
      onPointerMove={handlePointerMove}
      className="relative isolate h-[100svh] min-h-[620px] overflow-hidden bg-background text-foreground"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          key={scene.id}
          ref={videoRef}
          src={scene.video}
          poster={scene.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={`${scene.title} cinematic scene`}
          className="cinematic-media size-full object-cover"
        />
      </div>
      <div className="vignette pointer-events-none absolute inset-0 z-10" />
      <div className="film-grain pointer-events-none absolute inset-0 z-10" />

      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-3 px-5 py-5 md:px-8">
        <button
          onClick={startEpisode}
          className="flex items-center gap-2 text-left font-sci text-xs font-bold tracking-[0.18em] text-foreground"
          aria-label="Return to episode opening"
        >
          <span className="grid size-9 place-items-center rounded-full border border-primary/60 bg-background/30 backdrop-blur-md">
            <Rocket className="size-4 text-primary" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">INTO THE REMNANTS</span>
        </button>
        <div className="flex items-center gap-2">
          {started && (
            <button
              onClick={() => setLogOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2 font-sci text-[10px] tracking-wider backdrop-blur-md transition hover:bg-primary hover:text-primary-foreground"
            >
              <BookOpen className="size-4" aria-hidden="true" /> MISSION LOG
            </button>
          )}
          <button
            onClick={() => void frameRef.current?.requestFullscreen?.()}
            aria-label="Enter fullscreen"
            className="grid size-10 place-items-center rounded-full border border-border bg-background/40 backdrop-blur-md transition hover:bg-primary hover:text-primary-foreground"
          >
            <Maximize2 className="size-4" aria-hidden="true" />
          </button>
        </div>
      </header>

      {!started ? (
        <section className="relative z-20 flex h-full items-center justify-center px-5 pb-16 text-center">
          <div className="title-reveal max-w-5xl">
            <p className="font-sci text-[10px] tracking-[0.45em] text-primary md:text-xs">A DORAEMON SPECIAL SPACE EPISODE</p>
            <h1 className="mt-5 font-dora text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
              Into The <span className="text-accent">Remnants</span>
            </h1>
            <p className="subtitle-text mx-auto mt-6 max-w-2xl text-base text-foreground/90 md:text-xl">
              A cinematic journey to the machines humanity left on the Moon, Mars and beyond.
            </p>
            <button
              onClick={startEpisode}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 font-dora text-xl font-bold text-secondary-foreground shadow-2xl transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Play className="size-5 fill-current transition group-hover:translate-x-0.5" aria-hidden="true" /> Watch episode
            </button>
            <p className="mt-5 font-sci text-[9px] tracking-[0.25em] text-muted-foreground">4 SCENES · 3 WORLDS · ONE HUMAN STORY</p>
          </div>
        </section>
      ) : (
        <>
          <section className="absolute inset-x-0 top-24 z-20 px-5 md:top-28 md:px-8">
            <p className={`font-sci text-[10px] tracking-[0.35em] ${scene.tone}`}>{scene.act.toUpperCase()}</p>
            <h2 className="subtitle-text mt-2 font-dora text-3xl font-bold md:text-5xl">{scene.title}</h2>
            <p className="subtitle-text mt-1 text-sm text-foreground/80">{scene.subtitle}</p>
          </section>

          <div className="absolute inset-x-0 bottom-32 z-20 flex justify-center px-5 md:bottom-36">
            <div key={`${scene.id}-${line.at}`} className="subtitle-reveal max-w-4xl text-center">
              <p className="font-sci text-[10px] font-bold tracking-[0.3em] text-accent">{line.speaker.toUpperCase()}</p>
              <p className="subtitle-text mt-2 text-xl font-bold leading-snug md:text-3xl">“{line.text}”</p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-12 z-30 px-3 md:px-8">
            <div className="glass mx-auto max-w-6xl rounded-2xl px-3 py-3 md:px-5">
              <div className="flex items-center gap-2 md:gap-4">
                <button
                  onClick={() => setPlaying((current) => !current)}
                  aria-label={playing ? "Pause episode" : "Play episode"}
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition hover:scale-105"
                >
                  {playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current" />}
                </button>
                <button onClick={previousScene} aria-label="Previous scene" className="grid size-9 shrink-0 place-items-center rounded-full transition hover:bg-muted">
                  <ArrowLeft className="size-4" />
                </button>
                <button onClick={nextScene} aria-label="Next scene" className="grid size-9 shrink-0 place-items-center rounded-full transition hover:bg-muted">
                  <ArrowRight className="size-4" />
                </button>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={Math.round(progress * 1000)}
                  onChange={(event) => {
                    setProgress(Number(event.target.value) / 1000);
                    setShowEnd(false);
                  }}
                  aria-label="Episode progress"
                  className="episode-range min-w-16 flex-1"
                />
                <span className="hidden font-sci text-[10px] text-muted-foreground sm:inline">{sceneIndex + 1} / {SCENES.length}</span>
              </div>
              <nav aria-label="Episode chapters" className="mt-2 grid grid-cols-4 gap-1">
                {SCENES.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => goToScene(index)}
                    aria-current={index === sceneIndex ? "true" : undefined}
                    className={`rounded-full px-2 py-1.5 font-sci text-[9px] tracking-wider transition ${index === sceneIndex ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                  >
                    {item.shortTitle.toUpperCase()}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}

      {showEnd && !quizOpen && (
        <section className="absolute inset-0 z-40 flex items-center justify-center bg-background/65 px-5 text-center backdrop-blur-sm">
          <div className="title-reveal max-w-3xl">
            <p className="font-sci text-xs tracking-[0.35em] text-primary">EVERY RELIC WHISPERS</p>
            <h2 className="mt-4 font-dora text-5xl font-bold text-accent md:text-7xl">“We dared to explore.”</h2>
            <p className="mt-5 text-lg text-foreground/85">Ready to help Nobita pass his space cadet test?</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button onClick={openQuiz} className="rounded-full bg-secondary px-7 py-3 font-dora text-lg font-bold text-secondary-foreground transition hover:scale-105">
                Take the quiz
              </button>
              <button onClick={startEpisode} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-7 py-3 font-dora text-lg font-bold transition hover:bg-muted">
                <RotateCcw className="size-4" /> Watch again
              </button>
            </div>
          </div>
        </section>
      )}

      {logOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-background/60 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Mission log">
          <button className="absolute inset-0 cursor-default" onClick={() => setLogOpen(false)} aria-label="Close mission log overlay" />
          <aside className="relative h-full w-full max-w-xl overflow-y-auto border-l border-border bg-popover px-6 py-6 shadow-2xl md:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-sci text-[10px] tracking-[0.3em] text-primary">HISTORY-SCOPE ARCHIVE</p>
                <h2 className="mt-2 font-dora text-3xl font-bold">Mission Log</h2>
              </div>
              <button onClick={() => setLogOpen(false)} aria-label="Close mission log" className="grid size-10 place-items-center rounded-full border border-border transition hover:bg-muted">
                <X className="size-5" />
              </button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {SCENES.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSceneIndex(index);
                    setProgress(0);
                    setShowEnd(false);
                  }}
                  className={`rounded-full px-3 py-1.5 font-sci text-[9px] tracking-wider ${index === sceneIndex ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  {item.shortTitle.toUpperCase()}
                </button>
              ))}
            </div>
            <p className={`mt-8 font-sci text-[10px] tracking-[0.25em] ${scene.tone}`}>{scene.status}</p>
            <div className="mt-3 divide-y divide-border border-y border-border">
              {scene.artifacts.map((artifact) => (
                <article key={artifact.name} className="py-6">
                  <p className={`font-sci text-[10px] tracking-wider ${scene.tone}`}>{artifact.year}</p>
                  <h3 className="mt-1 font-dora text-2xl font-bold">{artifact.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{artifact.text}</p>
                  <p className="mt-3 text-sm leading-relaxed"><span className="font-bold text-accent">Science: </span>{artifact.science}</p>
                  {artifact.sources && (
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                      {artifact.sources.map((source) => (
                        <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-sci text-[10px] tracking-wide text-primary underline decoration-primary/40 underline-offset-4 hover:text-accent">
                          NASA: {source.label} <ExternalLink className="size-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </aside>
        </div>
      )}

      {quizOpen && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-background/80 px-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Space Cadet Quiz">
          <section className="glass w-full max-w-2xl rounded-3xl p-6 md:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-sci text-[10px] tracking-[0.3em] text-primary">NOBITA'S SPACE TEST</p>
                <h2 className="mt-2 font-dora text-3xl font-bold">Space Cadet Quiz</h2>
              </div>
              <button onClick={closeQuiz} aria-label="Close quiz" className="grid size-10 place-items-center rounded-full border border-border transition hover:bg-muted">
                <X className="size-5" />
              </button>
            </div>
            {!quizFinished ? (
              <div className="mt-8">
                <p className="font-sci text-[10px] text-muted-foreground">QUESTION {quizStep + 1} OF {QUIZ.length}</p>
                <h3 className="mt-3 text-xl font-bold leading-relaxed">{QUIZ[quizStep].q}</h3>
                <div className="mt-6 grid gap-3">
                  {QUIZ[quizStep].a.map((option, optionIndex) => {
                    const picked = picks[quizStep] === optionIndex;
                    const answered = picks[quizStep] !== null;
                    const correct = optionIndex === QUIZ[quizStep].c;
                    return (
                      <button
                        key={option}
                        disabled={answered}
                        onClick={() => setPicks((current) => current.map((value, index) => index === quizStep ? optionIndex : value))}
                        className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left font-bold transition ${answered && correct ? "border-online bg-online/20" : picked ? "border-destructive bg-destructive/20" : "border-border bg-muted/60 hover:border-primary hover:bg-primary/10"}`}
                      >
                        {option}
                        {answered && correct && <Check className="size-5 text-online" />}
                      </button>
                    );
                  })}
                </div>
                {picks[quizStep] !== null && (
                  <button onClick={() => setQuizStep((current) => current + 1)} className="mt-6 ml-auto flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-dora font-bold text-primary-foreground">
                    {quizStep === QUIZ.length - 1 ? "See my score" : "Next question"} <ArrowRight className="size-4" />
                  </button>
                )}
              </div>
            ) : (
              <div className="mt-8 text-center">
                <p className="font-dora text-6xl font-bold text-accent">{score}/{QUIZ.length}</p>
                <p className="mt-4 text-lg text-muted-foreground">
                  {score === QUIZ.length ? "Perfect score! You earned a whole stack of dorayaki!" : "Great effort! Revisit the mission log and try once more."}
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <button onClick={openQuiz} className="rounded-full bg-primary px-6 py-3 font-dora font-bold text-primary-foreground">Try again</button>
                  <button onClick={closeQuiz} className="rounded-full border border-border px-6 py-3 font-dora font-bold">Back to episode</button>
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      <KinderGardenFooter />
    </main>
  );
}
