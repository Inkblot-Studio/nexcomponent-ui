import React, { useState } from 'react';
import { NexAlert, NexAlertsProvider, useAlerts } from './index';
import NexButton from '../NexButton';
/**
 * NexAlert Examples - Premium Features Showcase
 *
 * This file demonstrates all the advanced features of the premium NexAlert component
 * including variants, sizes, rich content, actions, and context-based management.
 */
// Example 1: Basic Usage
export const BasicExamples = () => {
    return (<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>Basic Alert Types</h2>
      
      <NexAlert id="basic-error" type="error" title="Error Alert" message="Something went wrong. Please try again." variant="default" dismissible/>
      
      <NexAlert id="basic-success" type="success" title="Success Alert" message="Your changes have been saved successfully." variant="default" dismissible/>
      
      <NexAlert id="basic-info" type="info" title="Info Alert" message="Here is some important information for you." variant="default" dismissible/>
      
      <NexAlert id="basic-warning" type="warning" title="Warning Alert" message="This action cannot be undone. Please proceed with caution." variant="default" dismissible/>
    </div>);
};
// Example 2: Variants Showcase
export const VariantsShowcase = () => {
    return (<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>Alert Variants</h2>
      
      <NexAlert id="variant-default" type="info" title="Default Variant" message="Clean, professional styling with subtle shadows." variant="default" dismissible/>
      
      <NexAlert id="variant-glass" type="success" title="Glass Variant" message="Modern glassmorphic design with backdrop blur effects." variant="glass" dismissible/>
      
      <NexAlert id="variant-premium" type="warning" title="Premium Variant" message="Premium styling with signature accent colors and enhanced shadows." variant="premium" dismissible/>
      
      <NexAlert id="variant-minimal" type="info" title="Minimal Variant" message="Subtle, minimal design for clean interfaces." variant="minimal" dismissible/>
    </div>);
};
// Example 3: Size Variations
export const SizeVariations = () => {
    return (<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>Alert Sizes</h2>
      
      <NexAlert id="size-small" type="info" title="Small Alert" message="Compact size for tight spaces and toast notifications." size="sm" variant="glass" dismissible/>
      
      <NexAlert id="size-medium" type="info" title="Medium Alert" message="Standard size for most use cases and general notifications." size="md" variant="default" dismissible/>
      
      <NexAlert id="size-large" type="info" title="Large Alert" message="Generous size for prominent messaging and important announcements." size="lg" variant="premium" dismissible/>
    </div>);
};
// Example 4: Rich Content Alerts
export const RichContentAlerts = () => {
    return (<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>Rich Content Alerts</h2>
      
      <NexAlert id="rich-upload" type="success" title="File Upload Complete" message="document.pdf has been successfully uploaded to your account" description="The file is now available in your documents folder and can be shared with your team members. You can also set permissions and track usage." variant="premium" size="lg" actions={[
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
            {
                label: 'Download',
                onClick: () => alert('Download clicked'),
                variant: 'ghost',
            },
        ]} dismissible/>
      
      <NexAlert id="rich-storage" type="warning" title="Storage Space Low" message="You're running out of storage space on your account" description="You have 2.1 GB remaining out of 10 GB total. Consider upgrading your plan or cleaning up unused files to free up space." variant="default" size="lg" actions={[
            {
                label: 'Upgrade Plan',
                onClick: () => alert('Upgrade plan clicked'),
                variant: 'primary',
            },
            {
                label: 'Clean Up Files',
                onClick: () => alert('Clean up clicked'),
                variant: 'secondary',
            },
            {
                label: 'View Usage',
                onClick: () => alert('View usage clicked'),
                variant: 'ghost',
            },
        ]} dismissible/>
    </div>);
};
// Example 5: Auto-dismiss with Progress
export const AutoDismissExamples = () => {
    return (<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>Auto-dismiss Alerts</h2>
      
      <NexAlert id="toast-quick" type="success" title="Quick Toast" message="This will auto-dismiss in 2 seconds" variant="glass" size="sm" timeout={2000} dismissible/>
      
      <NexAlert id="toast-pause" type="info" title="Pause on Hover" message="This alert pauses the timer when you hover over it" variant="glass" size="sm" timeout={5000} pauseOnHover dismissible/>
      
      <NexAlert id="toast-persistent" type="warning" title="Persistent Alert" message="This alert won't auto-dismiss and requires manual dismissal" variant="default" size="md" persistent dismissible/>
    </div>);
};
// Example 6: Custom Icons
export const CustomIconsExamples = () => {
    return (<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>Custom Icons</h2>
      
      <NexAlert id="custom-icon-1" type="info" title="Custom SVG Icon" message="This alert uses a custom SVG icon" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>} variant="glass" dismissible/>
      
      <NexAlert id="custom-icon-2" type="success" title="Emoji Icon" message="This alert uses an emoji as the icon" icon={<span style={{ fontSize: '20px' }}>🎉</span>} variant="premium" dismissible/>
      
      <NexAlert id="custom-icon-3" type="warning" title="Custom Component Icon" message="This alert uses a custom React component as the icon" icon={<div style={{
                width: '20px',
                height: '20px',
                background: 'var(--nex-warning)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold'
            }}>
            !
          </div>} variant="default" dismissible/>
    </div>);
};
// Example 7: Context-based Management
const ContextExample = () => {
    const { createToast, createNotification, createBanner, createError, createSuccess, showInfo, showWarning, dismissAll } = useAlerts();
    return (<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <h2>Context-based Alert Management</h2>
      <p>Use the useAlerts hook to manage alerts programmatically</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        <NexButton text="Show Toast" onClick={() => createToast('This is a toast notification!')} size="small"/>
        <NexButton text="Show Success" onClick={() => createSuccess('Operation completed successfully!')} size="small"/>
        <NexButton text="Show Error" onClick={() => createError('Something went wrong!')} size="small"/>
        <NexButton text="Show Info" onClick={() => showInfo('Here is some information for you.')} size="small"/>
        <NexButton text="Show Warning" onClick={() => showWarning('Please proceed with caution.')} size="small"/>
        <NexButton text="Show Banner" onClick={() => createBanner('This is an important banner message.')} size="small"/>
        <NexButton text="Show Notification" onClick={() => createNotification('This is a persistent notification.')} size="small"/>
        <NexButton text="Dismiss All" onClick={dismissAll} size="small" type="glass"/>
      </div>
    </div>);
};
// Example 8: Undo Functionality
const UndoExample = () => {
    const [deletedItems, setDeletedItems] = useState([]);
    const { createSuccess } = useAlerts();
    const handleDelete = (itemName) => {
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
    return (<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>Undo Functionality</h2>
      <p>Click delete to see the undo functionality in action</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {['document.pdf', 'image.jpg', 'video.mp4', 'presentation.pptx'].map((file) => (<div key={file} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                border: '1px solid var(--nex-border-color)',
                borderRadius: '8px',
                background: 'var(--nex-surface-color)'
            }}>
            <span>{file}</span>
            <NexButton text="Delete" onClick={() => handleDelete(file)} size="small" type="glass"/>
          </div>))}
      </div>
      
      {deletedItems.length > 0 && (<div style={{ marginTop: '16px' }}>
          <h4>Deleted Items:</h4>
          <ul>
            {deletedItems.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
        </div>)}
    </div>);
};
// Main example component
export const NexAlertExamples = () => {
    return (<NexAlertsProvider>
      <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px 24px'
        }}>
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            padding: '48px 40px 32px 40px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <h1 style={{
            margin: '0 0 16px 0',
            fontSize: '48px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
        }}>
              NexAlert Premium
            </h1>
            <p style={{
            margin: '0',
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
              Comprehensive showcase of the premium NexAlert component features with Apple-like design and enterprise-grade functionality
            </p>
          </div>

          {/* Content */}
          <div style={{
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px'
        }}>
            <BasicExamples />
            <VariantsShowcase />
            <SizeVariations />
            <RichContentAlerts />
            <AutoDismissExamples />
            <CustomIconsExamples />
            <ContextExample />
            <UndoExample />
          </div>

          {/* Footer */}
          <div style={{
            padding: '32px 40px',
            background: 'rgba(0, 0, 0, 0.1)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
        }}>
            <p style={{
            margin: '0',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.6)',
            fontWeight: '500'
        }}>
              Built with ❤️ using React, TypeScript, Framer Motion, and SCSS Modules
            </p>
          </div>
        </div>
      </div>
    </NexAlertsProvider>);
};
//# sourceMappingURL=example.jsx.map