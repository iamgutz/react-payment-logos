import type { Meta, StoryObj } from '@storybook/react';
import List from './List';
import * as FlatIcons from '../../components/flat';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: 'Library/Flat',
  component: List,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Showcase: Story = {
  args: {
    Components: FlatIcons,
  },
};
