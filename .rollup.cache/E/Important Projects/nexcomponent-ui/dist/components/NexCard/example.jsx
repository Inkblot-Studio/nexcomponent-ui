import React from 'react';
import { NexCard } from './index';
import NexButton from '../NexButton';
/**
 * Example usage of the premium NexCard component
 * This demonstrates various features and use cases
 */
export const NexCardExamples = () => {
    return (<div style={{
            padding: '40px',
            background: 'var(--nex-background-color)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
        }}>
      
      {/* Basic Card */}
      <section>
        <h2>Basic Card</h2>
        <NexCard title="Welcome to NexComponent" subtitle="Premium UI Library" description="A sophisticated card component with Apple-like design principles and smooth animations." elevation="raised" size="lg"/>
      </section>

      {/* Interactive Card */}
      <section>
        <h2>Interactive Card</h2>
        <NexCard title="Clickable Feature" subtitle="Try it out" description="This card responds to clicks and hover interactions with elegant, subtle animations." elevation="interactive" interactive onClick={() => alert('Card clicked!')} size="md"/>
      </section>

      {/* Glass Variant */}
      <section>
        <h2>Glass Effect</h2>
        <NexCard title="Glassmorphic Design" subtitle="Modern Aesthetics" description="A beautiful glassmorphic card with backdrop blur effects and transparency." variant="glass" elevation="hoverable" size="lg"/>
      </section>

      {/* Premium Variant */}
      <section>
        <h2>Premium Styling</h2>
        <NexCard title="Enterprise Solution" subtitle="Premium Package" description="Premium styling with signature accent colors and enhanced shadows for enterprise applications." variant="premium" elevation="interactive" interactive size="xl"/>
      </section>

      {/* Card with Image */}
      <section>
        <h2>Card with Image</h2>
        <NexCard title="Featured Content" subtitle="With Hero Image" description="This card includes a beautiful hero image with proper aspect ratio handling and overlay effects." image={{
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            alt: "Mountain landscape",
            aspectRatio: "video"
        }} elevation="hoverable" size="lg"/>
      </section>

      {/* Horizontal Layout */}
      <section>
        <h2>Horizontal Layout</h2>
        <NexCard title="Side-by-side Content" subtitle="Efficient Space Usage" description="Content and media are arranged horizontally for better space utilization and visual balance." image={{
            src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=200&fit=crop",
            alt: "Abstract design",
            aspectRatio: "square"
        }} layout="horizontal" elevation="raised" size="lg"/>
      </section>

      {/* Card with Actions */}
      <section>
        <h2>Card with Actions</h2>
        <NexCard title="Action Card" subtitle="Interactive Elements" description="This card includes action buttons in the footer area for user interactions." actions={<div style={{ display: 'flex', gap: '8px' }}>
              <NexButton size="small" type="glass" text="Cancel"/>
              <NexButton size="small" text="Confirm"/>
            </div>} elevation="raised" size="md"/>
      </section>

      {/* Loading State */}
      <section>
        <h2>Loading State</h2>
        <NexCard title="Loading Content" subtitle="Skeleton State" description="This card shows a skeleton loading state while content is being fetched." loading={true} elevation="raised" size="md"/>
      </section>

      {/* Different Sizes */}
      <section>
        <h2>Size Comparison</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <NexCard title="Small Card" description="Compact size for tight spaces" size="sm" elevation="raised"/>
          <NexCard title="Medium Card" description="Standard size for most use cases" size="md" elevation="raised"/>
          <NexCard title="Large Card" description="Generous size for featured content" size="lg" elevation="raised"/>
                   <NexCard title="Extra Large Card" description="Maximum size for hero content - now truly extra large with 720px max width and 320px min height" size="xl" elevation="raised"/>
        </div>
      </section>

      {/* Elevation Levels */}
      <section>
        <h2>Elevation Levels</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <NexCard title="Flat" description="No elevation, clean and minimal" elevation="flat"/>
          <NexCard title="Raised" description="Subtle shadow for depth" elevation="raised"/>
          <NexCard title="Hoverable" description="Elevates on hover" elevation="hoverable"/>
          <NexCard title="Interactive" description="Full interaction with ripple" elevation="interactive" interactive onClick={() => alert('Interactive card clicked!')}/>
        </div>
      </section>

      {/* Complex Example */}
      <section>
        <h2>Complex Example</h2>
        <NexCard title="Enterprise Solution" subtitle="Premium Package" description="A comprehensive solution that includes advanced features, priority support, and enterprise-grade security." image={{
            src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
            alt: "Enterprise workspace",
            aspectRatio: "video"
        }} icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>} variant="premium" elevation="interactive" layout="auto" size="xl" interactive actions={<div style={{ display: 'flex', gap: '8px' }}>
              <NexButton size="small" type="glass" text="Learn More"/>
              <NexButton size="small" text="Get Started"/>
            </div>} onClick={() => alert('Premium card clicked!')}/>
      </section>

    </div>);
};
export default NexCardExamples;
//# sourceMappingURL=example.jsx.map