import { Box, Heading, Text } from "@chakra-ui/react";
import oop from "../../../public/OOP.jpg";
import fix1 from "../../../public/fix1.webp";
import fix2 from "../../../public/fix2.webp";
import orm from "../../../public/orm-sequelize.jpg";
import Header from "../homePage/components/Navbar";
import ArticleCard from "./components/articleCard";
const articles = [
  {
    id: 4,
    imageUrl: orm,
    title: "How to Avoid Pluralization of Table Names in Sequelize.",
    content:
      "You might be having problem with sequelize automatically pluralizing your table names in your model. This article will help you fix it. ",
    url: "https://ajy.hashnode.dev/how-to-avoid-pluralization-of-table-names-in-sequelize",
    source: "Hashnode",
  },
  {
    id: 1,
    imageUrl: fix1,
    title: "How to Fix Legacy Context-API Issue in React ",
    content:
      "This kind of error mostly occurs when you are getting data from a server or when your React Application package is not the latest version. ",
    url: "https://ajy.hashnode.dev/how-to-fix-legacy-context-api-issue-in-react-application-with-a-single-line-of-code",
    source: "Hashnode",
  },
  {
    id: 3,
    imageUrl: oop,
    title: "Object Oriented Programming in its Simplest Form",
    content:
      "Many programming novice, found Object-Oriented Programming (OOP) confusing due to unfamiliar terms and its distinction from procedural programming.",
    url: "https://ajy.hashnode.dev/object-oriented-programming-in-its-simplest-form",
    source: "Hashnode",
  },
  {
    id: 2,
    imageUrl: fix2,
    title:
      "How You Can Fix Render Not Seeing Your Node Module for Your Server Applications ",
    content:
      "While trying to host your server on render for the first time, you might face this particular frustrating error when your project is building on the render platform. ",
    url: "https://ajy.hashnode.dev/how-to-fix-error-cannot-find-module-nodefs-while-trying-to-host-your-backend-server-on-render",
    source: "Hashnode",
  },
];
export default function Articles() {
  return (
    <Box>
      <Header />

      <Box mx={{ md: "20%", base: "8%" }}>
        <Heading color={"white"}>Writings</Heading>
        <Text color={"#8893BD"} mt={"2%"} mb={8}>
          Sometimes I write about tech and some bugs I encountered while coding
        </Text>

        <ArticleCard articles={articles} />
      </Box>
    </Box>
  );
}
