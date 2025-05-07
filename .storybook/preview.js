import React from 'react';

// Import global styles
import './preview.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '360px',
            height: '640px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
      },
      defaultViewport: 'desktop',
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F6F9FC' },
        { name: 'dark', value: '#1F2937' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'black', value: '#000000' },
      ],
    },
    docs: {
      source: {
        type: 'dynamic',
        excludeDecorators: true,
      },
      canvas: {
        sourceState: 'shown',
      },
      story: {
        inline: true,
        iframeHeight: '100px',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
    measure: { enabled: true },
    outline: { enabled: true },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '2em' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview; 