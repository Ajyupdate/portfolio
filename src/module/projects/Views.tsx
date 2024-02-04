import { Box, Heading, Text } from "@chakra-ui/react";
import Batman from "../../../public/batman.png";
import event from "../../../public/event.png";
import evr from "../../../public/evr.png";
import fintech from "../../../public/fintech.png";
import MoskolShot from "../../../public/moskolShot.png";
import Header from "../homePage/components/Navbar";
import ProjectCard from "./components/ProjectCard";
const projectData = [
  {
    id: 1,
    title: "Event Scheduler",
    content:
      "I developed an event scheduler app using NEXTJS, TypeScript, Tailwind, and Chakra UI for the frontend, along with ExpressJS and MongoDB for the backend. It includes features for creating, editing, and deleting events, as well as viewing past and future events. Authentication is handled with JWT, and token verification utilizes Nodemailer.",
    imageUrl: evr,
    url: "https://evr.vercel.app/",
  },
  {
    id: 2,
    title: "Moskol Engineering Website",
    content:
      "I developed a full-stack project using ExpressJS for the backend and NEXTJS for the frontend, with JWT for authorization. The admin can buy, edit, and delete products, as well as manage company services. Clients are restricted to purchasing products.",
    imageUrl: MoskolShot,
    url: "https://moskol.vercel.app/",
  },
  {
    id: 3,
    title: "Movie Web",
    content:
      "I created a movie search application that provides users with detailed summaries of movies they're interested in. The web version was developed using NEXTJS, while the mobile version was built with React Native",
    imageUrl: Batman,
    url: "https://expo.dev/@ajy14/movieDetails3?release-channel=default",
  },
  {
    id: 4,
    title: "Fintech Payment Dashboard",
    content:
      "I developed a fintech payment dashboard using Next.js, Jest for testing, and Redux Toolkit for state management",
    imageUrl: fintech,
    url: "https://kh-task.netlify.app/transactions",
  },
  {
    id: 5,
    title: "Event Dashboard",
    content:
      "I developed a dashboard for an Event company using typescript and NextJs",
    imageUrl: event,
    url: "https://evvent-task-g9mq-kwun8xfex-ajyupdate.vercel.app/",
  },
];

export default function ProjectPage() {
  return (
    <Box>
      <Header />

      <Box mx={{ md: "20%", base: "8%" }}>
        <Heading color={"white"}>Projects</Heading>
        <Text color={"#8893BD"} mt={"2%"}>
          Some interesting project I built
        </Text>
        <Box mt={"8%"}>
          <ProjectCard projects={projectData} />
        </Box>
      </Box>
    </Box>
  );
}
