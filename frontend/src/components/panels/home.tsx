import { Tabs, Card, Text, Box } from '@mantine/core';

const HomePanel = () => {
  return (
    <Tabs.Panel value="homePage">
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          boxSizing: 'border-box',
        }}
      >
        <Card
          shadow="md"
          padding="xl"
          radius="lg"
          withBorder
          style={{
            width: '100%', // Make the card fill the panel width
            overflow: 'auto', // Handle long content gracefully
          }}
        >
          <Text size="xl" fw={700} mb="lg" >
            Welcome to Zanzi Website
          </Text>

          <Text size="sm" c="dimmed" mb="md">
            Hello and welcome to Zanzi's website! Zanzi is a talented photographer with a passion for capturing the beauty of the world through her lens. Here, you can explore her amazing portfolio and learn more about her creative journey.
          </Text>

          <Text size="sm" mb="md">
            <strong>About Zanzi:</strong> With years of experience in photography, Zanzi specializes in landscapes, portraits, and creative projects. Her work reflects a deep connection with nature and a keen eye for detail.
          </Text>

          <Text size="sm">
            <strong>Contact Zanzi:</strong>
            <br />
            Email: <a href="mailto:zanzi@example.com">zanzi@example.com</a>
            <br />
            Phone: +123 456 7890
            <br />
            Social Media: Follow Zanzi on Instagram @zanzi_photography
          </Text>
        </Card>
      </Box>
    </Tabs.Panel>
  );
};

export default HomePanel;


