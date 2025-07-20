import React, { useState } from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { motion } from 'framer-motion';
import { NexAlertProps } from './NexAlert.types';
import NexAlert from './NexAlert';
import { NexAlertsProvider, useAlerts } from './NexAlertsContext';
import NexButton from '../NexButton';

export default {
  title: 'NexComponent/NexAlert',
  component: NexAlert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <NexAlertsProvider>
        <Story />
      </NexAlertsProvider>
    ),
  ],
} as Meta<typeof NexAlert>;

type Story = StoryObj<typeof NexAlert>;

// Basic alert types
export const ErrorAlert: Story = {
  args: {
    id: 'error-1',
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    variant: 'default',
    size: 'md',
    dismissible: true,
  },
};

export const SuccessAlert: Story = {
  args: {
    id: 'success-1',
    type: 'success',
    title: 'Success',
    message: 'Your changes have been saved successfully.',
    variant: 'default',
    size: 'md',
    dismissible: true,
  },
};

export const InfoAlert: Story = {
  args: {
    id: 'info-1',
    type: 'info',
    title: 'Information',
    message: 'Here is some important information for you.',
    variant: 'default',
    size: 'md',
    dismissible: true,
  },
};

export const WarningAlert: Story = {
  args: {
    id: 'warning-1',
    type: 'warning',
    title: 'Warning',
    message: 'This action cannot be undone. Please proceed with caution.',
    variant: 'default',
    size: 'md',
    dismissible: true,
  },
};

export const NeutralAlert: Story = {
  args: {
    id: 'neutral-1',
    type: 'neutral',
    title: 'Notice',
    message: 'This is a neutral notification.',
    variant: 'default',
    size: 'md',
    dismissible: true,
  },
};

// Variant showcase
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NexAlert
        id="default-1"
        type="info"
        title="Default Variant"
        message="This is the default variant with clean styling."
        variant="default"
        dismissible
      />
      <NexAlert
        id="glass-1"
        type="success"
        title="Glass Variant"
        message="This is the glassmorphic variant with backdrop blur."
        variant="glass"
        dismissible
      />
      <NexAlert
        id="premium-1"
        type="warning"
        title="Premium Variant"
        message="This is the premium variant with signature styling."
        variant="premium"
        dismissible
      />
      <NexAlert
        id="minimal-1"
        type="info"
        title="Minimal Variant"
        message="This is the minimal variant with subtle styling."
        variant="minimal"
        dismissible
      />
    </div>
  ),
};

// Size showcase
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NexAlert
        id="small-1"
        type="info"
        title="Small Alert"
        message="This is a small alert for compact spaces."
        size="sm"
        variant="default"
        dismissible
      />
      <NexAlert
        id="medium-1"
        type="info"
        title="Medium Alert"
        message="This is a medium alert for standard use cases."
        size="md"
        variant="default"
        dismissible
      />
      <NexAlert
        id="large-1"
        type="info"
        title="Large Alert"
        message="This is a large alert for prominent messaging."
        size="lg"
        variant="default"
        dismissible
      />
    </div>
  ),
};

// Auto-dismiss with progress
export const AutoDismiss: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NexAlert
        id="toast-1"
        type="success"
        title="Toast Notification"
        message="This will auto-dismiss in 3 seconds with a progress bar."
        variant="glass"
        size="sm"
        timeout={3000}
        dismissible
      />
      <NexAlert
        id="toast-2"
        type="info"
        title="Pause on Hover"
        message="This alert pauses the timer when you hover over it."
        variant="glass"
        size="sm"
        timeout={5000}
        pauseOnHover
        dismissible
      />
    </div>
  ),
};

// Rich content alerts
export const RichContent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NexAlert
        id="rich-1"
        type="success"
        title="File Upload Complete"
        message="document.pdf has been successfully uploaded"
        description="The file is now available in your documents folder and can be shared with your team."
        variant="premium"
        size="lg"
        actions={[
          {
            label: 'View File',
            onClick: () => alert('View file clicked'),
            variant: 'primary',
          },
          {
            label: 'Share',
            onClick: () => alert('Share clicked'),
            variant: 'secondary',
          },
        ]}
        dismissible
      />
      <NexAlert
        id="rich-2"
        type="warning"
        title="Storage Space Low"
        message="You're running out of storage space"
        description="You have 2.1 GB remaining. Consider upgrading your plan or cleaning up unused files."
        variant="default"
        size="lg"
        actions={[
          {
            label: 'Upgrade Plan',
            onClick: () => alert('Upgrade clicked'),
            variant: 'primary',
          },
          {
            label: 'Clean Up',
            onClick: () => alert('Clean up clicked'),
            variant: 'secondary',
          },
          {
            label: 'Dismiss',
            onClick: () => alert('Dismiss clicked'),
            variant: 'ghost',
          },
        ]}
        dismissible
      />
    </div>
  ),
};

// Custom icons
export const CustomIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NexAlert
        id="custom-1"
        type="info"
        title="Custom Icon"
        message="This alert uses a custom icon instead of the default."
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        }
        variant="glass"
        dismissible
      />
      <NexAlert
        id="custom-2"
        type="success"
        title="Emoji Icon"
        message="This alert uses an emoji as the icon."
        icon={<span style={{ fontSize: '20px' }}>🎉</span>}
        variant="premium"
        dismissible
      />
    </div>
  ),
};

