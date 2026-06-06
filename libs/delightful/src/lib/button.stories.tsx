import type { Meta, StoryObj } from '@storybook/react-vite';
import { MyButton } from './button';
import { expect } from 'storybook/test';

const meta = {
  component: MyButton,
  title: 'MyButton',
} satisfies Meta<typeof MyButton>;
export default meta;

type Story = StoryObj<typeof MyButton>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/MyButton/gi)).toBeTruthy();
  },
} satisfies Story;
