import type { Preview } from '@storybook/react'
import GlobalStyles from '../styles/global'
import React from 'react';

const withThemeProvider = (Story, context) => {
  return (
      <> 
        <GlobalStyles />
        <Story />
      </>
  );
};

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
