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
  ListItem
} from '@chakra-ui/react'
import { FiHeart, FiInstagram, FiTwitter, FiZap } from 'react-icons/fi';
import { FaSoundcloud, FaYoutube } from 'react-icons/fa';
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
  { label: 'Twitter', link: 'https://twitter.com/m1m0zzz', icon: FiTwitter },
  { label: 'YouTube', link: 'https://www.youtube.com/channel/UCgfte7zixiGJ6ZC6ttu3kfg', icon: FaYoutube },
  { label: 'Instagram', link: 'https://www.instagram.com/m1m0zzz/', icon: FiInstagram }
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
            <ListItem>
              <ListIcon as={FiZap} />
              <Link color={useColorModeValue("brand.800", "brand.400")} href="https://m1m0zzz.github.io/.spectrum/" target="_blank" rel="noopener noreferrer">
                .Spectrum - ドット絵風オーディオアナライザー
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FiHeart} />
              <Link color={useColorModeValue("brand.800", "brand.400")} href="https://m1m0zzz.github.io/sacabambaspis/" target="_blank" rel="noopener noreferrer">
                サカバンバスピス スクリーンセーバー
              </Link>
            </ListItem>
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
            <Text>&copy; 2023 mimoz</Text>
          </Flex>
      </footer>
    </SimpleSidebar>
  )
}
