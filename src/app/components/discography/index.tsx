"use client";

import { Wrap } from '@chakra-ui/react'
import DiscographyItem from './item';

export default function Discography() {
  return (
    <Wrap justify='space-between' spacingY={8}>
      <DiscographyItem
        title='Surface'
        author='Peri Sound & mimoz'
        imageSrc='hyper-chroma.jpg'
        link='https://big-up.style/78B6Ouoxnb'
      />
    </Wrap>
  )
}
