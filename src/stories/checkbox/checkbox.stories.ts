import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatCheckboxModule, MatCheckbox } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { checkboxArgTypes } from './checbox-argtypes';

const meta: Meta<MatCheckbox> = {
  title: 'Components/Checkbox',
  component: MatCheckbox,
  tags: ['autodocs'],
  argTypes: {
    ...checkboxArgTypes,
  },
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, FormsModule, MatCheckboxModule],
    }),
  ],
  render: (args) => ({
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
