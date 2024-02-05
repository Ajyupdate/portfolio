import { Box, Grid, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface iArticleCardProps {
  articles: iArticlesProperties[];
}

interface iArticlesProperties {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  content: string;
  url: string;
}

export default function ArticleCard({ articles }: iArticleCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <Box>
      <Grid
        templateColumns={{ md: "2fr 2fr", base: "1fr" }}
        bg={"#0A192F"}
        gap={10}
        pb={12}
      >
        {articles.map((article, index) => (
          <Link href={article.url} target="_blank" key={article.id}>
            <Box position="relative">
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
                      src={article.imageUrl}
                      alt={article.title}
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
                    {article.content}
                  </Text>
                </Box>
                <Box
                  position="absolute"
                  top="4px"
                  right="4px"
                  display={hoveredIndex === index ? "block" : "none"}
                >
                  <Icon as={FaExternalLinkAlt} color="white" fontSize="xl" />
                </Box>
              </Box>
              <Text mt={{ md: 4, base: 2 }} color="white">
                {article.title}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
