import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Header from "./components/Navbar";
const MotionBox = motion(Box);
export default function HomePage() {
  const [isToggled, setIsToggled] = useState(false);
  const text = "I build exciting stuffs for the web.";
  return (
    <Box>
      <Header />

      <Box mx={"20%"} mt={8}>
        <Stack spacing={4}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ delay: 2 }}
          >
            <Text color={"teal.300"}>Hi, my name is</Text>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Heading color={"#CCD8F8"}>Ajibade Emmanuel.</Heading>
          </motion.div>
          <Heading color={"#8892B0"}>
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {char}
              </motion.span>
            ))}
          </Heading>
          <Text color={"#828BAD"} maxW={400}>
            I am a passionate and detail-oriented Software Developer, with about
            four years of learning and writing codes, using my self-taught
            skills to developing dynamic and user-friendly web and mobile
            applications, and also creating scalable Nodejs servers.
          </Text>{" "}
          <Button
            mt={4}
            // ml={4}
            rounded={"none"}
            p={6}
            colorScheme="teal"
            borderColor="teal.200"
            variant="outline"
            maxW="200px"
          >
            <HStack>
              <Text>Send a Message</Text>
              <Text mt={1}>
                <FaAngleRight />
              </Text>
            </HStack>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
