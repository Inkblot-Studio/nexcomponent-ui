import { create } from '@storybook/theming';
import ibsLogo from '../src/assets/img/ibs_logo.png'

export default create({
  base: 'dark',
  
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  
  brandTitle: 'NexComponent',
  brandUrl: 'https://main--6672d9cb533920c89e299205.chromatic.com',
  brandImage: ibsLogo,
  brandTarget: '_self',
  
  // Colors
  colorPrimary: '#BB86FC', // Soft purple primary color
  colorSecondary: '#03DAC6', // Soft teal secondary color
  
  // UI
  appBg: '#121212', // Dark background
  appContentBg: '#1E1E1E', // Slightly lighter dark background for content
  appPreviewBg: '#fafafa', // Dark background for preview
  appBorderColor: '#333333', // Dark grey border color
  appBorderRadius: 8, // More rounded corners
  
  // Text colors
  textColor: '#E0E0E0', // Light grey text color
  textInverseColor: '#121212', // Dark inverse text color for readability
  
  // Toolbar default and active colors
  barTextColor: '#B3B3B3', // Light grey text color for toolbar
  barSelectedColor: '#BB86FC', // Soft purple for selected toolbar items
  barHoverColor: '#BB86FC', // Soft purple for hovered toolbar items
  barBg: '#1E1E1E', // Slightly lighter dark background for toolbar
  
  // Form colors
  inputBg: '#1E1E1E', // Slightly lighter dark background for inputs
  inputBorder: '#333333', // Dark grey border for inputs
  inputTextColor: '#E0E0E0', // Light grey text color for inputs
  inputBorderRadius: 8, // More rounded input elements
});