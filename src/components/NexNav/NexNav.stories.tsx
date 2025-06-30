import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import storyBackround from '../../assets/img/story_background.jpg';
import NexNav from './NexNav';

export default {
  title: 'NexComponent/NexNav',
  component: NexNav,
  tags: ['autodocs'],
} as Meta<typeof NexNav>;

const Template: StoryFn<typeof NexNav> = (args) => (
  <div
    style={{
      height: '200vh',
      backgroundImage: `url(${storyBackround})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    <NexNav {...args} />
  </div>
);

export const NexNavTest = Template.bind({});
NexNavTest.args = {
  displayName: 'CMDT',
  logoSrc: 'https://dummyimage.com/120x40/000/fff&text=LOGO',
  homeButtonHandler: () => alert('🏠 Home clicked'),
  navItems: [
    { label: 'Home', onClick: () => alert('🏡 Home clicked') },
    { label: 'About', onClick: () => alert('ℹ️ About clicked') },
    { label: 'Services', onClick: () => alert('🛠 Services clicked') },
    { label: 'Contact', onClick: () => alert('📞 Contact clicked') },
  ],
  user: {
    name: 'Jane Doe',
    avatarUrl: 'https://i.pravatar.cc/40?img=3',
  },
  isAuthenticated: true,
  onLogin: () => alert('🔐 Login clicked'),
  onLogout: () => alert('🚪 Logout clicked'),
  onProfile: () => alert('👤 Profile clicked'),
  onDevSwitchToggle: () => alert('🧪 Toggle Dev Mode'),
  isDevMode: true,
  languageOptions: [
    { code: 'en', label: 'English' },
    { code: 'bg', label: 'Български' },
    { code: 'cs', label: 'Čeština' },
  ],
};
