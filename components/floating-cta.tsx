"use client"

import { MessageCircle, Instagram } from "lucide-react"

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      <a
        href="https://wa.me/436601234567"
        target="_blank"
        className="flex items-center gap-2 rounded-full bg-white px-5 py-4 text-black shadow-2xl transition hover:scale-110"
      >
        <MessageCircle size={20} />
        WhatsApp
      </a>

      <a
        href="https://instagram.com/DEINNAME"
        target="_blank"
        className="flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-5 py-4 text-white backdrop-blur-xl transition hover:scale-110"
      >
        <Instagram size={20} />
        Instagram
      </a>

    </div>
  )
}
