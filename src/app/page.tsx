"use client";

import NextImage from 'next/image'
import {
  ChakraProvider,
  Heading,
  Container,
  Box,
  Text,
  HStack,
  Icon,
  Flex
} from '@chakra-ui/react'
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaSoundcloud, FaYoutube } from 'react-icons/fa';
import SimpleSidebar from './components/sidebar';

export default function Home() {
  return (
     <ChakraProvider>
      <SimpleSidebar>
        <main>
          <Container id='about' p="4">
            <HStack spacing='24px'>
              <NextImage
                src='/mimoz.jpg'
                alt='mimoz icon'
                width={160}
                height={160}
                style={{
                  borderRadius: '50%'
                }}
              />
                <Box>
                  <Heading as='h1' size='lg'>mimoz</Heading>
                  <Text>Composer / Developer</Text>
                  <Box mt={2}>
                    <a href="https://soundcloud.com/mimozzz" target="_blank" rel="noopener noreferrer">
                      <Icon boxSize={6} ml={2} as={FaSoundcloud} />
                    </a>
                    <a href="https://twitter.com/m1m0zzz" target="_blank" rel="noopener noreferrer">
                      <Icon boxSize={6} ml={2} as={FiTwitter} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCgfte7zixiGJ6ZC6ttu3kfg" target="_blank" rel="noopener noreferrer">
                      <Icon boxSize={6} ml={2} as={FaYoutube} />
                    </a>
                    <a href="https://www.instagram.com/m1m0zzz/" target="_blank" rel="noopener noreferrer">
                      <Icon boxSize={6} ml={2} as={FiInstagram} />
                    </a>
                  </Box>
                </Box>
            </HStack>

            <Heading id='discography' mt='8' mb='4' as='h2' size='lg'>Discography</Heading>
            <NextImage
              src='/hyper-chroma.jpg'
              alt='hyper chroma'
              width={160}
              height={160}
            />
            <Text>Surface</Text>
            <Text>Peri Sound & mimoz</Text>

            <Heading id='ableton' mt='8' mb='4' as='h2' size='lg'>Ableton</Heading>
            <Text>🛠️ 準備ちう</Text>
            <Text>自作 Ableton デバイスを配布予定！</Text>

            <Heading id='blog' mt='8' mb='4' as='h2' size='lg'>Blog</Heading>
            <Text>🛠️ 準備ちう2</Text>

            <Heading id='contact' mt='8' mb='4' as='h2' size='lg'>Contact</Heading>
            <Text>mail: contact.m1m0zzz@gmail.com</Text>
            <Text>or Twitter DM{' ('}
              <a href="https://twitter.com/m1m0zzz" target="_blank" rel="noopener noreferrer">@m1m0zzz</a>
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
              <Text>&copy; 2023 mimoz.  All rights reserved</Text>
            </Flex>
        </footer>
      </SimpleSidebar>
    </ChakraProvider>
  )
}
