import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Home, Info, Settings, Users, FileText, ShoppingCart, HelpCircle, Bell } from 'lucide-react';
import storyBackground from '../../assets/img/story_background.jpg';
import storyLogo from '../../assets/img/nex_logo.svg';
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
  displayName: 'NexComponent',
  logoSrc: storyLogo,
  homeButtonHandler: () => alert('🏠 Home clicked'),
  navItems: [
    { 
      label: 'Overview', 
      onClick: () => alert('📊 Overview clicked')
    },
    { 
      label: 'Components', 
      onClick: () => alert('🧩 Components clicked'),
      icon: <Settings size={16} />,
      subItems: [
        {
          label: 'UI Components',
          onClick: () => alert('🎨 UI Components clicked'),
          description: 'Enterprise-grade interface elements'
        },
        {
          label: 'Navigation',
          onClick: () => alert('🧭 Navigation clicked'),
          description: 'Smart navigation systems',
          icon: <Settings size={14} />
        },
        {
          label: 'Forms & Inputs',
          onClick: () => alert('📝 Forms & Inputs clicked'),
          description: 'Interactive form components',
          icon: <FileText size={14} />
        }
      ]
    },
    { 
      label: 'Documentation', 
      onClick: () => alert('📚 Documentation clicked'),
      icon: <FileText size={16} />,
      subItems: [
        {
          label: 'Getting Started',
          onClick: () => alert('🚀 Getting Started clicked'),
          description: 'Quick setup guide'
        },
        {
          label: 'API Reference',
          onClick: () => alert('🔧 API Reference clicked'),
          description: 'Complete component documentation'
        },
        {
          label: 'Examples',
          onClick: () => alert('💡 Examples clicked'),
          description: 'Real-world usage examples',
          badge: 'New'
        }
      ]
    },
    { 
      label: 'Resources', 
      onClick: () => alert('📦 Resources clicked'),
      icon: <Users size={16} />,
      badge: '3',
      subItems: [
        {
          label: 'Design System',
          onClick: () => alert('🎨 Design System clicked'),
          description: 'Complete design framework'
        },
        {
          label: 'Templates',
          onClick: () => alert('📋 Templates clicked'),
          description: 'Ready-to-use templates',
          icon: <FileText size={14} />
        },
        {
          label: 'Community',
          onClick: () => alert('👥 Community clicked'),
          description: 'Join our developer community',
          icon: <Users size={14} />
        }
      ]
    },
    { 
      label: 'Support', 
      onClick: () => alert('🆘 Support clicked'),
      icon: <HelpCircle size={16} />,
      subItems: [
        {
          label: 'Help Center',
          onClick: () => alert('❓ Help Center clicked'),
          description: 'Find answers to common questions'
        },
        {
          label: 'Contact',
          onClick: () => alert('📞 Contact clicked'),
          description: 'Get in touch with our team'
        },
        {
          label: 'Status',
          onClick: () => alert('📊 Status clicked'),
          description: 'Service status and updates',
          icon: <Bell size={14} />
        }
      ]
    }
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

export const WithDropdowns = Template.bind({});
WithDropdowns.args = {
  displayName: 'NexComponent Pro',
  logoSrc: storyLogo,
  homeButtonHandler: () => alert('🏠 Home clicked'),
  navItems: [
    { 
      label: 'Dashboard', 
      onClick: () => alert('📊 Dashboard clicked')
    },
    { 
      label: 'Components', 
      onClick: () => alert('🧩 Components clicked'),
      icon: <Settings size={16} />,
      subItems: [
        {
          label: 'All Components',
          onClick: () => alert('🧩 All Components clicked'),
          description: 'Browse our complete library'
        },
        {
          label: 'Recently Added',
          onClick: () => alert('🆕 Recently Added clicked'),
          description: 'Latest component additions',
          badge: 'New'
        },
        {
          label: 'Favorites',
          onClick: () => alert('⭐ Favorites clicked'),
          description: 'Your saved components',
          icon: <FileText size={14} />
        }
      ]
    },
    { 
      label: 'Projects', 
      onClick: () => alert('📁 Projects clicked'),
      icon: <FileText size={16} />,
      badge: '2',
      subItems: [
        {
          label: 'My Projects',
          onClick: () => alert('📁 My Projects clicked'),
          description: 'Your personal projects'
        },
        {
          label: 'Team Projects',
          onClick: () => alert('👥 Team Projects clicked'),
          description: 'Collaborative workspaces',
          icon: <Users size={14} />
        },
        {
          label: 'Templates',
          onClick: () => alert('📋 Templates clicked'),
          description: 'Ready-to-use project templates',
          icon: <FileText size={14} />
        }
      ]
    },
    { 
      label: 'Analytics', 
      onClick: () => alert('📈 Analytics clicked'),
      icon: <FileText size={16} />,
      subItems: [
        {
          label: 'Usage Stats',
          onClick: () => alert('📊 Usage Stats clicked'),
          description: 'Component usage analytics'
        },
        {
          label: 'Performance',
          onClick: () => alert('⚡ Performance clicked'),
          description: 'Performance metrics and insights',
          icon: <Settings size={14} />
        },
        {
          label: 'Reports',
          onClick: () => alert('📋 Reports clicked'),
          description: 'Detailed usage reports',
          icon: <FileText size={14} />
        }
      ]
    },
    { 
      label: 'Account', 
      onClick: () => alert('👤 Account clicked'),
      icon: <Users size={16} />,
      subItems: [
        {
          label: 'Profile',
          onClick: () => alert('👤 Profile clicked'),
          description: 'Manage your account settings'
        },
        {
          label: 'Billing',
          onClick: () => alert('💳 Billing clicked'),
          description: 'Subscription and billing info',
          icon: <FileText size={14} />
        },
        {
          label: 'Team',
          onClick: () => alert('👥 Team clicked'),
          description: 'Manage team members',
          icon: <Users size={14} />
        },
        {
          label: 'API Keys',
          onClick: () => alert('🔑 API Keys clicked'),
          description: 'Manage API access',
          icon: <Settings size={14} />
        }
      ]
    }
  ],
  user: {
    name: 'Alex Chen',
    avatarUrl: 'https://i.pravatar.cc/40?img=5',
    role: 'Pro',
  },
  isAuthenticated: true,
  onLogin: () => alert('🔐 Login clicked'),
  onLogout: () => alert('🚪 Logout clicked'),
  onProfile: () => alert('👤 Profile clicked'),
  endorsementCount: 18,
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
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'zh', label: '中文' },
  ],
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
  ...WithDropdowns.args,
};
