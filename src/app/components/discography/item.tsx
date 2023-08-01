"use client";

import {
  Image,
  Text,
  Stack,
  Heading,
  Box
} from "@chakra-ui/react";

interface Props {
  title: string;
  imageSrc: string;
  link: string;
  author?: string;
  kind?: string;
}

export default function DiscographyItem({
  title,
  author,
  imageSrc,
  link,
  kind,
}: Props) {
  return (
    <Stack spacing="2" maxW="280px">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageSrc}
          alt={title}
          width={"160px"}
          height={"160px"}
          margin={"8px"}
          transition={"1s"}
          _hover={{ transform: "scale(1.1)" }}
        />
      </a>
      <Box>
        <Heading as="h3" size="md">{title}</Heading>
        {author && <Text>{author}</Text>}
        {kind && <Text>{kind}</Text>}
      </Box>
    </Stack>
  )
}
