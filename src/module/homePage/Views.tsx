import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa6";
import Header from "./components/Navbar";
export default function HomePage() {
  return (
    <Box>
      <Header />
      <Box mx={"20%"}>
        <Stack spacing={4}>
          <Text color={"teal.200"}>Hi, my name is</Text>
          <Heading color={"#CCD8F8"}>Ajibade Emmanuel.</Heading>
          <Heading color={"#8892B0"}>
            I build exciting stuffs for the web
          </Heading>
          <Text color={"#828BAD"} maxW={400}>
            I am a passionate and detail-oriented Software Developer, with about
            four years of learning and writing codes, using my self-taught
            skills to developing dynamic and user-friendly web and mobile
            applications, and also creating scalable Nodejs servers.
          </Text>{" "}
          <Button
            // mt={4}
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
