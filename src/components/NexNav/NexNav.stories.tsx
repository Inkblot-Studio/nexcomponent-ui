import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
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
      subItems: [
        {
          label: 'UI Components',
          onClick: () => alert('🎨 UI Components clicked'),
          description: 'Enterprise-grade interface elements'
        },
        {
          label: 'Navigation',
          onClick: () => alert('🧭 Navigation clicked'),
          description: 'Smart navigation systems'
        },
        {
          label: 'Forms & Inputs',
          onClick: () => alert('📝 Forms & Inputs clicked'),
          description: 'Interactive form components'
        }
      ]
    },
    { 
      label: 'Documentation', 
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
          description: 'Ready-to-use templates'
        },
        {
          label: 'Community',
          onClick: () => alert('👥 Community clicked'),
          description: 'Join our developer community'
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

export const BlackGlassTheme = Template.bind({});
BlackGlassTheme.args = {
  ...AuthenticatedFull.args,
  theme: 'black-glass',
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
          description: 'Your saved components'
        }
      ]
    },
    { 
      label: 'Projects', 
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
          description: 'Collaborative workspaces'
        },
        {
          label: 'Templates',
          onClick: () => alert('📋 Templates clicked'),
          description: 'Ready-to-use project templates'
        }
      ]
    },
    { 
      label: 'Analytics', 
      subItems: [
        {
          label: 'Usage Stats',
          onClick: () => alert('📊 Usage Stats clicked'),
          description: 'Component usage analytics'
        },
        {
          label: 'Performance',
          onClick: () => alert('⚡ Performance clicked'),
          description: 'Performance metrics and insights'
        },
        {
          label: 'Reports',
          onClick: () => alert('📋 Reports clicked'),
          description: 'Detailed usage reports'
        }
      ]
    },
    { 
      label: 'Account', 
      subItems: [
        {
          label: 'Profile',
          onClick: () => alert('👤 Profile clicked'),
          description: 'Manage your account settings'
        },
        {
          label: 'Billing',
          onClick: () => alert('💳 Billing clicked'),
          description: 'Subscription and billing info'
        },
        {
          label: 'Team',
          onClick: () => alert('👥 Team clicked'),
          description: 'Manage team members'
        },
        {
          label: 'API Keys',
          onClick: () => alert('🔑 API Keys clicked'),
          description: 'Manage API access'
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

export const WithOverflowItems = Template.bind({});
WithOverflowItems.args = {
  displayName: 'NexComponent Enterprise',
  logoSrc: storyLogo,
  homeButtonHandler: () => alert('🏠 Home clicked'),
  navItems: [
    { 
      label: 'Dashboard', 
      onClick: () => alert('📊 Dashboard clicked')
    },
    { 
      label: 'Components', 
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
        }
      ]
    },
    { 
      label: 'Projects', 
      badge: '3',
      subItems: [
        {
          label: 'My Projects',
          onClick: () => alert('📁 My Projects clicked'),
          description: 'Your personal projects'
        },
        {
          label: 'Team Projects',
          onClick: () => alert('👥 Team Projects clicked'),
          description: 'Collaborative workspaces'
        }
      ]
    },
    { 
      label: 'Analytics', 
      subItems: [
        {
          label: 'Usage Stats',
          onClick: () => alert('📊 Usage Stats clicked'),
          description: 'Component usage analytics'
        },
        {
          label: 'Performance',
          onClick: () => alert('⚡ Performance clicked'),
          description: 'Performance metrics and insights'
        }
      ]
    },
    { 
      label: 'Documentation', 
      subItems: [
        {
          label: 'API Reference',
          onClick: () => alert('🔧 API Reference clicked'),
          description: 'Complete component documentation'
        },
        {
          label: 'Examples',
          onClick: () => alert('💡 Examples clicked'),
          description: 'Real-world usage examples'
        }
      ]
    },
    { 
      label: 'Resources', 
      badge: '5',
      subItems: [
        {
          label: 'Design System',
          onClick: () => alert('🎨 Design System clicked'),
          description: 'Complete design framework'
        },
        {
          label: 'Templates',
          onClick: () => alert('📋 Templates clicked'),
          description: 'Ready-to-use templates'
        }
      ]
    },
    { 
      label: 'Support', 
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
        }
      ]
    },
    { 
      label: 'Settings', 
      subItems: [
        {
          label: 'Account',
          onClick: () => alert('👤 Account clicked'),
          description: 'Manage your account settings'
        },
        {
          label: 'Preferences',
          onClick: () => alert('⚙️ Preferences clicked'),
          description: 'Customize your experience'
        }
      ]
    }
  ],
  user: {
    name: 'Sarah Johnson',
    avatarUrl: 'https://i.pravatar.cc/40?img=8',
    role: 'Pro',
  },
  isAuthenticated: true,
  onLogin: () => alert('🔐 Login clicked'),
  onLogout: () => alert('🚪 Logout clicked'),
  onProfile: () => alert('👤 Profile clicked'),
  endorsementCount: 25,
  subscription: {
    tier: 'Enterprise',
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
    { code: 'ja', label: '日本語' },
  ],
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
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
        }
      ]
    },
    { 
      label: 'Projects', 
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
          description: 'Collaborative workspaces'
        }
      ]
    },
    { 
      label: 'Analytics', 
      subItems: [
        {
          label: 'Usage Stats',
          onClick: () => alert('📊 Usage Stats clicked'),
          description: 'Component usage analytics'
        },
        {
          label: 'Performance',
          onClick: () => alert('⚡ Performance clicked'),
          description: 'Performance metrics and insights'
        }
      ]
    },
    { 
      label: 'Documentation', 
      subItems: [
        {
          label: 'API Reference',
          onClick: () => alert('🔧 API Reference clicked'),
          description: 'Complete component documentation'
        },
        {
          label: 'Examples',
          onClick: () => alert('💡 Examples clicked'),
          description: 'Real-world usage examples'
        }
      ]
    },
    { 
      label: 'Support', 
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
