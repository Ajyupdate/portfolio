"use client";
import HomePage from "@/module/homePage/Views";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  // function arrayTest() {
  //   const NumArray = [1, 2];
  //   for (let i = 1; i <= 15; i++) {
  //     let j = NumArray[i] * NumArray[i - 1];
  //     NumArray.push(j);
  //   }
  //   console.log(NumArray);
  // }
  // arrayTest();
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
