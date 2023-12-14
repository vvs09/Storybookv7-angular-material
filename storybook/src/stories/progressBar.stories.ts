import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import {
  MatProgressBarModule,
  MatProgressBar,
} from '@angular/material/progress-bar';

const meta: Meta<MatProgressBar> = {
  title: 'Components/Progress Bar',
  component: MatProgressBar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['accent', 'primary', 'warn'],
      description: 'Theme color palette for the component.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    bufferValue: {
      control: 'number',
      description: 'Buffer value of the progress bar. Defaults to zero.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '0' },
      },
    },
    mode: {
      control: 'radio',
      options: ['determinate', 'indeterminate', 'buffer', 'query'],
      description:
        'Mode of the progress bar.Input must be one of these values: determinate, indeterminate, buffer, query, defaults to determinate. Mirrored to mode attribute.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    value: {
      control: 'number',
      description:
        'Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '0' },
      },
    },
    defaultColor: {
      control: 'text',
      description: 'Default color to fall back to if no value is set.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    animationEnd: {
      control: 'object',
      description:
        'Event emitted when animation of the primary progress bar completes. This event will not be emitted when animations are disabled, nor will it be emitted for modes with continuous animations (indeterminate and query).',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '50' },
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [MatProgressBarModule],
    }),
  ],
  render: (args: MatProgressBar) => ({
    props: args,
    template: `<mat-progress-bar ${argsToTemplate(args)} ></mat-progress-bar>`,
  }),
};

export default meta;
type Story = StoryObj<MatProgressBar>;


export const Default: Story = {
  args: {
    mode:'buffer',
    color:'accent',
    value:0,
    bufferValue:0
  },
};

export const IndeterminateProgressBar: Story = {
  args: {
    ...Default.args,
    mode:'indeterminate'
  },
};

export const DeterminateProgressBar: Story = {
  args: {
    ...Default.args,
    value:20,
    mode:'determinate',
    bufferValue:75
  },
};

export const QueryProgressBar: Story = {
  args: {
    ...Default.args,
    mode:'query',
    value:30,
    bufferValue:75
  },
};

export const PrimaryProgressBar: Story = {
  args: {
    ...Default.args,
    color:'primary',
    mode:'indeterminate',
    value:30,
    bufferValue:75
  },
};

export const WarnProgressBar: Story = {
  args: {
    ...Default.args,
    color:'warn'
  },
};
