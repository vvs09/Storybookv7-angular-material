import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatCheckboxModule, MatCheckbox } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<MatCheckbox> = {
  title: 'Components/Checkbox',
  component: MatCheckbox,
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
      description:
        'Whether the checkbox is disabled. This fully overrides the implementation provided by mixinDisabled, but the mixin is still required because mixinTabIndex requires it.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    ariaDescribedby: {
      control: 'text',
      description:
        'The aria-describedby attribute is read after the elements label and field type.',
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
    ariaLabelledby: {
      control: 'text',
      description:
        'Users can specify the aria-labelledby attribute which will be forwarded to the input element',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    id: {
      control: 'text',
      description:
        'A unique id for the checkbox input. If none is supplied, it will be auto-generated.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to represent a checkbox with three states, e.g. a checkbox that represents a nested list of checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately set to false.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    labelPosition: {
      control: 'radio',
      options: ['before', 'after'],
      description:
        'Whether the label should appear after or before the checkbox. Defaults to after',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    name: {
      control: 'text',
      description: 'Name value will be applied to the input element if present',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    change: {
      control: 'object',
      description: 'Event emitted when the checkboxs checked value changes.',
      table: {
        category: 'OUTPUTS',
        defaultValue: { summary: '-' },
      },
    },
    indeterminateChange: {
      control: 'object',
      description:
        'Event emitted when the checkboxs indeterminate value changes.',
      table: {
        category: 'OUTPUTS',
        defaultValue: { summary: '-' },
      },
    },
    inputId: {
      control: 'text',
      description: 'Returns the unique id for the visual hidden input.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    ripple: {
      control: 'object',
      description: 'Reference to the ripple instance of the checkbox.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    value: {
      control: 'text',
      description: 'The value attribute of the native input element.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, FormsModule, MatCheckboxModule],
    }),
  ],
  render: (args: MatCheckbox) => ({
    props: args,
    template: ` <mat-checkbox ${argsToTemplate(args)}>Checkbox</mat-checkbox>`,
  }),
};

export default meta;
type Story = StoryObj<MatCheckbox>;

export const Default: Story = {
  args: {
    color: 'accent',
    disabled: false,
    ariaDescribedby: 'checkbox',
    ariaLabel: 'checkbox',
    ariaLabelledby: 'checkbox',
    disableRipple: false,
    id: '1',
    checked: false,
    indeterminate: false,
    labelPosition: 'after',
    name: 'label checkbox',
    required: false,
    inputId: '1',
    value: 'checkbox1',
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

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    ...Default.args,
    indeterminate: true,
  },
};

export const LabelPosition: Story = {
  args: {
    ...Default.args,
    labelPosition: 'before',
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
};
