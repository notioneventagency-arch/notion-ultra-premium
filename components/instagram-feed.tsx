"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Script from "next/script";

export default function InstagramFeed() {
  return (
    <section className="py-24" id="instagram">
      <div className="container mx-auto px-6">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Instagram Feed
        </h2>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe
            src="https://snapwidget.com/embed/DEINCODE"
            className="h-[600px] w-full"
          />
        </div>

      </div>
    </section>
  )
}
