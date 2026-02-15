"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-background text-black dark:text-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl"
        >
          Building meaningful education through the right connections.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-2xl text-black/70 dark:text-white/70"
        >
          We help students and guardians find tutors they can trust — quickly,
          transparently, and effectively.
        </motion.p>
      </section>

      {/* BENTO GRID */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* LARGE — WHO WE ARE */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="md:col-span-4 rounded-md border border-black/20 dark:border-white/20
            p-10 bg-background overflow-hidden"
          >
            <div className="relative h-48 mb-6 rounded-md overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                alt="Who we are"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Who We Are?</h2>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              We are an education-first platform designed to remove friction
              from the tutoring process. Our goal is simple: connect learners
              with tutors who genuinely fit their needs.
            </p>
          </motion.div>

          {/* SMALL — TRUST */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 rounded-md border border-black/20 dark:border-white/20
            p-8 flex flex-col justify-between overflow-hidden"
          >
            <div className="relative h-65 mb-4 rounded-md overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661962349501-10bf5556f79b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Trust"
                fill
                className="object-cover"
              />
            </div>

            <span className="text-xs uppercase tracking-widest text-black/70 dark:text-white/70">
              Trust
            </span>
            <h3 className="text-xl font-medium">Verified Tutors Only</h3>
          </motion.div>

          {/* SMALL — QUALITY */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 rounded-md border border-black/20 dark:border-white/20
            p-8 flex flex-col justify-between overflow-hidden"
          >
            <div className="relative h-90 mb-4 rounded-md overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
                alt="Quality learning"
                fill
                className="object-cover"
              />
            </div>

            <span className="text-xs uppercase tracking-widest text-black/70 dark:text-white/70">
              Quality
            </span>
            <h3 className="text-xl font-medium">Outcome-Driven Learning</h3>
          </motion.div>

          {/* WIDE — OUR MISSION */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="md:col-span-4 rounded-md border border-black/20 dark:border-white/20
            p-10 overflow-hidden"
          >
            <div className="relative h-70 mb-6 rounded-md overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              To make quality education accessible by focusing on compatibility,
              transparency, and long-term academic success — not just quick
              matches.
            </p>
          </motion.div>

          {/* FULL — CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 rounded-md border border-black/30 dark:border-white/30
            p-8 text-center overflow-hidden"
          >
            <div className="relative h-68 mb-8 rounded-md overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Get started"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-semibold mb-5">
              Education deserves better systems.
            </h2>
            <p className="text-black/70 dark:text-white/70 mb-5 max-w-2xl mx-auto">
              Whether you’re a student, guardian, or tutor — we’re building a
              platform designed for clarity, trust, and results.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 md:px-10 py-3 md:py-4 overflow-hidden rounded-md border
                       border-black/40 dark:border-white/30 bg-background font-light 
                       text-sm md:text-base transition-all duration-300"
            >
              <span
                className="relative z-10 text-black dark:text-white 
                         group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
              >
                Get started
              </span>

              <div
                className="absolute inset-0 bg-black dark:bg-white 
                            translate-y-full group-hover:translate-y-0 
                            transition-transform duration-300"
              ></div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
