"use client";
import { AnimatePresence, motion } from "framer-motion";

import Contact from "@/module/contact/Views";

export default function Page() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 5, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
}
