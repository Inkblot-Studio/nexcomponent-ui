import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import storyBackground from '../../assets/img/story_background.jpg';
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
      backgroundImage: `url(${storyBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    <NexNav {...args} />
  </div>
);

export const AuthenticatedFull = Template.bind({});
AuthenticatedFull.args = {
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
    role: 'Pro',
  },
  isAuthenticated: true,
  onLogin: () => alert('🔐 Login clicked'),
  onLogout: () => alert('🚪 Logout clicked'),
  onProfile: () => alert('👤 Profile clicked'),
  endorsementCount: 12,
  subscription: {
    tier: 'Pro',
    renewalDate: '2025-12-01',
  },
  onEndorsementsClick: () => alert('✅ Endorsements'),
  onSubscriptionClick: () => alert('💳 Subscription Settings'),
  onActivityLogClick: () => alert('📄 View Activity'),
  onSecurityClick: () => alert('🔐 Security Settings'),
  onIntegrationsClick: () => alert('🔌 Manage Integrations'),
  onAdminPanelClick: () => alert('🛠 Admin Panel'),
  languageOptions: [
    { code: 'en', label: 'English' },
    { code: 'bg', label: 'Български' },
    { code: 'cs', label: 'Čeština' },
  ],
};

export const AuthenticatedMinimal = Template.bind({});
AuthenticatedMinimal.args = {
  ...AuthenticatedFull.args,
  user: {
    name: 'John Smith',
    avatarUrl: undefined,
  },
  subscription: undefined,
  endorsementCount: undefined,
  onEndorsementsClick: undefined,
  onSubscriptionClick: undefined,
  onActivityLogClick: undefined,
  onSecurityClick: undefined,
  onIntegrationsClick: undefined,
  onAdminPanelClick: undefined,
};

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {
  ...AuthenticatedFull.args,
  isAuthenticated: false,
  user: undefined,
  onLogout: undefined,
  onProfile: undefined,
  onEndorsementsClick: undefined,
  onSubscriptionClick: undefined,
  onActivityLogClick: undefined,
  onSecurityClick: undefined,
  onIntegrationsClick: undefined,
  onAdminPanelClick: undefined,
};

export const DarkMode = Template.bind({});
DarkMode.decorators = [
  (Story) => (
    <div className="dark" style={{ backgroundColor: '#1A1F36', color: '#fff', height: '100vh' }}>
      <Story />
    </div>
  ),
];
DarkMode.args = {
  ...AuthenticatedFull.args,
};
