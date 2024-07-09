import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexCarousel from './NexCarousel';
import NexCard from '../NexCard';
import NexButton from '../NexButton';
import storyHeroSection from '../../assets/img/story_hero_section.jpg';

export default {
  title: 'NexComponent/NexCarousel',
  component: NexCarousel,
  tags: ['autodocs'],
} as Meta<typeof NexCarousel>;

const Template: StoryFn<typeof NexCarousel> = (args) => (
    <div style={{ margin: '10px' }}>
        <NexCarousel {...args}>
            <NexCard   
                title='Full Featured Card' 
                imageUrl={storyHeroSection}
                content='This card has it all - image, content, actions, and footer.'
                actions= {
                    <>
                    <NexButton  text='Read More'/>
                    <NexButton  text='Like'/>
                    </>
                } />
            <NexCard   
                title='Card with actions'
                content='This card has it all - image, content, actions, and footer.'                
                actions= {
                    <>
                    <NexButton  text='Read More'/>
                    <NexButton  text='Like'/>
                    </>
                } />
            <NexCard   
                title='Secondary Card'
                type='secondary' 
                content='This card has it all - image, content, actions, and footer.'/>
        </NexCarousel>
    </div>
);

export const Default = Template.bind({});