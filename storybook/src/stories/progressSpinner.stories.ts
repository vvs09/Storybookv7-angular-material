import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import {MatProgressSpinnerModule,MatProgressSpinner} from '@angular/material/progress-spinner';

const meta: Meta<MatProgressSpinner> = {
  title: 'Components/Progress Spinner',
  component: MatProgressSpinner,
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
    diameter: {
      control: 'number',
      description:
        'The diameter of the progress spinner (will set width and height of svg).',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    mode: {
      control: 'radio',
      options: ['determinate', 'indeterminate', 'buffer', 'query'],
      description:
        'Mode of the progress bar.Input must be one of these values: determinate, indeterminate, buffer, query, defaults to determinate.Mirrored to mode attribute.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: 'determinate' },
      },
    },
    strokeWidth: {
      control: 'number',
      description: 'Stroke width of the progress spinner.',
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
        defaultValue: { summary: '-' },
      },
    },
    defaultColor: {
      control: 'string',
      description: 'Default color to fall back to if no value is set.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  render: (args: MatProgressSpinner) => ({
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
    strokeWidth:10,
  }
};

export const Diameter: Story = {
  args: {
    ...Default.args,
    strokeWidth:10,
    diameter:100
  }
};