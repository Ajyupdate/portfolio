"use client";
import Stacks from "@/module/stack/View";
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
        <Stacks />
      </motion.div>
    </AnimatePresence>
  );
}
