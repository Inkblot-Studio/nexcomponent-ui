import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexSimpleTextCard from './NexSimpleTextCard';
import { NexSimpleTextCardProps } from './NexSimpleTextCard.types';

export default {
  title: 'NexComponent/NexSimpleTextCard',
  component: NexSimpleTextCard,
  tags: ['autodocs'],
} as Meta<NexSimpleTextCardProps>;;

const Template: StoryFn<NexSimpleTextCardProps> = (args) => (
  <div style={{ margin: '20px' }}>
    <NexSimpleTextCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Simple Card',
  subtitle: 'This is a simple text card.',
};