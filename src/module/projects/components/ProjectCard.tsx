import {
  Box,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
interface iProjectProps {
  projects: iProjectProperties[];
}
interface iProjectProperties {
  id: number;
  title: string;
  imageUrl: StaticImageData;
  content: string;
  url: string;
}
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export default function ProjectCard({ projects }: iProjectProps) {
  return (
    <Box
      as={motion.div}
      variants={variants}
      initial="hidden"
      animate="show"
      className=" relative md:rounded-sm overflow-hidden"
    >
      <VStack spacing={16}>
        {projects.map((project) => (
          <Link
            target="_blank"
            key={project.id}
            href={project.url}
            _hover={{ textDecoration: "none" }}
          >
            <Grid
              mb={4}
              _hover={{ bg: "#153461", p: 4 }}
              templateColumns={{ md: "1fr 2fr", base: "1fr" }}
              gap={2}
            >
              <GridItem colSpan={1}>
                <Box borderRadius="md" overflow="hidden">
                  <Image src={project.imageUrl} alt={project.title} />
                </Box>
              </GridItem>

              <GridItem ml={"2%"} colSpan={1}>
                <Heading fontSize={"large"} color={"white"}>
                  {project.title}
                </Heading>
                <Text fontSize={"small"} mt={"2%"} color={"#8893BD"}>
                  {project.content}
                </Text>
              </GridItem>
            </Grid>
          </Link>
        ))}
      </VStack>
    </Box>
  );
}
