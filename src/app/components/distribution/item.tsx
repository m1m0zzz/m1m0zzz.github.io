"use client";

import {
  Heading,
  Box,
  Image,
  Link,
  Stack,
  Icon
} from '@chakra-ui/react'
import { ReactNode } from 'react';
import { FiExternalLink } from 'react-icons/fi';

interface Props {
  title: string;
  imageSrc: string;
  downloadLink: string;
  downloadText?: string;
  isExternal?: boolean;
  children: ReactNode
}

export default function DistributionItem({
  title,
  imageSrc,
  downloadLink,
  downloadText,
  isExternal,
  children
}: Props) {
  return (
    <Stack spacing='3' maxW='280px'>
      <Image
        src={imageSrc}
        alt={title}
        aspectRatio='1 / 1'
        width='160px'
        height='160px'
      />
      <Heading as='h3' size='md'>{title}</Heading>
      <Box>
        {children}
      </Box>
      <Link
        href={downloadLink}
        isExternal={isExternal}
        aria-label={'Download' + title}
        color='teal.500'
      >
        {downloadText || 'Download'} {isExternal && <Icon mx='2px' as={FiExternalLink} />}
      </Link>
    </Stack>
  )
}
