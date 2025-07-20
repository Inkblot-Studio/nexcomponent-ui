import React from 'react';

export type NexCardElevation = 'flat' | 'raised' | 'hoverable' | 'interactive';
export type NexCardLayout = 'vertical' | 'horizontal' | 'auto';
export type NexCardVariant = 'default' | 'glass' | 'premium' | 'minimal';

export interface NexCardProps {
  // Content
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  
  // Media
  image?: {
    src: string;
    alt?: string;
    aspectRatio?: 'square' | 'video' | 'wide' | 'auto';
  };
  icon?: React.ReactNode;
  
  // Layout & Styling
  variant?: NexCardVariant;
  elevation?: NexCardElevation;
  layout?: NexCardLayout;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // Interactive Features
  interactive?: boolean;
  clickable?: boolean;
  href?: string;
  as?: 'div' | 'button' | 'a';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  
  // States
  loading?: boolean;
  disabled?: boolean;
  
  // Custom Slots
  header?: React.ReactNode;
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  
  // Accessibility
  'aria-label'?: string;
  'aria-describedby'?: string;
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
  
  // Animation
  animate?: boolean;
  delay?: number;
  
  // Legacy support
  content?: string; // Deprecated, use description
  imageUrl?: string; // Deprecated, use image.src
  badge?: string; // Deprecated, use header slot
  type?: 'primary' | 'secondary' | 'glass' | 'enterprise'; // Deprecated, use variant
  elevated?: boolean; // Deprecated, use elevation
}

export interface NexCardContextValue {
  variant: NexCardVariant;
  elevation: NexCardElevation;
  layout: NexCardLayout;
  size: 'sm' | 'md' | 'lg' | 'xl';
  interactive: boolean;
  clickable: boolean;
  loading: boolean;
  disabled: boolean;
}