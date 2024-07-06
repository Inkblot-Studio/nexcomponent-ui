import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexHeroCard from './NexHeroCard';
import { NexHeroCardProps } from './NexHeroCard.types';
import storyHeroSection from '../../assets/img/story_hero_section.jpg';

export default {
  title: 'NexComponent/NexHeroCard',
  component: NexHeroCard,
  tags: ['autodocs'],
} as Meta<NexHeroCardProps>;

const Template: StoryFn<NexHeroCardProps> = (args) => (
  <div>
    <NexHeroCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Hero Card Title',
    subtitle: 'This is the subtitle of the hero card.',
    type: 'primary',
    buttonLabel: 'Click Me',
    buttonHandle: () => alert('Button clicked!'),
    backgroundUrl: storyHeroSection,
  };