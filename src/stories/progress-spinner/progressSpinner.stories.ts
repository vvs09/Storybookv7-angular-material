import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import {
  MatProgressSpinnerModule,
  MatProgressSpinner,
} from '@angular/material/progress-spinner';
import { progressBarargTypes } from '../progress-bar/progress-bar-argtypes';

const meta = {
  title: 'Components/Progress Spinner',
  component: MatProgressSpinner,
  tags: ['autodocs'],
  argTypes: {
    ...progressBarargTypes,
  },
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  render: (args:any) => ({
    props: args,
    template: `<mat-progress-spinner aria-label="spinner" ${argsToTemplate(
      args
    )}> </mat-progress-spinner>
    `,
  }),
};

export default meta;
type Story = StoryObj<MatProgressSpinner>;

export const Default: Story = {
  args: {
    color: 'primary',
    mode: 'indeterminate',
    diameter: 80,
    strokeWidth: 5,
  },
};

export const Warn: Story = {
  args: {
    ...Default.args,
    color: 'warn',
  },
};

export const Accent: Story = {
  args: {
    ...Default.args,
    color: 'accent',
  },
};

export const StrokeWidth: Story = {
  args: {
    ...Default.args,
    strokeWidth: 10,
  },
};

export const Diameter: Story = {
  args: {
    ...Default.args,
    strokeWidth: 10,
    diameter: 100,
  },
};
