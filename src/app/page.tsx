"use client";

import {
  Heading,
  Container,
  Box,
  Text,
  HStack,
  Icon,
  Flex,
  Image,
  Link,
  useColorModeValue,
  List,
  ListIcon,
  ListItem,
  Badge
} from '@chakra-ui/react'
import { FiImage, FiInstagram, FiPenTool, FiSliders, FiSmile, FiTool, FiZap } from 'react-icons/fi';
import { FaSoundcloud, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { LuPlug2 } from "react-icons/lu";
import { RiBardLine } from "react-icons/ri"
import { IconType } from 'react-icons';

import SimpleSidebar from './components/sidebar';
import Distribution from './components/distribution';
import Discography from './components/discography';

interface SNSLinkProps {
  label: string;
  link: string;
  icon: IconType;
}

const SNSLinks: SNSLinkProps[] = [
  { label: 'SoundCloud', link: 'https://soundcloud.com/mimozzz', icon: FaSoundcloud },
  { label: 'X(Twitter)', link: 'https://twitter.com/m1m0zzz', icon: FaXTwitter },
  { label: 'YouTube', link: 'https://www.youtube.com/channel/UCgfte7zixiGJ6ZC6ttu3kfg', icon: FaYoutube },
  { label: 'Instagram', link: 'https://www.instagram.com/m1m0zzz/', icon: FiInstagram }
];

const ProjectTypes = ["VST", "Web", "Preset", "UI"] as const;
type ProjectType = typeof ProjectTypes[number];
const ProjectTypeColorMap: {[key in ProjectType]: string} = {
  "VST": "orange",
  "Web": "cyan",
  "Preset": "yellow",
  "UI": "purple",
}

const projectLinks: {
  text: string,
  link: string,
  icon: IconType,
  type: ProjectType | ProjectType[],
}[] = [
  {
    text: "Utility clone",
    link: "https://github.com/m1m0zzz/utility-clone",
    icon: LuPlug2,
    type: "VST",
  },
  {
    text: "tremolo-ui (wip)",
    link: "https://github.com/m1m0zzz/tremolo-ui",
    icon: FiSliders,
    type: ["Web", "UI"],
  },
  {
    text: "mmz_tools",
    link: "https://m1m0zzz.github.io/mmz_tools/",
    icon: FiTool,
    type: ["Web", "Preset"],
  },
  {
    text: "JUCE日本語版チュートリアル",
    link: "https://m1m0zzz.github.io/juce-tutorial-ja/",
    icon: FiPenTool,
    type: "Web",
  },
  {
    text: ".Spectrum - ドット絵風オーディオアナライザー",
    link: "https://m1m0zzz.github.io/.spectrum/",
    icon: FiZap,
    type: "Web",
  },
  {
    text: "mol ホームページ",
    link: "https://o8omi.vercel.app/",
    icon: RiBardLine,
    type: "Web",
  },
  {
    text: "MIDI Art Lv.100",
    link: "https://m1m0zzz.github.io/midi-art-lv100/",
    icon: FiImage,
    type: "Web",
  },
  {
    text: "サカバンバスピス スクリーンセーバー",
    link: "https://m1m0zzz.github.io/sacabambaspis/",
    icon: FiSmile,
    type: "Web",
  },
];

export default function Home() {
  return (
    <SimpleSidebar>
      <main>
        <Container id='about' p="4" maxW='2xl'>
          <HStack spacing='24px'>
            <Image
              src='mimoz.jpg'
              alt='mimoz icon'
              width={160}
              height={160}
              rounded='full'
            />
            <Box>
              <Heading as='h1' size='lg'>mimoz</Heading>
              <Text>Composer / Developer</Text>
              <Box mt={2}>
                {SNSLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon boxSize={6} ml={2} as={link.icon} />
                  </a>
                ))}
              </Box>
            </Box>
          </HStack>

          <Heading id='discography' mt='8' mb='4' as='h2' size='lg'>Discography</Heading>
          <Discography />

          <Heading id='distribution' mt='8' mb='4' as='h2' size='lg'>Distribution</Heading>
          <Distribution />

          <Heading id='project' mt='8' mb='4' as='h2' size='lg'>Project</Heading>
          <List spacing={3}>
            {projectLinks.map((link) => {
              return (
                <ListItem key={link.text}>
                  <ListIcon as={link.icon} />
                  <Link
                    color="brand.800"
                    _dark={{ color: "brand.400" }}
                    href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </Link>
                  {
                    (typeof link.type == "string" ?
                      [link.type] : link.type
                    ).map((type, index) =>
                      <Badge
                        key={index}
                        ml="6px"
                        variant="subtle"
                        colorScheme={ProjectTypeColorMap[type]}
                      >
                        {type}
                      </Badge>
                    )
                  }
                </ListItem>
              )
            })}
          </List>

          <Heading id='contact' mt='8' mb='4' as='h2' size='lg'>Contact</Heading>
          <Text>mail: contact.m1m0zzz@gmail.com</Text>
          <Text>or Twitter DM{' ('}
            <Link color={useColorModeValue("brand.800", "brand.400")} href="https://twitter.com/m1m0zzz" target="_blank" rel="noopener noreferrer">@m1m0zzz</Link>
            {')'}
          </Text>
        </Container>
      </main>
      <footer>
        <Flex
          bg={useColorModeValue("brand.500", "brand.700")}
          color='white'
          h={16}
          justifyContent='center'
          alignItems='center'
        >
          <Text>&copy; 2024 mimoz</Text>
        </Flex>
      </footer>
    </SimpleSidebar>
  )
}
