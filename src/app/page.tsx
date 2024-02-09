"use client";
import HomePage from "@/module/homePage/Views";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  // function binarySearch(array, target) {
  //   let left = 0;
  //   let right = array.length - 1;
  //   const mid = (left + right) / 2;

  //   while (left <= right) {
  //     if (array[mid] == target) {
  //       return mid;
  //     } else if (array[mid] > target) {
  //       right = mid - 1;
  //     } else {
  //       left = mid + 1;
  //     }
  //   }
  //   return -1;
  // }

  // binarySearch([2, 3, 4, 5, 6, 7], 5);
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
