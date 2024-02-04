"use client";
import ProjectPage from "@/module/projects/Views";
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 5, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <ProjectPage />
      </motion.div>
    </AnimatePresence>
  );
}
