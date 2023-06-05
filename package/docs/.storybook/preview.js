/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      values: [
        { name: 'dark gray', value: '#313335' }
      ]
    }
  },
};

export default preview;
