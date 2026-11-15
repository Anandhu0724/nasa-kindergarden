import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import doraemon from "@/assets/doraemon.png.asset.json";
import nobita from "@/assets/nobita.png.asset.json";
import podVideo from "@/assets/pod_explorers.mp4.asset.json";
import solarVideo from "@/assets/solar_journey.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Into The Remnants — A Doraemon Space Odyssey" },
      { name: "description", content: "Join Doraemon and Nobita to discover the NASA rovers, landers and probes left across the solar system — and the science they made possible." },
      { property: "og:title", content: "Into The Remnants — A Doraemon Space Odyssey" },
      { property: "og:description", content: "A kid-friendly space story about NASA hardware on the Moon, Mars and beyond." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Artifact = { name: string; year: string; text: string; science: string };
type Act = {
  id: string; act: string; title: string; subtitle: string; tone: string;
  nobita: string; doraemon: string; status: string; online: boolean;
  artifacts: Artifact[];
};

const ACTS: Act[] = [
  {
    id: "moon", act: "Act I", title: "The Lunar Graveyard", subtitle: "Humanity's First Footprint", tone: "text-moon",
    nobita: "Doraemon! Look at that spidery metal bug down there in the dust! Is someone littering on the Moon?!",
    doraemon: "Ho ho! That's an Apollo Descent Stage! Leaving heavy gear behind saved weight so astronauts could carry hundreds of kilograms of moon rocks back to Earth!",
    status: "DORMANT / ETERNAL MISSION", online: false,
    artifacts: [
      { name: "Apollo Descent Stages", year: "1969–1972", text: "The bottom halves of the Lunar Modules stayed behind as launch pads for the trip home.", science: "Made it possible to bring 382 kg of moon rocks to Earth." },
      { name: "Toss Zones", year: "1969–1972", text: "Empty tool bags, TV cameras and spare gear were tossed out to lighten the load for liftoff.", science: "Every kilogram left behind meant another kilogram of samples." },
      { name: "ALSEP Science Stations", year: "1969–1977", text: "Little nuclear-powered labs that kept working for years after the astronauts left.", science: "Measured moonquakes, solar wind and the Moon's thin atmosphere." },
      { name: "Surprise Human Touches", year: "1971", text: "Alan Shepard's golf balls, family photos, plaques and the Fallen Astronaut memorial.", science: "Reminders that explorers are people, too." },
    ],
  },
  {
    id: "mars", act: "Act II", title: "The Red Planet", subtitle: "Rovers That Never Came Home", tone: "text-mars",
    nobita: "Aw, look at little Spirit and Opportunity... They worked so hard until dust storms tucked them in. Do machines feel lonely, Doraemon?",
    doraemon: "They aren't lonely, Nobita! Their tire tracks are etched into Mars forever — monuments of human curiosity reaching across the stars!",
    status: "SLEEPING IN THE DUST", online: false,
    artifacts: [
      { name: "Heat Shields & Backshells", year: "2012, 2021", text: "Shells that protected Curiosity and Perseverance during their fiery fall through the Martian sky.", science: "Taught engineers how to land heavy rovers safely on Mars." },
      { name: "Viking 1", year: "1976", text: "The first lander to work on Mars, sending home photos of a world we'd only dreamed of.", science: "Ran the first experiments searching for signs of life." },
      { name: "Pathfinder & Sojourner", year: "1997", text: "A lander and the first little rover to roll across another planet.", science: "Snapped panoramas and studied Martian rocks and weather." },
      { name: "Spirit & Opportunity", year: "2004–2018", text: "Built for 90-day missions, they explored for years. Opportunity drove over 45 km!", science: "Found evidence that liquid water once flowed on Mars." },
    ],
  },
  {
    id: "deep", act: "Act III", title: "Deep Space & Beyond", subtitle: "The Golden Record in the Endless Void", tone: "text-gold",
    nobita: "Whoa... it's so dark out here past the giant planets! Are those tiny probes really carrying music from Earth all by themselves?",
    doraemon: "That's right! Voyager 1 and 2 crossed into interstellar space carrying the Golden Record. It's a message in a bottle cast across the universe!",
    status: "INTERSTELLAR TRAVEL", online: true,
    artifacts: [
      { name: "Voyager 1 & 2", year: "1977 – today", text: "Twin probes that toured Jupiter, Saturn, Uranus and Neptune, then kept going.", science: "Discovered volcanoes on Io and new rings and moons." },
      { name: "Crossing the Heliopause", year: "2012, 2018", text: "Both Voyagers left the Sun's bubble — the first human-made objects in interstellar space.", science: "Measured where the Sun's influence ends." },
      { name: "The Golden Record", year: "1977", text: "A gold-plated disc with greetings in 55 languages, music and sounds of Earth.", science: "A time capsule telling anyone out there who we are." },
    ],
  },
];

const QUIZ = [
  { q: "Why did Apollo astronauts leave gear on the Moon?", a: ["To make room for moon rocks", "Aliens asked them to", "They forgot it"], c: 0 },
  { q: "How long were Spirit and Opportunity built to last?", a: ["10 years", "90 days", "1 week"], c: 1 },
  { q: "What does Voyager carry for anyone who finds it?", a: ["A dorayaki", "A golf ball", "The Golden Record"], c: 2 },
];

function Character({ src, name, role, text, flip }: { src: string; name: string; role: string; text: string; flip?: boolean }) {
  return (
    <div className={`flex items-end gap-4 ${flip ? "flex-row-reverse text-right" : ""}`}>
      <div className="size-20 shrink-0 overflow-hidden rounded-full border-4 border-primary bg-bubble md:size-24">
        <img src={src} alt={name} className="size-full object-contain p-1" loading="lazy" />
      </div>
      <div className="bubble flex-1 p-5">
        <p className="font-dora text-lg font-bold text-primary">{name} <span className="text-xs font-medium text-bubble-foreground/60">· {role}</span></p>
        <p className="mt-1 leading-relaxed">"{text}"</p>
      </div>
    </div>
  );
}

function ActSection({ act }: { act: Act }) {
  const [scanned, setScanned] = useState(false);
  return (
    <section id={act.id} className="mx-auto max-w-5xl px-5 py-24">
      <p className={`font-sci text-sm tracking-[0.3em] ${act.tone}`}>{act.act.toUpperCase()}</p>
      <h2 className="mt-2 font-dora text-4xl font-bold md:text-6xl">{act.title}</h2>
      <p className="mt-2 text-lg text-muted-foreground">{act.subtitle}</p>
      <div className="mt-10 space-y-6">
        <Character src={nobita.url} name="Nobita" role="Time-Space Pod #01" text={act.nobita} />
        <Character src={doraemon.url} name="Doraemon" role="Future Gadget Guide" text={act.doraemon} flip />
      </div>
      <div className="glass mt-12 rounded-3xl p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-sci text-sm tracking-widest text-primary">HISTORY-SCOPE ZOOMER</p>
          <span className={`font-sci text-xs ${act.online ? "text-online" : "text-muted-foreground"}`}>● {act.status}</span>
        </div>
        {!scanned ? (
          <button onClick={() => setScanned(true)} className="mt-6 w-full rounded-2xl bg-primary px-6 py-4 font-dora text-xl font-bold text-primary-foreground transition hover:scale-[1.02]">
            🔭 Scan the artifacts
          </button>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {act.artifacts.map((a, i) => (
              <article key={a.name} className="rounded-2xl border border-border bg-muted p-5 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}>
                <p className={`font-sci text-xs ${act.tone}`}>{a.year}</p>
                <h3 className="mt-1 font-dora text-xl font-bold">{a.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
                <p className="mt-3 text-sm"><span className="font-bold text-accent">Science: </span>{a.science}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Quiz() {
  const [picks, setPicks] = useState<(number | null)[]>(QUIZ.map(() => null));
  const score = picks.filter((p, i) => p === QUIZ[i].c).length;
  const done = picks.every((p) => p !== null);
  return (
    <section id="quiz" className="mx-auto max-w-3xl px-5 py-24">
      <h2 className="text-center font-dora text-4xl font-bold">Space Cadet Quiz</h2>
      <p className="mt-2 text-center text-muted-foreground">Help Nobita pass his test — no napping!</p>
      <div className="mt-10 space-y-6">
        {QUIZ.map((item, qi) => (
          <div key={item.q} className="glass rounded-2xl p-5">
            <p className="font-bold">{qi + 1}. {item.q}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.a.map((opt, oi) => {
                const picked = picks[qi] === oi;
                const state = picks[qi] === null ? "bg-muted hover:bg-primary hover:text-primary-foreground" : oi === item.c ? "bg-online text-primary-foreground" : picked ? "bg-destructive text-destructive-foreground" : "bg-muted opacity-50";
                return (
                  <button key={opt} disabled={picks[qi] !== null} onClick={() => setPicks((p) => p.map((v, i) => (i === qi ? oi : v)))} className={`rounded-full px-4 py-2 text-sm font-bold transition ${state}`}>{opt}</button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {done && (
        <div className="mt-8 flex items-center gap-4">
          <img src={doraemon.url} alt="Doraemon" className="size-20 rounded-full border-4 border-primary bg-bubble object-contain" />
          <div className="bubble flex-1 p-5 font-dora text-lg">
            {score === QUIZ.length ? "Perfect score! You earned a whole stack of dorayaki! 🎉" : `You got ${score}/${QUIZ.length}. Scroll back up and scan again — you've got this!`}
          </div>
        </div>
      )}
    </section>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="starfield pointer-events-none fixed inset-0 -z-10 opacity-70" />
      <header className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
        <video src={solarVideo.url} autoPlay muted loop playsInline className="absolute inset-0 size-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
        <div className="relative max-w-3xl text-center">
          <p className="font-sci text-xs tracking-[0.4em] text-primary">A DORAEMON SPECIAL SPACE EPISODE</p>
          <h1 className="mt-4 font-dora text-5xl font-bold leading-tight md:text-7xl">Into The <span className="text-accent">Remnants</span></h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">Since the 1960s, NASA has left rovers, landers and probes all over the solar system. Hop in the Time-Space Safari Pod with Nobita and Doraemon to discover what they are — and what they taught us!</p>
          <a href="#intro" className="mt-10 inline-block rounded-full bg-secondary px-8 py-4 font-dora text-xl font-bold text-secondary-foreground transition hover:scale-105">▶ Start Episode</a>
        </div>
        <img src={doraemon.url} alt="" className="float-slow absolute bottom-10 right-6 hidden w-32 rounded-full bg-bubble p-2 md:block" />
      </header>

      <section id="intro" className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-24 md:grid-cols-2">
        <video src={podVideo.url} autoPlay muted loop playsInline controls className="w-full rounded-3xl border-4 border-primary" />
        <div className="space-y-6">
          <Character src={nobita.url} name="Nobita" role="Curious 4th grader" text="Is that a giant metal trash can floating past the window?! Did aliens have a junk sale?" />
          <Character src={doraemon.url} name="Doraemon" role="Robot cat from the future" text="Not quite! That's history — real hardware left by humans from Earth. Let's use the History-Scope Zoomer!" flip />
        </div>
      </section>

      <nav className="sticky top-0 z-20 glass mx-auto flex max-w-fit gap-2 rounded-b-2xl px-4 py-2 font-sci text-xs">
        {ACTS.map((a) => (<a key={a.id} href={`#${a.id}`} className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground">{a.title}</a>))}
        <a href="#quiz" className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground">Quiz</a>
      </nav>

      {ACTS.map((a) => <ActSection key={a.id} act={a} />)}

      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <div className="glass rounded-3xl p-8">
          <h2 className="font-dora text-3xl font-bold">Why it matters</h2>
          <p className="mt-4 text-lg text-muted-foreground">These aren't just "space junk" — they're time capsules. They mark the moment humanity stopped only looking up at the night sky and started reaching out to touch it.</p>
        </div>
      </section>

      <Quiz />

      <footer className="px-5 pb-16 text-center">
        <p className="text-muted-foreground">Every relic is a time capsule whispering:</p>
        <p className="mt-2 font-dora text-3xl text-accent">"We dared to explore."</p>
      </footer>
    </main>
  );
}
