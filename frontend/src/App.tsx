import '@mantine/core/styles.css';
import { MantineProvider, Tabs, rem, Box } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings, IconHome } from '@tabler/icons-react';
import { HomePanel, Gallery, Messages, Settings } from './components/panels';
import Title from './components/title';

export default function App() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <MantineProvider>
      <Title />
      <Box p="sm"> {/* Add padding here */}
        <Tabs variant="pills" orientation="horizontal" defaultValue="gallery">
          <Tabs.List grow justify="center">
            <Tabs.Tab value="homePage" leftSection={<IconHome style={iconStyle} />}>
              Home Page
            </Tabs.Tab>
            <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
              Gallery
            </Tabs.Tab>
            <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
              Messages
            </Tabs.Tab>
            <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <HomePanel />
          <Gallery />
          <Messages />
          <Settings />
        </Tabs>
      </Box>
    </MantineProvider>
  );
}

