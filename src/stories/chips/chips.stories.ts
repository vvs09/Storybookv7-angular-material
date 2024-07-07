import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatChipsModule, MatChip } from '@angular/material/chips';
import { chipsArgTypes } from './chips-argstypes';

const meta = {
  title: 'Components/Chips',
  component: MatChip,
  tags: ['autodocs'],
  argTypes: {
    ...chipsArgTypes,
  },
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule],
    }),
  ],
  render: (args:any) => ({
    props: args,
    template: `<mat-chip-option selected ${argsToTemplate(
      args
    )}>One fish</mat-chip-option>`,
  }),
};

export default meta;
type Story = StoryObj<MatChip>;

export const Default: Story = {
  args: {
    color: 'accent',
    highlighted: false,
    disabled: false,
    ariaDescription: 'chip',
    ariaLabel: 'chip',
    role: 'button',
    disableRipple: false,
    id: '1',
    value: 'chip',
    removable: false,
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    color: 'primary',
  },
};

export const Warn: Story = {
  args: {
    ...Default.args,
    color: 'warn',
  },
};

export const Highlighted: Story = {
  args: {
    ...Default.args,
    highlighted: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
