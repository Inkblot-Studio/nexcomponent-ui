import { StoryFn, Meta } from '@storybook/react';
import { NexAlertProps } from './NexAlert.types';
import { NexAlert } from './NexAlert';

export default {
  title: 'NexComponent/NexAlert',
  component: NexAlert,
  tags: ['autodocs'],
} as Meta<NexAlertProps>;

const Template: StoryFn<NexAlertProps> = (args) => (
  <div style={{ margin: '10px' }}>
    <NexAlert {...args} />
  </div>
);

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  id: '1',
  type: 'error',
  message: 'Error: Something went wrong!',
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  id: '1',
  type: 'success',
  message: 'Success: Operation completed successfully.',
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  id: '1',
  type: 'info',
  message: 'Info: Please note the following information.',
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  id: '1',
  type: 'warning',
  message: 'Warning: This action cannot be undone.',
};

export const CustomDuration = Template.bind({});
CustomDuration.args = {
  id: '1',
  type: 'error',
  message: 'Error: This alert will disappear after 5 seconds.',
  timeout: 5000, // Custom duration in milliseconds
};

export const NoDismissButton = Template.bind({});
NoDismissButton.args = {
  id: '1',
  type: 'info',
  message: 'Info: This alert will not have a dismiss button.',
};

const dismissTest = () => {
  console.log('Dismiss button clicked!');
}

export const DismissButtonFunction = Template.bind({});
DismissButtonFunction.args = {
  id: '1',
  type: 'success',
  message: 'Success: Click the dismiss button to close this alert.',
  handleDismiss: () => dismissTest(),
};