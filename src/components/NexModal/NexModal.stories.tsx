import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexModal from './NexModal';
import NexButton from '../NexButton';

export default {
  title: 'NexComponent/NexModal',
  component: NexModal,
  tags: ['autodocs'],
} as Meta<typeof NexModal>;

const Template: StoryFn<typeof NexModal> = (args) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div style={{ margin: '20px' }}>
      <NexButton onClick={() => setOpenModal(true)} text='Open Modal' type='warning'></NexButton>
      {openModal ? (
        <NexModal {...args} setOpenModal={setOpenModal} />
      ) : ('')}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};