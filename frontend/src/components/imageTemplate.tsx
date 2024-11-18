import React, { useState } from 'react'
import { Card, Image, Text, Group, Button, Badge, Overlay, CloseButton, Box } from '@mantine/core'

interface ImageCardProps {
  title: string;
  url: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, url, description }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleOpenFullscreen = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        <Card shadow="sm" radius="md" withBorder>
          <Card.Section>
            <Image 
              src={url} 
              height={320} 
              style={{ opacity: 1 }} 
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{title}</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            {description}
          </Text>

          <Button 
            color="blue" 
            fullWidth 
            mt="md" 
            radius="md"
            onClick={handleOpenFullscreen}
          >
            See full photo
          </Button>
        </Card>
      </div>

      {isFullscreen && (
        <Overlay 
          color="#000" 
          opacity={1} 
          zIndex={1000} 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CloseButton 
            size="xl"
            color="white"
            style={{ 
              position: 'absolute', 
              top: '20px', 
              right: '20px', 
              zIndex: 1001,
              opacity: 1
            }} 
            onClick={handleCloseFullscreen} 
          />
          <Box 
            style={{ 
              maxWidth: '80%', 
              maxHeight: '80%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              background: 'white'
            }}
          >
            <Image 
              src={url}
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%',
                opacity: 1
              }} 
            />
          </Box>
        </Overlay>
      )}
    </>
  );
};

export default ImageCard;
