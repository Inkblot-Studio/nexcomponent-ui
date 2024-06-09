import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexCopyToClipboard from './NexCopyToClipboard';
import { NexCopyToClipboardProps } from './NexCopyToClipboard.types';

export default {
  title: 'NexComponent/NexCopyToClipboard',
  component: NexCopyToClipboard,
  tags: ['autodocs'],
} as Meta<NexCopyToClipboardProps>;

const Template: StoryFn<NexCopyToClipboardProps> = (args) => (
    <div style={{ margin: '20px' }}> 
      <NexCopyToClipboard {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
  textToCopy: 'Text to be copied',
};

export const Primary = Template.bind({});
Primary.args = {
  textToCopy: 'Text to be copied',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  textToCopy: 'Text to be copied',
  type: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  textToCopy: 'Text to be copied',
  type: 'tertiary',
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  textToCopy: 'Text to be copied',
  type: 'quaternary',
};

export const Success = Template.bind({});
Success.args = {
  textToCopy: 'Text to be copied',
  type: 'success',
};

export const Info = Template.bind({});
Info.args = {
  textToCopy: 'Text to be copied',
  type: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  textToCopy: 'Text to be copied',
  type: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  textToCopy: 'Text to be copied',
  type: 'danger',
};