// Interactive demo with context
const AlertDemo: React.FC = () => {
  const { 
    createToast, 
    createNotification, 
    createBanner, 
    createError, 
    createSuccess,
    showInfo,
    showWarning,
    dismissAll 
  } = useAlerts();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <h3>Interactive Alert Demo</h3>
      <p>Click the buttons below to see different types of alerts in action.</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        <NexButton 
          text="Show Toast" 
          onClick={() => createToast('This is a toast notification!')}
          size="small"
        />
        <NexButton 
          text="Show Success" 
          onClick={() => createSuccess('Operation completed successfully!')}
          size="small"
        />
        <NexButton 
          text="Show Error" 
          onClick={() => createError('Something went wrong!')}
          size="small"
        />
        <NexButton 
          text="Show Info" 
          onClick={() => showInfo('Here is some information for you.')}
          size="small"
        />
        <NexButton 
          text="Show Warning" 
          onClick={() => showWarning('Please proceed with caution.')}
          size="small"
        />
        <NexButton 
          text="Show Banner" 
          onClick={() => createBanner('This is an important banner message.')}
          size="small"
        />
        <NexButton 
          text="Show Notification" 
          onClick={() => createNotification('This is a persistent notification.')}
          size="small"
        />
        <NexButton 
          text="Dismiss All" 
          onClick={dismissAll}
          size="small"
          type="glass"
        />
      </div>
    </div>
  );
};

export const InteractiveDemo: Story = {
  render: () => <AlertDemo />,
  parameters: {
    layout: 'fullscreen',
  },
};

// Complex example with undo functionality
export const ComplexExample: Story = {
  render: () => {
    const [deletedItems, setDeletedItems] = useState<string[]>([]);
    const { createSuccess, createError } = useAlerts();

    const handleDelete = (itemName: string) => {
      setDeletedItems(prev => [...prev, itemName]);
      createSuccess(`${itemName} has been deleted`, {
        onUndo: () => {
          setDeletedItems(prev => prev.filter(item => item !== itemName));
          createSuccess(`${itemName} has been restored`);
        },
        timeout: 5000,
        pauseOnHover: true,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3>File Management Demo</h3>
        <p>Click delete to see the undo functionality in action.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['document.pdf', 'image.jpg', 'video.mp4'].map((file) => (
            <div 
              key={file}
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '12px',
                border: '1px solid var(--nex-border-color)',
                borderRadius: '8px',
                background: 'var(--nex-surface-color)'
              }}
            >
              <span>{file}</span>
              <NexButton
                text="Delete"
                onClick={() => handleDelete(file)}
                size="small"
                type="glass"
              />
            </div>
          ))}
        </div>
        
        {deletedItems.length > 0 && (
          <div style={{ marginTop: '16px' }}>
            <h4>Deleted Items:</h4>
            <ul>
              {deletedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

// Accessibility showcase
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NexAlert
        id="accessibility-1"
        type="info"
        title="Accessible Alert"
        message="This alert is fully accessible with proper ARIA attributes and keyboard navigation."
        description="Screen readers will announce this alert properly, and keyboard users can navigate and dismiss it."
        variant="default"
        size="lg"
        dismissible
        persistent
      />
      <p style={{ fontSize: '14px', color: 'var(--nex-muted-font-color)' }}>
        <strong>Accessibility Features:</strong>
        <br />
        • Proper ARIA roles and labels
        <br />
        • Keyboard navigation support
        <br />
        • Screen reader announcements
        <br />
        • Focus management
        <br />
        • Reduced motion support
      </p>
    </div>
  ),
};

// Performance showcase
export const Performance: Story = {
  render: () => {
    const [alerts, setAlerts] = useState<Array<{ id: string; message: string }>>([]);
    const { addAlert } = useAlerts();

    const addMultipleAlerts = () => {
      const newAlerts = Array.from({ length: 10 }, (_, i) => ({
        id: `perf-${i}`,
        message: `Performance test alert ${i + 1}`,
      }));
      
      setAlerts(newAlerts);
      newAlerts.forEach((alert, index) => {
        setTimeout(() => {
          addAlert({
            type: 'info',
            message: alert.message,
            variant: 'glass',
            size: 'sm',
            timeout: 3000,
          });
        }, index * 100);
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <h3>Performance Test</h3>
        <p>Test the performance with multiple alerts appearing simultaneously.</p>
        
        <NexButton
          text="Add 10 Alerts"
          onClick={addMultipleAlerts}
          size="normal"
        />
        
        <div style={{ marginTop: '16px' }}>
          <h4>Performance Features:</h4>
          <ul style={{ textAlign: 'left', fontSize: '14px' }}>
            <li>Optimized animations with Framer Motion</li>
            <li>Efficient state management</li>
            <li>Smart alert limiting (max 4 by default)</li>
            <li>Memory leak prevention</li>
            <li>Reduced motion support for accessibility</li>
          </ul>
        </div>
      </div>
    );
  },
};