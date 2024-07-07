import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import {
  MatProgressBarModule,
  MatProgressBar,
} from '@angular/material/progress-bar';
import { progressBarargTypes } from './progress-bar-argtypes';

const meta = {
  title: 'Components/Progress Bar',
  component: MatProgressBar,
  tags: ['autodocs'],
  argTypes: {
    ...progressBarargTypes,
  },
  decorators: [
    moduleMetadata({
      imports: [MatProgressBarModule],
    }),
  ],
  render: (args:any) => ({
    props: args,
    template: `<mat-progress-bar ${argsToTemplate(args)} ></mat-progress-bar>`,
  }),
};

export default meta;
type Story = StoryObj<MatProgressBar>;

export const Default: Story = {
  args: {
    mode: 'buffer',
    color: 'accent',
    value: 0,
    bufferValue: 0,
  },
};

export const IndeterminateProgressBar: Story = {
  args: {
    ...Default.args,
    mode: 'indeterminate',
  },
};

export const DeterminateProgressBar: Story = {
  args: {
    ...Default.args,
    value: 20,
    mode: 'determinate',
    bufferValue: 75,
  },
};

export const QueryProgressBar: Story = {
  args: {
    ...Default.args,
    mode: 'query',
    value: 30,
    bufferValue: 75,
  },
};

export const PrimaryProgressBar: Story = {
  args: {
    ...Default.args,
    color: 'primary',
    mode: 'indeterminate',
    value: 30,
    bufferValue: 75,
  },
};

export const WarnProgressBar: Story = {
  args: {
    ...Default.args,
    color: 'warn',
  },
};
