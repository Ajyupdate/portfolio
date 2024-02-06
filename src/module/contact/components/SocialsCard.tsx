import { Box, Grid, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface iSocailCardProps {
  socails: iSocailsProperties[];
}

interface iSocailsProperties {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  content: string;
  url: string;
  handle: string;
}

export default function SocialsCard({ socails }: iSocailCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const handleCopyHandle = (index: number, handle: string) => {
    navigator.clipboard.writeText(handle);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(-1);
    }, 2000); // Reset copied state after 2 seconds
  };

  return (
    <Box>
      <Grid
        templateColumns={{ md: "2fr 2fr", base: "1fr" }}
        bg={"#0A192F"}
        gap={10}
        pb={12}
      >
        {socails.map((social, index) => (
          <Box position="relative" key={social.id}>
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="md"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Box
                transition="filter 1s"
                _hover={{
                  filter: hoveredIndex === index ? "brightness(30%)" : "none",
                }}
                width="100%" // Ensure the image takes up the entire space
                height="100%"
              >
                <Box position="relative" width="100" height="300">
                  <Image
                    src={social.imageUrl}
                    alt={social.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>

              <Box
                as={motion.div}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  x: hoveredIndex === index ? 0 : -50,
                }}
                transition={{ duration: "0.3" }}
                position="absolute"
                bottom="10px"
                left="0"
                textAlign="left"
                pointerEvents="none"
                px={4}
                borderRadius="md"
                width="100%" // Ensure the content box spans the entire width
              >
                <Text color="#CCD6F6" fontSize="sm">
                  {social.content}
                </Text>
              </Box>
              <Box
                p={4}
                position="absolute"
                top="4px"
                left="4px"
                display={hoveredIndex === index ? "block" : "none"}
              >
                <button
                  className="border border-white text-white px-4 py-2 rounded"
                  onClick={() => handleCopyHandle(index, social.handle)}
                >
                  {social.handle}
                </button>

                {copiedIndex === index && (
                  <Text
                    fontSize="sm"
                    color="white"
                    ml={2}
                    display="inline"
                    borderRadius="md"
                    px={2}
                    py={1}
                    bg="#4A5568"
                    position="relative"
                    top="-5px"
                  >
                    Copied
                  </Text>
                )}
              </Box>

              <Link href={social.url} target="_blank">
                <Box
                  p={4}
                  position="absolute"
                  top="4px"
                  right="4px"
                  display={hoveredIndex === index ? "block" : "none"}
                >
                  <Icon as={FaExternalLinkAlt} color="white" fontSize="xl" />
                </Box>
              </Link>
            </Box>
            <Text mt={{ md: 4, base: 2 }} color="white">
              {social.title}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
