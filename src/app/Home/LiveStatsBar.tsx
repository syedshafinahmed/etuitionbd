"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import {
  User,
  Briefcase,
  Smile,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const locations = [
  "Mymensingh (74)",
  "Rangpur (52)",
  "Rajshahi (59)",
  "Dhaka (120)",
  "Chattogram (98)",
];

export default function LiveStatsBar() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="w-full relative">
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
        <div
          className="
          relative rounded-2xl px-6 md:px-10 py-8 shadow-xl overflow-hidden
          bg-background text-black dark:text-white border border-black/20 dark:border-white/20
        "
        >
          {/* TOP STATS */}
          <div className="flex justify-between gap-6 text-center mb-8">
            <Stat icon={<User />} value="491k" label="Active Tutors" />
            <Stat icon={<Briefcase />} value="5k" label="Live Tuition Jobs" />
            <Stat icon={<Smile />} value="135k" label="Happy Students" />
            <Stat
              icon={<ThumbsUp />}
              value="4.8/5"
              label="Average Tutor Rating"
            />
          </div>

          {/* LIVE JOBS SCROLLER */}
          <div className="flex items-center justify-center gap-4">
            <ChevronLeft
              className="opacity-70 border border-foreground/40 rounded-md"
              size={40}
            />

            <div className="relative overflow-hidden w-full">
              <motion.div animate={controls} className="flex gap-5 w-max">
                {[...locations, ...locations].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                    px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium
                    border border-black/40 text-black
                    hover:bg-black hover:text-white
                    dark:border-white/40 dark:text-white
                    dark:hover:bg-white dark:hover:text-black
                    transition-colors
                  "
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <ChevronRight
              className="opacity-70 border border-foreground/40 rounded-md"
              size={40}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Reusable Stat Block ---------- */
function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex flex-row items-center gap-2"
    >
      <div
        className="
          w-14 h-14 rounded-full flex items-center justify-center
          bg-black/10
          dark:bg-white/10
        "
      >
        {icon}
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm opacity-90">{label}</p>
      </div>
    </motion.div>
  );
}
