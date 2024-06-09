import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexCarousel from './NexCarousel';
import NexCard from '../NexCard';

export default {
  title: 'NexComponent/NexCarousel',
  component: NexCarousel,
  tags: ['autodocs'],
} as Meta<typeof NexCarousel>;

const Template: StoryFn<typeof NexCarousel> = (args) => (
    <div style={{ margin: '10px' }}>
        <NexCarousel {...args}>
            <NexCard   title='Full Featured Card' 
                image='https://png.pngtree.com/thumb_back/fh260/background/20230412/pngtree-colorful-abstract-ocean-waves-background-image_2357907.jpg'
                content = 'This card has it all - image, content, actions, and footer.'/>
            <NexCard   title='Full Featured Card' 
                image='https://img.freepik.com/free-photo/abstract-multi-colored-wave-pattern-shiny-flowing-modern-generated-by-ai_188544-15588.jpg'
                content = 'This card has it all - image, content, actions, and footer.'/>
            <NexCard   title='Full Featured Card' 
                image='https://t3.ftcdn.net/jpg/06/33/38/46/360_F_633384696_Jz7VVSzl9kIAgXgd0KtuA33x6Y3j2uLD.jpg'
                content = 'This card has it all - image, content, actions, and footer.'/>
        </NexCarousel>
    </div>
);

export const Default = Template.bind({});