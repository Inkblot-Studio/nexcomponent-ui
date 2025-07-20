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

// Undo functionality example
export const UndoExample: Story = {
  args: {
    id: 'undo-1',
    type: 'success',
    title: 'Item Deleted',
    message: 'The item has been successfully deleted.',
    variant: 'glass',
    size: 'md',
    dismissible: true,
    onUndo: () => alert('Undo clicked! Item restored.'),
    timeout: 8000,
    pauseOnHover: true,
  },
};

// Actions and Undo example
export const ActionsAndUndoExample: Story = {
  args: {
    id: 'actions-undo-1',
    type: 'warning',
    title: 'Storage Space Low',
    message: 'You\'re running out of storage space.',
    description: 'Consider upgrading your plan or cleaning up unused files.',
    variant: 'premium',
    size: 'lg',
    dismissible: true,
    actions: [
      {
        label: 'Upgrade Plan',
        onClick: () => alert('Upgrade plan clicked!'),
        variant: 'primary',
      },
      {
        label: 'Clean Up',
        onClick: () => alert('Clean up clicked!'),
        variant: 'secondary',
      },
    ],
    onUndo: () => alert('Undo clicked! Action cancelled.'),
    timeout: 0, // No auto-dismiss for this example
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      alignItems: 'center',
      padding: '40px',
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      borderRadius: '28px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(24px)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '16px'
      }}>
        <h3 style={{
          margin: '0 0 12px 0',
          fontSize: '32px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, var(--nex-font-color) 0%, var(--nex-muted-font-color) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Interactive Alert Demo
        </h3>
        <p style={{
          margin: '0',
          fontSize: '18px',
          color: 'var(--nex-muted-font-color)',
          lineHeight: '1.6',
          maxWidth: '500px'
        }}>
          Click the buttons below to see different types of alerts in action. Each button demonstrates a unique alert configuration.
        </p>
      </div>

      {/* Button Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        width: '100%',
        maxWidth: '600px'
      }}>
        <motion.div whileHover={{ y: -4 }} whileTap={{ y: -2 }} style={{ width: '100%' }}>
          <NexButton 
            text="🍞 Show Toast" 
            onClick={() => createToast('This is a toast notification!')}
            size="normal"
          />
        </motion.div>
        
        <motion.div whileHover={{ y: -4 }} whileTap={{ y: -2 }} style={{ width: '100%' }}>
          <NexButton 
            text="✅ Show Success" 
            onClick={() => createSuccess('Operation completed successfully!')}
            size="normal"
          />
        </motion.div>
        
        <motion.div whileHover={{ y: -4 }} whileTap={{ y: -2 }} style={{ width: '100%' }}>
          <NexButton 
            text="❌ Show Error" 
            onClick={() => createError('Something went wrong!')}
            size="normal"
          />
        </motion.div>
        
        <motion.div whileHover={{ y: -4 }} whileTap={{ y: -2 }} style={{ width: '100%' }}>
          <NexButton 
            text="ℹ️ Show Info" 
            onClick={() => showInfo('Here is some information for you.')}
            size="normal"
          />
        </motion.div>
        
        <motion.div whileHover={{ y: -4 }} whileTap={{ y: -2 }} style={{ width: '100%' }}>
          <NexButton 
            text="⚠️ Show Warning" 
            onClick={() => showWarning('Please proceed with caution.')}
            size="normal"
          />
        </motion.div>
        
        <motion.div whileHover={{ y: -4 }} whileTap={{ y: -2 }} style={{ width: '100%' }}>
          <NexButton 
            text="🚩 Show Banner" 
            onClick={() => createBanner('This is an important banner message.')}
            size="normal"
          />
        </motion.div>
        
        <motion.div whileHover={{ y: -4 }} whileTap={{ y: -2 }} style={{ width: '100%' }}>
          <NexButton 
            text="📢 Show Notification" 
            onClick={() => createNotification('This is a persistent notification.')}
            size="normal"
          />
        </motion.div>
        
        <motion.div whileHover={{ y: -4 }} whileTap={{ y: -2 }} style={{ width: '100%' }}>
          <NexButton 
            text="🗑️ Dismiss All" 
            onClick={dismissAll}
            size="normal"
            type="glass"
          />
        </motion.div>
      </div>

      {/* Feature Highlights */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '24px',
        width: '100%'
      }}>
        <div style={{
          padding: '20px',
          background: 'rgba(76, 175, 80, 0.05)',
          border: '1px solid rgba(76, 175, 80, 0.2)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)'
        }}>
          <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '16px',
            fontWeight: '600',
            color: 'var(--nex-success)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>✨</span> Premium Features
          </h4>
          <p style={{
            margin: '0',
            fontSize: '14px',
            color: 'var(--nex-muted-font-color)',
            lineHeight: '1.4'
          }}>
            Rich content, custom icons, action buttons, and smooth animations
          </p>
        </div>

        <div style={{
          padding: '20px',
          background: 'rgba(33, 150, 243, 0.05)',
          border: '1px solid rgba(33, 150, 243, 0.2)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)'
        }}>
          <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '16px',
            fontWeight: '600',
            color: 'var(--nex-info)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>🎯</span> Smart Management
          </h4>
          <p style={{
            margin: '0',
            fontSize: '14px',
            color: 'var(--nex-muted-font-color)',
            lineHeight: '1.4'
          }}>
            Auto-dismiss, pause on hover, undo functionality, and context-based state
          </p>
        </div>

        <div style={{
          padding: '20px',
          background: 'rgba(255, 193, 7, 0.05)',
          border: '1px solid rgba(255, 193, 7, 0.2)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)'
        }}>
          <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '16px',
            fontWeight: '600',
            color: 'var(--nex-warning)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>♿</span> Accessibility
          </h4>
          <p style={{
            margin: '0',
            fontSize: '14px',
            color: 'var(--nex-muted-font-color)',
            lineHeight: '1.4'
          }}>
            ARIA support, keyboard navigation, screen reader announcements
          </p>
        </div>
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
        title: 'File Deleted',
        message: `${itemName} has been moved to trash`,
        description: 'You can restore it within 30 days',
        onUndo: () => {
          setDeletedItems(prev => prev.filter(item => item !== itemName));
          createSuccess(`${itemName} has been restored to its original location`);
        },
        timeout: 8000,
        pauseOnHover: true,
      });
    };

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '8px'
        }}>
          <h3 style={{
            margin: '0 0 8px 0',
            fontSize: '28px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, var(--nex-font-color) 0%, var(--nex-muted-font-color) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            File Management Demo
          </h3>
          <p style={{
            margin: '0',
            fontSize: '16px',
            color: 'var(--nex-muted-font-color)',
            lineHeight: '1.5'
          }}>
            Click delete to see the undo functionality in action
          </p>
        </div>

        {/* File List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {[
            { name: 'document.pdf', icon: '📄', type: 'PDF Document' },
            { name: 'image.jpg', icon: '🖼️', type: 'Image File' },
            { name: 'video.mp4', icon: '🎥', type: 'Video File' },
            { name: 'presentation.pptx', icon: '📊', type: 'Presentation' },
            { name: 'spreadsheet.xlsx', icon: '📈', type: 'Spreadsheet' }
          ].map((file) => (
            <motion.div 
              key={file.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                             style={{ 
                 display: 'flex', 
                 justifyContent: 'space-between', 
                 alignItems: 'center',
                 padding: '16px 20px',
                 border: '1px solid rgba(255, 255, 255, 0.1)',
                 borderRadius: '16px',
                 background: 'rgba(255, 255, 255, 0.05)',
                 backdropFilter: 'blur(10px)',
                 cursor: 'pointer'
               }}
               whileHover={{ 
                 y: -2,
                 background: 'rgba(255, 255, 255, 0.08)',
                 borderColor: 'rgba(255, 255, 255, 0.2)',
                 boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                 transition: { duration: 0.2 }
               }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{
                  fontSize: '24px',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                }}>
                  {file.icon}
                </span>
                <div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'var(--nex-font-color)',
                    marginBottom: '2px'
                  }}>
                    {file.name}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--nex-muted-font-color)',
                    opacity: 0.8
                  }}>
                    {file.type}
                  </div>
                </div>
              </div>
              <NexButton
                text="Delete"
                onClick={() => handleDelete(file.name)}
                size="small"
                type="glass"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Deleted Items Section */}
        {deletedItems.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
              marginTop: '24px',
              padding: '20px',
              background: 'rgba(244, 67, 54, 0.05)',
              border: '1px solid rgba(244, 67, 54, 0.2)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--nex-danger)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '20px' }}>🗑️</span>
              Deleted Items ({deletedItems.length})
            </h4>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {deletedItems.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  style={{
                    padding: '6px 12px',
                    background: 'rgba(244, 67, 54, 0.1)',
                    border: '1px solid rgba(244, 67, 54, 0.3)',
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: 'var(--nex-danger)',
                    fontWeight: '500'
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Instructions */}
        <div style={{
          textAlign: 'center',
          padding: '16px',
          background: 'rgba(33, 150, 243, 0.05)',
          border: '1px solid rgba(33, 150, 243, 0.2)',
          borderRadius: '12px',
          marginTop: '16px'
        }}>
          <p style={{
            margin: '0',
            fontSize: '14px',
            color: 'var(--nex-info)',
            lineHeight: '1.4'
          }}>
            <strong>💡 Tip:</strong> When you delete a file, a success alert will appear with an "Undo" option. 
            Click "Undo" to restore the file and see it removed from the deleted items list.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      ],
    },
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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'center',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        borderRadius: '28px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(24px)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '16px'
        }}>
          <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '32px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, var(--nex-font-color) 0%, var(--nex-muted-font-color) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Performance Test
          </h3>
          <p style={{
            margin: '0',
            fontSize: '18px',
            color: 'var(--nex-muted-font-color)',
            lineHeight: '1.6',
            maxWidth: '500px'
          }}>
            Test the performance with multiple alerts appearing simultaneously
          </p>
        </div>

        {/* Test Button */}
        <motion.div whileHover={{ y: -4 }} whileTap={{ y: -2 }}>
          <NexButton
            text="🚀 Add 10 Alerts"
            onClick={addMultipleAlerts}
            size="normal"
          />
        </motion.div>
        
        {/* Performance Features */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          width: '100%',
          marginTop: '24px'
        }}>
          <div style={{
            padding: '24px',
            background: 'rgba(76, 175, 80, 0.05)',
            border: '1px solid rgba(76, 175, 80, 0.2)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)'
          }}>
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--nex-success)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>⚡</span> Optimized Animations
            </h4>
            <p style={{
              margin: '0',
              fontSize: '14px',
              color: 'var(--nex-muted-font-color)',
              lineHeight: '1.5'
            }}>
              Framer Motion with hardware acceleration and efficient rendering
            </p>
          </div>

          <div style={{
            padding: '24px',
            background: 'rgba(33, 150, 243, 0.05)',
            border: '1px solid rgba(33, 150, 243, 0.2)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)'
          }}>
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--nex-info)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>🧠</span> Smart Management
            </h4>
            <p style={{
              margin: '0',
              fontSize: '14px',
              color: 'var(--nex-muted-font-color)',
              lineHeight: '1.5'
            }}>
              Efficient state management with automatic cleanup and memory optimization
            </p>
          </div>

          <div style={{
            padding: '24px',
            background: 'rgba(255, 193, 7, 0.05)',
            border: '1px solid rgba(255, 193, 7, 0.2)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)'
          }}>
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--nex-warning)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>🛡️</span> Memory Safe
            </h4>
            <p style={{
              margin: '0',
              fontSize: '14px',
              color: 'var(--nex-muted-font-color)',
              lineHeight: '1.5'
            }}>
              Smart alert limiting (max 4 by default) and memory leak prevention
            </p>
          </div>

          <div style={{
            padding: '24px',
            background: 'rgba(156, 39, 176, 0.05)',
            border: '1px solid rgba(156, 39, 176, 0.2)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)'
          }}>
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--nex-purple, #9c27b0)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>♿</span> Accessibility
            </h4>
            <p style={{
              margin: '0',
              fontSize: '14px',
              color: 'var(--nex-muted-font-color)',
              lineHeight: '1.5'
            }}>
              Reduced motion support and optimized for screen readers
            </p>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '24px',
          marginTop: '24px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--nex-success)',
              marginBottom: '4px'
            }}>
              10
            </div>
            <div style={{
              fontSize: '12px',
              color: 'var(--nex-muted-font-color)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Alerts
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--nex-info)',
              marginBottom: '4px'
            }}>
              100ms
            </div>
            <div style={{
              fontSize: '12px',
              color: 'var(--nex-muted-font-color)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Stagger
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--nex-warning)',
              marginBottom: '4px'
            }}>
              4
            </div>
            <div style={{
              fontSize: '12px',
              color: 'var(--nex-muted-font-color)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Max Limit
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      ],
    },
  },
};