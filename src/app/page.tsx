"use client";
import HomePage from "@/module/homePage/Views";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 5, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <Box>
          <HomePage />
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}
