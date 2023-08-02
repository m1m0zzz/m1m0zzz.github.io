"use client";

import {
  Text,
  Wrap
} from '@chakra-ui/react'
import DistributionItem from './item';

export default function Distribution() {
  return (
    <Wrap justify='space-between' spacingY={8}>
      <DistributionItem
        title='mimoz Ableton Racks vol.1'
        imageSrc='renders-br-E25OJ4I7PoE-unsplash.jpg'
        downloadLink='https://www.toneden.io/mimoz/post/mimoz-ableton-racks-vol-1'
        isExternal
      >
        <Text>幅広いジャンルの音を集めました</Text>
        <Text>Audio Effect Rack × 16</Text>
        <Text>Instrument Rack × 17</Text>
      </DistributionItem>
    </Wrap>
  )
}
