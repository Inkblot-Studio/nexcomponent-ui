import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexFooter from './NexFooter';
import storyBackround from '../../assets/img/story_background.jpg';
import { NexFooterProps } from './NexFooter.types';

export default {
  title: 'NexComponent/NexFooter',
  component: NexFooter,
  tags: ['autodocs'],
} as Meta<NexFooterProps>;

const Template: StoryFn<NexFooterProps> = (args) => (
  <div
    style={{
      height: '200vh',
      backgroundImage: `url(${storyBackround})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div style={{ position: 'relative', top: '165vh'}}>
      <NexFooter {...args} />
    </div>
  </div>
);

export const NexFooterTest = Template.bind({});
NexFooterTest.args = {
  displayName: 'CMDT',
  socials: [
    { type: 'facebook', url: 'https://www.facebook.com/CMDT' },
    { type: 'twitter', url: 'https://www.twitter.com/CMDT' },
    { type: 'linkedin', url: 'https://www.linkedin.com/company/CMDT' },
  ],
};