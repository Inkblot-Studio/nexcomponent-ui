import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexNav from './NexNav';

export default {
  title: 'NexComponent/NexNav',
  component: NexNav,
  tags: ['autodocs'],
} as Meta<typeof NexNav>;

const Template: StoryFn<typeof NexNav> = (args) => (
  <div style={{ height: '200vh' }}> 
    <NexNav {...args} />
  </div>
);


export const NexNavTest = Template.bind({});
NexNavTest.args = {
  altText: 'CMDT',
  identity: true,
  navItems: [
    { label: 'Home', onClick: () => console.log('Home clicked') },
    { label: 'About', onClick: () => console.log('About clicked') },
    { label: 'Services', onClick: () => console.log('Services clicked') },
    { label: 'Contact', onClick: () => console.log('Contact clicked') },
  ],
  identityProps: {
    onLoginClick: () => console.log('Login clicked'),
    onSignUpClick: () => console.log('Sign Up clicked'),
  }
};