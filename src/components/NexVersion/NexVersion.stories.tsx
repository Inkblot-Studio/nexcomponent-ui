import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexVersion from './NexVersion';

export default {
  title: 'NexComponent/NexVersion',
  component: NexVersion,
  tags: ['autodocs'],
} as Meta<typeof NexVersion>;

const Template: StoryFn<typeof NexVersion> = (args) => {
  const [version, setVersion] = useState('1.0.0');

  const handleSave = (newVersion: string) => {
    console.log('New version:', newVersion);
    setVersion(newVersion);
  };

  return (
    <div style={{ margin: '20px' }}>
      <NexVersion {...args} version={version} handleSave={handleSave} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};