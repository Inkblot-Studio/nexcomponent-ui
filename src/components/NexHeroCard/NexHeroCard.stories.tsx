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

export const Primary = Template.bind({});
Primary.args = {
    title: 'Hero Card Title',
    subtitle: 'This is the subtitle of the hero card.',
    type: 'primary',
    buttonLabel: 'Click Me',
    buttonHandle: () => alert('Button clicked!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: 'Hero Card Title',
    subtitle: 'This is the subtitle of the hero card.',
    type: 'secondary',
    buttonLabel: 'Click Me',
    buttonHandle: () => alert('Button clicked!'),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    title: 'Hero Card Title',
    subtitle: 'This is the subtitle of the hero card.',
    type: 'tertiary',
    buttonLabel: 'Click Me',
    buttonHandle: () => alert('Button clicked!'),
};

export const Quaternary = Template.bind({});
Quaternary.args = {
    title: 'Hero Card Title',
    subtitle: 'This is the subtitle of the hero card.',
    type: 'quaternary',
    buttonLabel: 'Click Me',
    buttonHandle: () => alert('Button clicked!'),
};