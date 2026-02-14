"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <div className="py-20 dark:bg-black text-black dark:text-white">
      <section className="max-w-7xl mx-auto w-full">
        <section className="flex items-center px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-40"
          >
            {/* Left Content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-semibold tracking-tight"
              >
                Get in Touch
              </motion.h1>

              <p className="text-sm md:text-xl text-black/70 dark:text-white/70 leading-relaxed text-justify">
                Have a question, need a tutor, or want to collaborate? <br /> Fill out
                the form and we’ll get back to you shortly.
              </p>

              <div className="space-y-3 font-extralight text-md">
                <div className="hover:translate-x-1 gap-2 flex items-center transition-transform">
                  <IoLocationOutline /> <span>Dhaka, Bangladesh</span>
                </div>
                <div className="hover:translate-x-1 gap-2 flex items-center transition-transform">
                  <IoMailOutline /> <span> support@scholara.com</span>
                </div>
                <div className="hover:translate-x-1 gap-2 flex items-center transition-transform">
                  <LuPhoneCall /> <span> +880 1630216932</span>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/syedshafinahmed"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group p-3 overflow-hidden rounded-md border w-12
  border-black/40 dark:border-white/30 bg-background
  transition-all duration-300 flex items-center justify-center"
                >
                  {/* Icon */}
                  <span className="relative z-10 text-black dark:text-white transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                    <TbBrandGithubFilled size={18} />
                  </span>

                  {/* Hover Fill */}
                  <span
                    className="absolute inset-0 bg-black dark:bg-white
    translate-y-full group-hover:translate-y-0
    transition-transform duration-300 ease-out"
                  />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/syed-shafin-ahmed/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group p-3 overflow-hidden rounded-md border w-12
  border-black/40 dark:border-white/30 bg-background
  transition-all duration-300 flex items-center justify-center"
                >
                  {/* Icon */}
                  <span className="relative z-10 text-black dark:text-white transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                    <FaLinkedinIn size={18} />
                  </span>

                  {/* Hover Fill */}
                  <span
                    className="absolute inset-0 bg-black dark:bg-white
    translate-y-full group-hover:translate-y-0
    transition-transform duration-300 ease-out"
                  />
                </motion.a>
                <motion.a
                  href="https://syedshafinahmed.pages.dev/"
                  aria-label="Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group p-3 overflow-hidden rounded-md border w-12
  border-black/40 dark:border-white/30 bg-background
  transition-all duration-300 flex items-center justify-center"
                >
                  {/* Icon */}
                  <span className="relative z-10 text-black dark:text-white transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
                    <FaGlobe size={18} />
                  </span>

                  {/* Hover Fill */}
                  <span
                    className="absolute inset-0 bg-black dark:bg-white
    translate-y-full group-hover:translate-y-0
    transition-transform duration-300 ease-out"
                  />
                </motion.a>
              </div>
            </div>

            {/* Right Form */}
            <div>
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-black/30 dark:border-white/30 py-3 outline-none
              focus:border-black dark:focus:border-white transition-colors"
                  />
                </div>

                <div className="group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-black/30 dark:border-white/30 py-3 outline-none
              focus:border-black dark:focus:border-white transition-colors"
                  />
                </div>

                <div className="group">
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    className="w-full bg-transparent border-b border-black/30 dark:border-white/30 py-3 outline-none resize-none
              focus:border-black dark:focus:border-white transition-colors"
                  />
                </div>

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
                    Send Message
                  </span>

                  <div
                    className="absolute inset-0 bg-black dark:bg-white 
                translate-y-full group-hover:translate-y-0 
                transition-transform duration-300"
                  ></div>
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
