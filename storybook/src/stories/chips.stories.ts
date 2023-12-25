import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatChipsModule, MatChip } from '@angular/material/chips';

const meta: Meta<MatChip> = {
  title: 'Components/Chips',
  component: MatChip,
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
    disabled: {
      control: 'boolean',
      description: 'Whether the component is disabled.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    ariaDescription: {
      control: 'text',
      description: 'ARIA description for the content of the chip.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the content of the chip.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    disableRipple: {
      control: 'boolean',
      description: 'Whether ripples are disabled.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    highlighted: {
      control: 'boolean',
      description: 'Colors the chip for emphasis as if it were selected.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    id: {
      control: 'text',
      description:
        'A unique id for the chip. If none is supplied, it will be auto-generated.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    removable: {
      control: 'boolean',
      description:
        'Determines whether or not the chip displays the remove styling and emits (removed) events.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    role: {
      control: 'text',
      description: 'Role for the root of the chip.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    value: {
      control: 'text',
      description:
        'The value of the chip. Defaults to the content inside the mat-mdc-chip-action-label element.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    destroyed: {
      control: 'object',
      description: 'Emitted when the chip is destroyed.',
      table: {
        category: 'OUTPUTS',
        defaultValue: { summary: '-' },
      },
    },
    removed: {
      control: 'object',
      description: 'Emitted when a chip is to be removed.',
      table: {
        category: 'OUTPUTS',
        defaultValue: { summary: '-' },
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
    defaultTabIndex: {
      control: 'number',
      description: 'Tabindex to which to fall back to if no value is set.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule],
    }),
  ],
  render: (args: MatChip) => ({
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
    defaultTabIndex: -1,
    disableRipple: false,
    defaultColor: 'accent',
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
