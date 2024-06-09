import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexButton from './NexButton';
import { NexButtonProps } from './NexButton.types';

export default {
  title: 'NexComponent/NexButton',
  component: NexButton,
  tags: ['autodocs'],
} as Meta<NexButtonProps>;

const Template: StoryFn<NexButtonProps> = (args) => (
  <div style={{ margin: '10px' }}>
    <NexButton {...args} />
  </div>
);

export const Default: StoryFn<NexButtonProps> = Template.bind({});
Default.args = {
  text: 'Default Button',
};

// Regular colored buttons
export const Primary: StoryFn<NexButtonProps> = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  type: 'primary',
};

export const Secondary: StoryFn<NexButtonProps> = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  type: 'secondary',
};

export const Tertiary: StoryFn<NexButtonProps> = Template.bind({});
Tertiary.args = {
  text: 'Tertiary Button',
  type: 'tertiary',
};

export const Quaternary: StoryFn<NexButtonProps> = Template.bind({});
Quaternary.args = {
  text: 'Quaternary Button',
  type: 'quaternary',
};

export const Success: StoryFn<NexButtonProps> = Template.bind({});
Success.args = {
  text: 'Success Button',
  type: 'success',
};

export const Info: StoryFn<NexButtonProps> = Template.bind({});
Info.args = {
  text: 'Info Button',
  type: 'info',
};

export const Warning: StoryFn<NexButtonProps> = Template.bind({});
Warning.args = {
  text: 'Warning Button',
  type: 'warning',
};

export const Danger: StoryFn<NexButtonProps> = Template.bind({});
Danger.args = {
  text: 'Danger Button',
  type: 'danger',
};

// Inverted buttons
export const InvertedPrimary: StoryFn<NexButtonProps> = Template.bind({});
InvertedPrimary.args = {
  text: 'Inverted Primary Button',
  type: 'primary',
  inverted: true,
};

export const InvertedSecondary: StoryFn<NexButtonProps> = Template.bind({});
InvertedSecondary.args = {
  text: 'Inverted Secondary Button',
  type: 'secondary',
  inverted: true,
};

export const InvertedTertiary: StoryFn<NexButtonProps> = Template.bind({});
InvertedTertiary.args = {
  text: 'Inverted Tertiary Button',
  type: 'tertiary',
  inverted: true,
};

export const InvertedQuaternary: StoryFn<NexButtonProps> = Template.bind({});
InvertedQuaternary.args = {
  text: 'Inverted Quaternary Button',
  type: 'quaternary',
  inverted: true,
};

export const InvertedSuccess: StoryFn<NexButtonProps> = Template.bind({});
InvertedSuccess.args = {
  text: 'Inverted Success Button',
  type: 'success',
  inverted: true,
};

export const InvertedInfo: StoryFn<NexButtonProps> = Template.bind({});
InvertedInfo.args = {
  text: 'Inverted Info Button',
  type: 'info',
  inverted: true,
};

export const InvertedWarning: StoryFn<NexButtonProps> = Template.bind({});
InvertedWarning.args = {
  text: 'Inverted Warning Button',
  type: 'warning',
  inverted: true,
};

export const InvertedDanger: StoryFn<NexButtonProps> = Template.bind({});
InvertedDanger.args = {
  text: 'Inverted Danger Button',
  type: 'danger',
  inverted: true,
};

export const Small: StoryFn<NexButtonProps> = Template.bind({});
Small.args = {
  text: 'Small Button',
  size: 'small',
};

export const Large: StoryFn<NexButtonProps> = Template.bind({});
Large.args = {
  text: 'Large Button',
  size: 'large',
};