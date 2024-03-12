import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { badgeArgTypes } from './badge-argtypes';

const meta: Meta<MatBadge & { label: string }> = {
  title: 'Components/Badge',
  component: MatBadge,
  tags: ['autodocs'],
  argTypes:badgeArgTypes,
  decorators: [
    moduleMetadata({
      imports: [MatBadgeModule, MatButtonModule, MatIconModule],
    }),
  ],
  render:({label,...args}) => ({
    props: args,
    template: `
    <div matBadge style="display:inline" ${argsToTemplate(args)}>${label}</div>
   `,
  }),
};

export default meta;
type Story = StoryObj<MatBadge & { label: string }>;

export const accent: Story = {
  args: {
    label: 'Text with a badge',
    overlap: false,
    position: 'above after',
    content: '8',
    color: 'accent',
    disabled: false,
    description: 'badge',
    size: 'small',
    hidden: false,
  },
};

export const Primary: Story = {
  args: {
    ...accent.args,
    color: 'primary',
  },
};

export const Warn: Story = {
  args: {
    ...accent.args,
    color: 'warn',
  },
};

export const Disabled: Story = {
  args: {
    ...accent.args,
    disabled: true,
  },
};

export const overlap: Story = {
  args: {
    ...accent.args,
    overlap: true,
  },
};

export const content: Story = {
  args: {
    ...accent.args,
    content: '67',
  },
};

export const Position: Story = {
  args: {
    ...accent.args,
    position: 'before',
  },
};

export const Size: Story = {
  args: {
    ...accent.args,
    size: 'large',
  },
};

export const hidden: Story = {
  args: {
    ...accent.args,
    hidden: true,
  },
};
