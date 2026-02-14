import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuTriangle } from "react-icons/lu";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group animate-accordion-up"
        >
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/90 dark:bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs text-white dark:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg z-50">
            Back to top
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90 dark:border-t-white/90"></div>
          </div>

          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="
              flex items-center justify-center
              w-10 h-10
              rounded-md
              bg-background
              text-black dark:text-white
              border border-black/20 dark:border-white/20
              backdrop-blur-xl
              transition-all duration-300
              hover:border-black dark:hover:border-white
            "
          >
            {/* Icon */}
            <motion.div
              animate={{ y: [0, -1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LuTriangle size={10} className="sm:w-4 sm:h-4 text-current" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
