import { create } from '@storybook/theming';
import nexLogo from '../src/assets/img/nex_logo.svg';

export default create({
  base: 'dark',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'NexComponent',
  brandUrl: 'https://main--6672d9cb533920c89e299205.chromatic.com',
  brandImage: nexLogo,
  brandTarget: '_self',

  // Colors
  colorPrimary: '#FF1801', // Formula 1 red
  colorSecondary: '#FF4A26', // Slightly softer red-orange variant

  // UI
  appBg: '#0D0D0D', // Deep black background
  appContentBg: '#1A1A1A', // Slightly lifted dark for inner content
  appPreviewBg: '#1E1E1E', // Matching preview pane
  appBorderColor: '#2A2A2A',
  appBorderRadius: 8,

  // Text colors
  textColor: '#E6E6E6',
  textInverseColor: '#0D0D0D',

  // Toolbar
  barTextColor: '#CCCCCC',
  barSelectedColor: '#FF1801',
  barHoverColor: '#FF1801',
  barBg: '#1A1A1A',

  // Forms
  inputBg: '#1E1E1E',
  inputBorder: '#333333',
  inputTextColor: '#E6E6E6',
  inputBorderRadius: 8,
});
