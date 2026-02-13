"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Students() {
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);

  // Scroll for first line
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: step1Ref,
    offset: ["start 70%", "end 40%"],
  });
  const pathLength1 = useTransform(scrollYProgress1, [0, 1], [0, 1]);

  // Scroll for second line
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: step2Ref,
    offset: ["start 90%", "end 40%"],
  });
  const pathLength2 = useTransform(scrollYProgress2, [0, 1], [0, 1]);

  return (
    <div className="w-full relative">
      <section className="max-w-7xl mx-auto px-10 py-20">
        <div className="absolute inset-0 opacity-50 animate-grid-slide bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[40px_40px]" />
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How does it work for guardians/students?
          </h2>
        </div>

        <div className="space-y-12">
          {/* STEP 1  */}
          <motion.div
            ref={step1Ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-start relative"
          >
            <div className="w-full md:w-[70%] flex flex-col md:flex-row gap-6 items-center border border-black/30 dark:border-white/30 bg-background rounded-md p-6 md:p-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full md:w-40 h-40 rounded-md overflow-hidden border border-foreground/40"
              >
                <Image
                  src="https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Submit Requirement"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div>
                <h3 className="text-xl md:text-3xl font-extralight text-black dark:text-white mb-2">
                  Submit Your Hiring Requirement
                </h3>
                <p className="text-black/70 dark:text-white/70">
                  Fill out all the required fields and submit your tutoring
                  requirement.
                </p>
              </div>
            </div>

            {/* SVG CONNECTOR 1 — SCROLL CONTROLLED */}
            <div className="relative">
              <svg
                width="137"
                height="164"
                viewBox="0 0 137 164"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -right-34 top-28 pointer-events-none"
              >
                <motion.path
                  d="M0.00366211 0.941721C109.204 0.141721 136.504 0.608388 136.504 0.941721V163.442"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-black dark:text-white"
                  style={{ pathLength: pathLength1 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* STEP 2  */}
          <motion.div
            ref={step2Ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-end relative"
          >
            {/* SVG CONNECTOR 2  */}
            <div className="relative">
              <svg
                width="159"
                height="159"
                viewBox="0 0 159 159"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-29 pointer-events-none"
              >
                <motion.path
                  d="M159 0.5C33.4 0.5 1 0.5 0.5 0.5V159"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-black dark:text-white"
                  style={{
                    pathLength: pathLength2,
                    transition: "pathLength 0.5s ease",
                  }}
                />
              </svg>
            </div>

            <div className="w-full md:w-[70%] flex flex-col md:flex-row gap-6 items-center border border-black/30 dark:border-white/30 bg-background rounded-md p-6 md:p-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full md:w-40 h-40 rounded-md overflow-hidden border border-foreground/40"
              >
                <Image
                  src="https://plus.unsplash.com/premium_photo-1676666377229-12a9ad6b186a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shortlist Tutors"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div>
                <h3 className="text-xl md:text-3xl font-extralight text-black dark:text-white mb-2">
                  Shortlist from Applied Tutors
                </h3>
                <p className="text-black/70 dark:text-white/70">
                  Review applications and shortlist up to 5 tutors that match
                  your needs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* STEP 3  */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-start relative"
          >
            <div className="w-full md:w-[70%] flex flex-col md:flex-row gap-6 items-center border border-black/30 dark:border-white/30 bg-background rounded-md p-6 md:p-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full md:w-40 h-40 rounded-md overflow-hidden border border-foreground/40"
              >
                <Image
                  src="https://plus.unsplash.com/premium_photo-1664047472774-12d0a7796c60?q=80&w=870&auto=format&fit=crop"
                  alt="Confirm Hiring"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div>
                <h3 className="text-xl md:text-3xl font-extralight text-black dark:text-white mb-2">
                  Appoint the Best One & Confirm Hiring
                </h3>
                <p className="text-black/70 dark:text-white/70">
                  Take trial classes, select the best tutor, and confirm your
                  hiring.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
