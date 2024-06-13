import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexSeparator from './NexSeparator';
import { NexSeparatorProps } from './NexSeparator.types';

export default {
  title: 'NexComponent/NexSeparator',
  component: NexSeparator,
  tags: ['autodocs'],
} as Meta<NexSeparatorProps>;
  
const Template: StoryFn<NexSeparatorProps> = (args) => (
    <div style={{ margin: '40px' }}> 
      <NexSeparator {...args} />
    </div>
);

export const NexInputTest = Template.bind({});
NexInputTest.args = {
};