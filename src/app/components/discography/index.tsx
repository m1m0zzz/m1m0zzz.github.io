"use client";

import { Wrap } from '@chakra-ui/react'
import DiscographyItem from './item';

export default function Discography() {
  return (
    <Wrap justify='space-between' spacingY={8}>
      <DiscographyItem
        title='Spaceship'
        author='mimoz'
        imageSrc='spaceship.jpg'
        link='https://soundcloud.com/mimozzz/spaceship'
      />
      <DiscographyItem
        title='Surface'
        author='Peri Sound & mimoz'
        imageSrc='hyper-chroma.jpg'
        link='https://big-up.style/78B6Ouoxnb'
      />
      <DiscographyItem
        title='꒰ঌ(._.)໒꒱'
        author='mimoz'
        imageSrc='osora.jpg'
        link='https://soundcloud.com/mimozzz/osoranouekara-konnichiha'
      />
      <DiscographyItem
        title='なつのかけら'
        author='mimoz'
        imageSrc='summer-fragments.jpg'
        link='https://soundcloud.com/mimozzz/summer-fragments'
      />
    </Wrap>
  )
}
