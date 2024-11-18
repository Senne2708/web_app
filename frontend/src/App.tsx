import '@mantine/core/styles.css';

import { MantineProvider, Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { HomePanel, Gallery, Messages, Settings } from "./components/panels/*";

export default function App() {
  const iconStyle = { width: rem(12), height: rem(12) };


  return (
    <MantineProvider >
      <Tabs variant="pills" orientation="vertical" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="homePage" leftSection={<IconPhoto style={iconStyle} />}>
          Home Page
        </Tabs.Tab>
        <Tabs.Tab value="gallery" leftSection={<IconMessageCircle style={iconStyle} />}>
          Galleru
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <HomePanel />

    </Tabs>
    </MantineProvider>
  );
}
