import { Card, Text, Box, Center } from '@mantine/core';

const Title = () => {
  return (
    <Box p="xl">
      <Card shadow="lg" radius="lg" withBorder>
        <Center>
          <Text fw={700} size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 45 }}>
            Zanzi Website
          </Text>
        </Center>
      </Card>
    </Box>
  );
};

export default Title;

