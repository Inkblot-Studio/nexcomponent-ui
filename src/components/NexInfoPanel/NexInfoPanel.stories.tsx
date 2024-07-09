import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexInfoPanel from './NexInfoPanel';
import { NexInfoPanelProps } from './NexInfoPanel.types';
import storyHeroSection from '../../assets/img/story_hero_section.jpg';

export default {
  title: 'NexComponent/NexInfoPanel',
  component: NexInfoPanel,
  tags: ['autodocs'],
} as Meta<NexInfoPanelProps>;;

const Template: StoryFn<NexInfoPanelProps> = (args) => (
  <div style={{ margin: '20px' }}>
    <NexInfoPanel {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'NexInfoPanel Title',
  content: 'This is the content of the NexInfoPanel. It can include any relevant information about the topic.',
  imageUrl: storyHeroSection
};