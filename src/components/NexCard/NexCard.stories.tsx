import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexCard from './NexCard';
import { NexCardProps } from './NexCard.types';
import NexButton from '../NexButton';
import storyHeroSection from '../../assets/img/story_hero_section.jpg';

export default {
  title: 'NexComponent/NexCard',
  component: NexCard,
  tags: ['autodocs'],
} as Meta<NexCardProps>;;

const Template: StoryFn<NexCardProps> = (args) => (
  <div style={{ margin: '20px' }}>
    <NexCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  content: 'This is a default card without an image or actions.',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  imageUrl: storyHeroSection,
  content: 'This card includes an image.',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Card with Actions',
  content: 'This card includes some actions.',
  actions: <NexButton inverted={true} text='Action'/>,
};

export const FullFeatured = Template.bind({});
FullFeatured.args = {
  title: 'Full Featured Card',
  imageUrl: storyHeroSection,
  content: 'This card has it all - image, content, actions, and footer.',
  actions: (
    <>
      <NexButton  text='Read More'/>
      <NexButton  text='Like'/>
    </>
  )
};