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
      <Grid mb={4} templateColumns={{ md: "2fr 2fr", base: "1fr" }} gap={10}>
        {articles.map((article, index) => (
          <Link href={article.url} target="_blank" key={article.id}>
            <Box>
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
                    filter: hoveredIndex === index ? "brightness(10%)" : "none",
                  }}
                >
                  <Box width="381px" height="215px" position="relative">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
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
                      maxWidth="80%"
                      borderRadius="md"
                    >
                      <Text color="white" fontSize="sm">
                        {article.content}
                      </Text>
                    </Box>
                  </Box>
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
              <Text color="white">{article.title}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
