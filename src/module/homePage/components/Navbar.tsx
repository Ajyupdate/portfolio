"use client";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { CiHome } from "react-icons/ci";
import { FaBookReader, FaCode } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";

import myImage from "../../../../public/ajy.jpg";
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  number: string;
  icon?: IconType;
}
type ITokenProps = {
  isLoggedIn: boolean;
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
    number: "01.",
    icon: CiHome,
  },

  {
    label: "Projects",
    href: "/projects",
    number: "02.",
    icon: FaCode,
  },
  {
    label: "Articles",
    href: "/articles",
    number: "03.",
    icon: FaBookReader,
  },
  {
    label: "Stack",
    href: "/stack",
    number: "04.",
    icon: IoServer,
  },
  {
    label: "Contact",
    href: "/contact",
    number: "05.",
    icon: FaEnvelopeOpenText,
  },
];

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
export default function Nav() {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box color={"white"}>
      <Box>
        <Flex
          py={{ base: 2 }}
          px={{ base: 6, md: "5%" }}
          justify={"space-between"}
        >
          <Flex
            mt={"1%"}
            flex={{ base: 1 }}
            justify={{ base: "start", md: "start" }}
          >
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className="w-10 h-10 rounded-full overflow-hidden aspect-w-1 aspect-h-1"
            >
              <Image
                src={myImage}
                alt="Ajibade Emmanuel"
                width={100}
                height={50}
              />
            </motion.div>

            <Box ml={4} display={{ md: "none", base: "block" }}>
              <Text fontWeight={"bold"}>Ajibade Emmanuel</Text>
              <Text fontSize={"small"} color={"#8893BD"}>
                Software Engineer
              </Text>
            </Box>
            {/* <Box>
            <Avatar name="Ajibade Emmanuel" size={"sm"} src={myImage} />
          </Box> */}
          </Flex>
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />

            <Button
              mt={4}
              ml={4}
              colorScheme="teal"
              borderColor="teal.200"
              variant="outline"
            >
              <a href="/ajibade.pdf" download="ajibade.pdf">
                Resume
              </a>
            </Button>
          </Flex>

          <Flex
            //flex={{ base: 1, md: '1' }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              color={"white"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon mt={1} w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>
        <Box my={8} display={{ md: "none", base: "block" }}>
          <Divider />
        </Box>
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const path = usePathname();
  // s
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          key={navItem.label}
          px={2}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                // color={"#7E95B8"}
                // color={linkColor}
                _hover={{
                  color: "teal",
                }}
                _active={{
                  borderBottom: "2px dashed blue",
                }}
              >
                <HStack>
                  <Text
                    display={{ md: "block", base: "none" }}
                    color={"#4FCFCF"}
                    mr={-1}
                  >
                    <Icon as={navItem.icon} />
                    {/* {navItem.number} */}
                  </Text>
                  <Text
                    fontWeight={path === navItem.href ? "bold" : ""}
                    color={path === navItem.href ? "white" : "#8893BD"}
                  >
                    {navItem.label}
                  </Text>
                </HStack>
                {/* {`${path}` === navItem.href ? (
                Box
                    bg="black"
                    marginLeft={6}
                    borderRadius="50%"
                    width="15px"
                    height="15px"
                  />
                ) : (
                  <Box
                    // bg="black"
                    marginLeft={4}
                    borderRadius="50%"
                    width="15px"
                    height="15px"
                  />
                )} */}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      h={"50%"}
      mt={"30%"}
      bg={"#0A192F"}
      // bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      position="absolute"
      top={0}
      left={0}
      right={0}
      zIndex={99}
    >
      <Box ml={"17%"}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, icon }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const path = usePathname();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={4}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        // _hover={{
        //   backgroundColor: "",
        //   textDecoration: "none",
        // }}
      >
        <Box
          fontWeight={path === href ? 1000 : 600}
          color={path === href ? "white" : "#A9B6EB"}
        >
          <Icon as={icon} />
          <Text as={"span"} ml={2}>
            {label}
          </Text>
        </Box>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
