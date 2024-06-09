import { StoryFn, Meta } from '@storybook/react';
import NexCard from './NexCard';
import { NexCardProps } from './NexCard.types';
import NexButton from '../NexButton';

export default {
  title: 'NexComponent/NexCard',
  component: NexCard,
  tags: ['autodocs'],
} as Meta<NexCardProps>;;

const Template: StoryFn<NexCardProps> = (args) => <NexCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  content: 'This is a default card without an image or actions.',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  image: 'https://img.freepik.com/free-photo/abstract-multi-colored-wave-pattern-shiny-flowing-modern-generated-by-ai_188544-15588.jpg',
  content: 'This card includes an image.',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Card with Actions',
  content: 'This card includes some actions.',
  actions: <NexButton  text='action'/>,
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Card with Footer',
  content: 'This card includes a footer.',
  footer: <p>Footer content goes here.</p>,
};

export const FullFeatured = Template.bind({});
FullFeatured.args = {
  title: 'Full Featured Card',
  image: 'https://png.pngtree.com/thumb_back/fh260/background/20230412/pngtree-colorful-abstract-ocean-waves-background-image_2357907.jpg',
  content: 'This card has it all - image, content, actions, and footer.',
  actions: (
    <>
      <NexButton  text='Read More'/>
      <NexButton  text='Like'/>
    </>
  ),
  footer: (
    <div>
      <div>Footer content goes here.</div>
      <NexButton  text='footer button'/>
    </div>
  ),
};