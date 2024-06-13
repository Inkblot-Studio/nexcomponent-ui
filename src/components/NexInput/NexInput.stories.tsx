import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexInput from './NexInput';
import { NexInputProps } from './NexInput.types';

export default {
  title: 'NexComponent/NexInput',
  component: NexInput,
  tags: ['autodocs'],
} as Meta<NexInputProps>;
  
const Template: StoryFn<NexInputProps> = (args) => (
    <div style={{ margin: '40px' }}> 
      <NexInput {...args} />
    </div>
);

export const NexInputTest = Template.bind({});
NexInputTest.args = {
  placeholder: 'Enter text here',
  type: 'password',
  peekButton: true
};