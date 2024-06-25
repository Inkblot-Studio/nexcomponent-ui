import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexFooter from './NexFooter';
import { NexFooterProps } from './NexFooter.types';

export default {
  title: 'NexComponent/NexFooter',
  component: NexFooter,
  tags: ['autodocs'],
} as Meta<NexFooterProps>;
  
const Template: StoryFn<NexFooterProps> = (args) => (
    <div style={{ margin: '40px' }}> 
      <NexFooter {...args} />
    </div>
);

export const NexInputTest = Template.bind({});
NexInputTest.args = {

};