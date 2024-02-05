import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import nextImage from "../../../public/Next.js.svg";
import framerMotionImg from "../../../public/famerIcon.png";
import expressIcon from "../../../public/icons8-express-js.svg";
import FigmaIcon from "../../../public/icons8-figma (1).svg";
import nodeJsIcon from "../../../public/nodejs-icon.svg";
import reactImg from "../../../public/react_919851.png";
import typescriptImg from "../../../public/typescript_5968381.png";
import Header from "../homePage/components/Navbar";
const tools = [
  {
    id: 1,
    name: "Node Js",
    about: "Runtime Environment",
    imageUrl: nodeJsIcon,
  },
  {
    id: 2,
    name: "Typescript",
    about: "Programming Language",
    imageUrl: typescriptImg,
  },
  {
    id: 3,
    name: "React",
    about: "Javascript Library",
    imageUrl: reactImg,
  },
  {
    id: 4,
    name: "NextJs",
    about: "React Framework",
    imageUrl: nextImage,
  },
  {
    id: 5,
    name: "ExpressJs",
    about: "Backend Framework",
    imageUrl: expressIcon,
  },
  {
    id: 6,
    name: "Figma",
    about: "Design Tool",
    imageUrl: FigmaIcon,
  },
  {
    id: 7,
    name: "Framer Motion",
    about: "Design Tool",
    imageUrl: framerMotionImg,
  },
];
export default function Stacks() {
  return (
    <Box color={"white"}>
      <Header />

      <Box mx={{ md: "25%", base: "10%" }}>
        <Heading color={"white"}>Stack</Heading>
        <Text color={"#8893BD"} mt={"4%"}>
          Some of the tools I use for work
        </Text>
        <Box>
          <Grid templateColumns={{ md: "2fr 2fr", base: "1fr" }} pb={12}>
            {tools.map((tool) => (
              <Flex key={tool.id} mt={6} mb={6}>
                <Image
                  width={32}
                  height={32}
                  src={tool.imageUrl}
                  alt="tools I use"
                />

                <Box ml={4}>
                  <Text>{tool.name}</Text>
                  <Text color="#CCD6F6" fontSize="sm">
                    {tool.about}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
