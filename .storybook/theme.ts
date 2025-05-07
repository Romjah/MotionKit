import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'MotionKit',
  brandUrl: 'https://github.com/yourusername/motion-kit',
  brandTarget: '_self',

  // UI
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E1E4E8',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1F2937',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#6B7280',
  barSelectedColor: '#3498db',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#E1E4E8',
  inputTextColor: '#1F2937',
  inputBorderRadius: 4,

  // Brand colors
  colorPrimary: '#3498db',
  colorSecondary: '#2ecc71',
}); 