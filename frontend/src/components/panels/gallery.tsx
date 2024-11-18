import { SimpleGrid, Tabs, Image, Button, Text, Badge, Card, Group } from '@mantine/core';
import ImageCard from '../imageTemplate'
const Gallery = () => {
  const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png'
  ];

  return (
    <Tabs.Panel value="gallery">
      <SimpleGrid cols={3}>
        <ImageCard title="Zanzi photo #1" url={images[0]} description="Photo description #1" />
        <ImageCard title="Zanzi photo #2" url={images[1]} description="Photo description #2" />
        <ImageCard title="Zanzi photo #3" url={images[2]} description="Photo description #3" />
        <ImageCard title="Zanzi photo #4" url={images[3]} description="Photo description #4" />
        <ImageCard title="Zanzi photo #5" url={images[4]} description="Photo description #5" />
        <ImageCard title="Zanzi photo #6" url={images[5]} description="Photo description #6" />
      </SimpleGrid>
    </Tabs.Panel>
  )
};

export default Gallery
