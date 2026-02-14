"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-background flex items-center px-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="absolute inset-0 opacity-50 animate-grid-slide bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[40px_40px]" />
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold text-primary leading-tight">
            Hire the Right Tutor Today
          </h1>

          <p className="text-lg text-primary/80 max-w-xl text-justify">
            Discover a tutor who matches your unique learning style and academic
            goals, making every session productive and engaging. With access to
            experienced educators across a wide range of subjects, you can get
            personalized guidance exactly where you need it. Flexible scheduling
            ensures that learning fits seamlessly into your busy lifestyle, so
            you never miss a chance to grow. Start building your skills and
            confidence today with support that’s tailored just for you.{" "}
          </p>

          <div className="flex gap-5 flex-wrap justify-center md:justify-start">
            {/* Hire a Tutor */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 md:px-10 py-3 md:py-4 overflow-hidden rounded-md border
      border-black/40 dark:border-white/30 bg-background font-light 
      text-sm md:text-base transition-all duration-300"
            >
              <Link
                href="/tutors"
                className="relative z-10 text-black dark:text-white 
             group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
              >
                Hire a Tutor
              </Link>

              <div
                className="absolute inset-0 bg-black dark:bg-white 
        translate-y-full group-hover:translate-y-0 
        transition-transform duration-300"
              ></div>
            </motion.button>

            {/* Join as a Tutor */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 md:px-10 py-3 md:py-4 overflow-hidden rounded-md border
           border-black/40 dark:border-white/30 bg-background font-light 
           text-sm md:text-base transition-all duration-300"
            >
              <Link
                href="/login"
                className="relative z-10 text-black dark:text-white 
             group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
              >
                Join as a Tutor
              </Link>

              <div
                className="absolute inset-0 bg-black dark:bg-white 
                translate-y-full group-hover:translate-y-0 
                transition-transform duration-300"
              ></div>
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE COLLAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative hidden md:flex justify-center md:justify-end"
        >
          <div className="relative grid grid-cols-2 gap-2 z-10 mt-15 mb-15">
            {/* IMAGE 1 — asymmetrical */}
            <div
              className="
        relative w-60 h-60 overflow-hidden shadow-lg
        rounded-tl-[50%]
        rounded-tr-[10%]
        rounded-br-[20%]
        rounded-bl-[8%]
      "
            >
              <Image
                src="https://plus.unsplash.com/premium_photo-1681848412435-a9234555c463?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tutor teaching child"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* IMAGE 2 — asymmetrical */}
            <div
              className="
        relative w-50 h-60 overflow-hidden shadow-lg
        rounded-tr-[45%]
        rounded-tl-[12%]
        rounded-bl-[20%]
        rounded-br-[8%]
      "
            >
              <Image
                src="https://plus.unsplash.com/premium_photo-1671796330621-d6ff427c399f?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Religious tutoring"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* IMAGE 3 — mirror of image 2 */}
            <div
              className="
        relative w-50 h-60 overflow-hidden shadow-lg
        rounded-tl-[12%]
        rounded-tr-[20%]
        rounded-br-[8%]
        rounded-bl-[45%]
        translate-x-10
      "
            >
              <Image
                src="https://plus.unsplash.com/premium_photo-1681505601897-5171f4baf000?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Father teaching child"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* IMAGE 4 — mirror of image 1 */}
            <div
              className="
        relative w-60 h-60 overflow-hidden shadow-lg
        rounded-br-[50%]
        rounded-bl-[10%]
        rounded-tl-[20%]
        rounded-tr-[8%]
      "
            >
              <Image
                src="https://plus.unsplash.com/premium_photo-1663126346116-f0ccaf232268?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tutor"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
