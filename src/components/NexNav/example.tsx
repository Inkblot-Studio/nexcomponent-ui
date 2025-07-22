import React, { useState, useEffect } from 'react';
import NexNav from './index';
import { themeEventEmitter, useThemeListener } from './ThemeContext';
import type { NexNavProps } from './NexNav.types';

const NexNavExample: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'black-glass'>('light');
  const [themeChangeCount, setThemeChangeCount] = useState(0);

  // Example navigation items
  const navItems = [
    {
      label: 'Dashboard',
      onClick: () => console.log('Dashboard clicked'),
      description: 'View your main dashboard'
    },
    {
      label: 'Products',
      onClick: () => console.log('Products clicked'),
      subItems: [
        { label: 'All Products', onClick: () => console.log('All Products clicked') },
        { label: 'Categories', onClick: () => console.log('Categories clicked') },
        { label: 'Analytics', onClick: () => console.log('Analytics clicked') }
      ]
    },
    {
      label: 'Team',
      onClick: () => console.log('Team clicked'),
      badge: '3'
    },
    {
      label: 'Settings',
      onClick: () => console.log('Settings clicked'),
      subItems: [
        { label: 'Profile', onClick: () => console.log('Profile clicked') },
        { label: 'Security', onClick: () => console.log('Security clicked') },
        { label: 'Integrations', onClick: () => console.log('Integrations clicked') }
      ]
    }
  ];

  // Example user data
  const user = {
    name: 'John Doe',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'Admin' as const
  };

  // Example language options
  const languageOptions = [
    { code: 'en', label: 'English', icon: '🇺🇸' },
    { code: 'es', label: 'Español', icon: '🇪🇸' },
    { code: 'fr', label: 'Français', icon: '🇫🇷' },
    { code: 'de', label: 'Deutsch', icon: '🇩🇪' },
    { code: 'ja', label: '日本語', icon: '🇯🇵' }
  ];

  // Example subscription data
  const subscription = {
    tier: 'Pro',
    renewalDate: '2024-12-31'
  };

  // Method 1: Using the onThemeChange callback prop
  const handleThemeChange = (theme: 'light' | 'black-glass') => {
    console.log('Theme changed via callback:', theme);
    setCurrentTheme(theme);
    setThemeChangeCount(prev => prev + 1);
  };

  // Method 2: Using the useThemeListener hook
  useThemeListener((theme) => {
    console.log('Theme changed via listener hook:', theme);
    // This will also update when theme changes from anywhere in the app
  });

  // Method 3: Using the global event emitter directly
  useEffect(() => {
    const handleGlobalThemeChange = (theme: 'light' | 'black-glass') => {
      console.log('Theme changed via global emitter:', theme);
      // You can perform any global theme-related actions here
    };

    themeEventEmitter.on('themeChange', handleGlobalThemeChange);
    
    return () => {
      themeEventEmitter.off('themeChange', handleGlobalThemeChange);
    };
  }, []);

  const handleHomeClick = () => {
    console.log('Home button clicked');
  };

  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleProfile = () => {
    console.log('Profile clicked');
  };

  const handleLocaleChange = (locale: string) => {
    console.log('Locale changed to:', locale);
  };

  const handleEndorsementsClick = () => {
    console.log('Endorsements clicked');
  };

  const handleSubscriptionClick = () => {
    console.log('Subscription clicked');
  };

  const handleActivityLogClick = () => {
    console.log('Activity log clicked');
  };

  const handleSecurityClick = () => {
    console.log('Security clicked');
  };

  const handleIntegrationsClick = () => {
    console.log('Integrations clicked');
  };

  const handleAdminPanelClick = () => {
    console.log('Admin panel clicked');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--nex-background-color)' }}>
      {/* Theme Status Display */}
      <div style={{
        position: 'fixed',
        top: '80px',
        right: '20px',
        padding: '12px 16px',
        backgroundColor: 'var(--nex-surface-color)',
        border: '1px solid var(--nex-border-color)',
        borderRadius: '8px',
        fontSize: '14px',
        zIndex: 1000,
        boxShadow: 'var(--nex-shadow-sm)'
      }}>
        <div><strong>Current Theme:</strong> {currentTheme}</div>
        <div><strong>Theme Changes:</strong> {themeChangeCount}</div>
      </div>

      {/* Navigation Component */}
      <NexNav
        logoSrc="/nex_logo.svg"
        displayName="NexComponent"
        homeButtonHandler={handleHomeClick}
        navItems={navItems}
        isAuthenticated={true}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onProfile={handleProfile}
        languageOptions={languageOptions}
        endorsementCount={42}
        subscription={subscription}
        onEndorsementsClick={handleEndorsementsClick}
        onSubscriptionClick={handleSubscriptionClick}
        onActivityLogClick={handleActivityLogClick}
        onSecurityClick={handleSecurityClick}
        onIntegrationsClick={handleIntegrationsClick}
        onAdminPanelClick={handleAdminPanelClick}
        theme="auto"
        onThemeChange={handleThemeChange}
      />

      {/* Demo Content */}
      <div style={{
        padding: '120px 40px 40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: 'var(--nex-font-color)',
          fontSize: 'var(--nex-font-size-3xl)',
          marginBottom: 'var(--nex-spacing-lg)'
        }}>
          NexNav Theme Emitter Demo
        </h1>
        
        <p style={{
          color: 'var(--nex-muted-font-color)',
          fontSize: 'var(--nex-font-size-lg)',
          lineHeight: 'var(--nex-line-height-base)',
          marginBottom: 'var(--nex-spacing-xl)'
        }}>
          This example demonstrates the three ways to listen for theme changes:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--nex-spacing-lg)',
          marginBottom: 'var(--nex-spacing-xl)'
        }}>
          <div style={{
            padding: 'var(--nex-spacing-lg)',
            backgroundColor: 'var(--nex-surface-color)',
            border: '1px solid var(--nex-border-color)',
            borderRadius: 'var(--nex-radius-md)',
            boxShadow: 'var(--nex-shadow-sm)'
          }}>
            <h3 style={{
              color: 'var(--nex-font-color)',
              fontSize: 'var(--nex-font-size-xl)',
              marginBottom: 'var(--nex-spacing-md)'
            }}>
              Method 1: onThemeChange Callback
            </h3>
            <p style={{
              color: 'var(--nex-muted-font-color)',
              fontSize: 'var(--nex-font-size-md)'
            }}>
              Pass a callback function to the NexNav component's onThemeChange prop. 
              This is the simplest method for parent components.
            </p>
          </div>

          <div style={{
            padding: 'var(--nex-spacing-lg)',
            backgroundColor: 'var(--nex-surface-color)',
            border: '1px solid var(--nex-border-color)',
            borderRadius: 'var(--nex-radius-md)',
            boxShadow: 'var(--nex-shadow-sm)'
          }}>
            <h3 style={{
              color: 'var(--nex-font-color)',
              fontSize: 'var(--nex-font-size-xl)',
              marginBottom: 'var(--nex-spacing-md)'
            }}>
              Method 2: useThemeListener Hook
            </h3>
            <p style={{
              color: 'var(--nex-muted-font-color)',
              fontSize: 'var(--nex-font-size-md)'
            }}>
              Use the useThemeListener hook in any component to listen for theme changes 
              from anywhere in your application.
            </p>
          </div>

          <div style={{
            padding: 'var(--nex-spacing-lg)',
            backgroundColor: 'var(--nex-surface-color)',
            border: '1px solid var(--nex-border-color)',
            borderRadius: 'var(--nex-radius-md)',
            boxShadow: 'var(--nex-shadow-sm)'
          }}>
            <h3 style={{
              color: 'var(--nex-font-color)',
              fontSize: 'var(--nex-font-size-xl)',
              marginBottom: 'var(--nex-spacing-md)'
            }}>
              Method 3: Global Event Emitter
            </h3>
            <p style={{
              color: 'var(--nex-muted-font-color)',
              fontSize: 'var(--nex-font-size-md)'
            }}>
              Use the themeEventEmitter directly for advanced use cases or when you need 
              to listen from outside React components.
            </p>
          </div>
        </div>

        <div style={{
          padding: 'var(--nex-spacing-lg)',
          backgroundColor: 'var(--nex-surface-color)',
          border: '1px solid var(--nex-border-color)',
          borderRadius: 'var(--nex-radius-md)',
          boxShadow: 'var(--nex-shadow-sm)'
        }}>
          <h3 style={{
            color: 'var(--nex-font-color)',
            fontSize: 'var(--nex-font-size-xl)',
            marginBottom: 'var(--nex-spacing-md)'
          }}>
            Usage Instructions
          </h3>
          <ol style={{
            color: 'var(--nex-muted-font-color)',
            fontSize: 'var(--nex-font-size-md)',
            lineHeight: 'var(--nex-line-height-base)',
            paddingLeft: 'var(--nex-spacing-lg)'
          }}>
            <li>Click the theme toggle button in the navigation to change themes</li>
            <li>Watch the console for theme change events from all three methods</li>
            <li>The theme status display shows the current theme and change count</li>
            <li>All theme changes are automatically persisted to localStorage</li>
            <li>The theme system supports both light and black-glass themes</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default NexNavExample; 