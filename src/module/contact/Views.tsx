import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import facebook from "../../../public/WhatsApp Image 2024-02-06 at 9.20.08 PM.jpeg";
import github from "../../../public/github.jpeg";
import instagagram from "../../../public/instagram.jpeg";
import linkedin from "../../../public/linkedIn.jpeg";
import twitter from "../../../public/twitter.jpeg";
import Header from "../homePage/components/Navbar";
import SocialsCard from "./components/SocialsCard";
import ContactForm from "./components/contactForm";
const socials = [
  {
    id: 1,
    imageUrl: twitter,
    title: "X(formerly Twitter)",
    content: "",
    url: "https://twitter.com/Ajy_update",
    handle: "@Ajy_update",
  },
  {
    id: 2,
    imageUrl: linkedin,
    title: "Linkedin ",
    content: "",
    url: "https://www.linkedin.com/in/ajibade-emmanuel-411916178/",
    handle: "Ajibade Emmanuel",
  },
  {
    id: 3,
    imageUrl: github,
    title: "Github",
    content: "",
    url: "https://github.com/Ajyupdate",
    handle: "@Ajyupdate",
  },
  {
    id: 4,
    imageUrl: instagagram,
    title: "Instagram",
    content: " ",
    url: "https://www.instagram.com/ajy_update/",
    handle: "@Ajy_update",
  },
  {
    id: 5,
    imageUrl: facebook,
    title: "Facebook",
    content: " ",
    url: "https://www.facebook.com/adetomiwa.emmanuel",
    handle: "Ajibade Emmanuel",
  },
];
export default function Contact() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <Box>
      <Header />
      <Box mx={{ md: "20%", base: "8%" }}>
        <Heading color={"white"}>Contact</Heading>
        <Text color={"#8893BD"} mt={"2%"} mb={8}>
          You can reach me through the following media
        </Text>
        <Flex justifyContent={"flex-start"} mb={8}>
          <Box flexDirection={"row"}>
            <button
              onClick={() => handleTabClick("tab1")}
              className={`px-4 text-white py-1 font-medium rounded ${
                activeTab === "tab1"
                  ? "bg-blue-400 text-blue-900"
                  : "text-white"
              }`}
            >
              Socials
            </button>

            <button
              onClick={() => handleTabClick("tab2")}
              className={`px-4 py-1  font-medium rounded ${
                activeTab === "tab2"
                  ? "bg-blue-400 text-blue-900"
                  : "text-white"
              }`}
            >
              Email
            </button>
          </Box>
        </Flex>
        {activeTab === "tab1" && (
          <div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 5, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <SocialsCard socails={socials} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <Text fontSize="large" color={"white"}>
              Send me a mail
            </Text>{" "}
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 5, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <ContactForm />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </Box>
    </Box>
  );
}
