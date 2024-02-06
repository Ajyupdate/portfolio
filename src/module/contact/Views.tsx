import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import oop from "../../../public/OOP.jpg";
import fix1 from "../../../public/fix1.webp";
import fix2 from "../../../public/fix2.webp";
import orm from "../../../public/orm-sequelize.jpg";
import Header from "../homePage/components/Navbar";
import SocialsCard from "./components/SocialsCard";
const socials = [
  {
    id: 1,
    imageUrl: orm,
    title: "X(formerly Twitter)",
    content: "",
    url: "https://twitter.com/Ajy_update",
    handle: "@Ajy_update",
  },
  {
    id: 2,
    imageUrl: fix1,
    title: "Linkedin ",
    content: "",
    url: "https://www.linkedin.com/in/ajibade-emmanuel-411916178/",
    handle: "Ajibade Emmanuel",
  },
  {
    id: 3,
    imageUrl: oop,
    title: "Github",
    content: "",
    url: "https://github.com/Ajyupdate",
    handle: "@Ajyupdate",
  },
  {
    id: 4,
    imageUrl: fix2,
    title: "Instagram",
    content: " ",
    url: "https://www.instagram.com/ajy_update/",
    handle: "@Ajy_update",
  },
  {
    id: 5,
    imageUrl: fix2,
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
          Search interesting content from chat gpt
        </Text>
        <Flex justifyContent={"flex-start"} mb={8}>
          <Box flexDirection={"row"} p={1}>
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
            <SocialsCard socails={socials} />
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <p>Content for Contact.</p>
          </div>
        )}
      </Box>
    </Box>
  );
}
