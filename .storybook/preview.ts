import type { Preview } from "@storybook/react";

import NexComponentTheme from "./NexComponentTheme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    docs: {
      theme: NexComponentTheme,
    },
  },

  tags: ["autodocs"]
};

export default preview;
