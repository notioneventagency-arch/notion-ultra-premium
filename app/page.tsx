import Image from 'next/image'
import { Instagram, Music2, CalendarDays, ArrowRight, Play, Mail, MapPin } from 'lucide-react'

const works = [
  '/gallery/01.png',
  '/gallery/02.png',
  '/gallery/03.jpg',
  '/gallery/04.png',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-zinc-700/20 blur-3xl" />
      </div>

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <Image src="/ne2.png" alt="logo" width={42} height={42} className="rounded-full" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Creative Studio</p>
              <h1 className="font-semibold">Notion Agency</h1>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#events" className="hover:text-white transition">Events</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-32 text-center">
        <div className="absolute inset-0 opacity-20">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/videos/video.1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            NOW BOOKING 2026 EVENTS
          </div>

          <h1 className="text-6xl font-black uppercase leading-none tracking-tight md:text-8xl lg:text-[10rem]">
            Creative
            <br />
            Experiences
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Premium DJ marketing, cinematic event visuals, 3D branding, photography and social media campaigns for nightlife brands and modern events.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="group rounded-full border border-white bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-zinc-200">
              View Projects
              <ArrowRight className="ml-2 inline-block h-4 w-4 transition group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-white hover:bg-white/10">
              <Play className="mr-2 inline-block h-4 w-4" /> Showreel
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ['120+', 'Events'],
              ['15M+', 'Reach'],
              ['80+', 'Clients'],
              ['24/7', 'Creative Energy'],
            ].map(([v,l]) => (
              <div key={l} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="text-4xl font-black">{v}</div>
                <div className="mt-2 text-zinc-400">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Services</p>
            <h2 className="mt-3 text-5xl font-black">What We Create</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['DJ Event Marketing', 'Campaigns, promotion & viral nightlife branding'],
            ['Video Production', 'Cinematic reels, aftermovies & event visuals'],
            ['3D Logo Design', 'Luxury visual identity & animated graphics'],
            ['Social Media', 'Instagram growth & premium content creation'],
          ].map(([title, text]) => (
            <div key={title} className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-white/30 hover:bg-white/10">
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <Music2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Portfolio</p>
            <h2 className="mt-4 text-5xl font-black">Selected Work</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {works.map((image, i) => (
              <div key={i} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <Image src={image} alt="work" width={1200} height={1200} className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="text-2xl font-bold">Event Visual Experience</h3>
                    <p className="mt-2 text-zinc-400">Creative Direction / Nightlife / Branding</p>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Upcoming Events</p>
              <h2 className="mt-4 text-5xl font-black">Next Dates</h2>
            </div>
            <button className="rounded-full border border-white bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              Book Tickets
            </button>
          </div>

          <div className="mt-12 space-y-5">
            {[
              ['24 MAY', 'Summer Opening', 'Vienna'],
              ['03 JUN', 'Club Night', 'Berlin'],
              ['17 JUL', 'Festival Showcase', 'Ibiza'],
            ].map(([date, event, city]) => (
              <div key={event} className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 p-6 md:flex-row md:items-center">
                <div className="flex items-center gap-5">
                  <CalendarDays className="h-10 w-10 text-zinc-400" />
                  <div>
                    <h3 className="text-2xl font-bold">{event}</h3>
                    <p className="text-zinc-400">{city}</p>
                  </div>
                </div>
                <div className="text-xl font-semibold text-zinc-300">{date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Contact</p>
            <h2 className="mt-4 text-5xl font-black">Let’s Build Something Huge</h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-zinc-300"><Mail /> booking@notionagency.at</div>
              <div className="flex items-center gap-4 text-zinc-300"><Instagram /> @notionagency</div>
              <div className="flex items-center gap-4 text-zinc-300"><MapPin /> Vienna, Austria</div>
            </div>

            <form className="space-y-4">
              <input placeholder="Name" className="w-full rounded-2xl border border-white/10 bg-black/50 p-4 outline-none focus:border-white" />
              <input placeholder="Email" className="w-full rounded-2xl border border-white/10 bg-black/50 p-4 outline-none focus:border-white" />
              <textarea placeholder="Tell us about your project" rows={5} className="w-full rounded-2xl border border-white/10 bg-black/50 p-4 outline-none focus:border-white" />
              <button className="w-full rounded-2xl bg-white py-4 font-bold text-black transition hover:bg-zinc-200">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
