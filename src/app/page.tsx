"use client";

import {
  ChakraProvider,
  Heading,
  Container,
  Box,
  Text,
  HStack,
  Icon,
  Flex,
  Image,
  Link,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { FiExternalLink, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaSoundcloud, FaYoutube } from 'react-icons/fa';
import SimpleSidebar from './components/sidebar';
import { IconType } from 'react-icons';
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
     <ChakraProvider>
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
                  <Text>since 2003</Text>
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

            <Heading id='other' mt='8' mb='4' as='h2' size='lg'>Other</Heading>
            <UnorderedList>
              <ListItem>
                <Link color='teal.500' href='https://m1m0zzz.github.io/max-docs-ja/' >
                  Max 8 ドキュメント 日本語訳
                </Link>
              </ListItem>
            </UnorderedList>

            <Heading id='contact' mt='8' mb='4' as='h2' size='lg'>Contact</Heading>
            <Text>mail: contact.m1m0zzz@gmail.com</Text>
            <Text>or Twitter DM{' ('}
              <Link color='teal.500' href="https://twitter.com/m1m0zzz" target="_blank" rel="noopener noreferrer">@m1m0zzz</Link>
              {')'}
            </Text>
          </Container>
        </main>
        <footer>
            <Flex
              bg='#89b9bd'
              color='white'
              h={16}
              justifyContent='center'
              alignItems='center'
            >
              <Text>&copy; 2023 mimoz</Text>
            </Flex>
        </footer>
      </SimpleSidebar>
    </ChakraProvider>
  )
}
