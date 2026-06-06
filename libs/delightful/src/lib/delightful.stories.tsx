import type { Meta, StoryObj } from '@storybook/react-vite';
import { DelightfulUi } from './delightful';
import { expect } from 'storybook/test';

const meta = {
  component: DelightfulUi,
  title: 'DelightfulUi',
} satisfies Meta<typeof DelightfulUi>;
export default meta;

type Story = StoryObj<typeof DelightfulUi>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/DelightfulUi/gi)).toBeTruthy();
  },
} satisfies Story;
