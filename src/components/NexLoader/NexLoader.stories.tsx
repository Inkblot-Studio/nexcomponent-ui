import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexLoader from './NexLoader';

export default {
  title: 'NexComponent/NexLoader',
  component: NexLoader,
  tags: ['autodocs'],
} as Meta<typeof NexLoader>;
  
const Template: StoryFn<typeof NexLoader> = (args) => <NexLoader  />;
export const NexLoaderTest = Template.bind({});
