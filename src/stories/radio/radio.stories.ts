import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatRadioModule, MatRadioButton } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { radioArgTypes } from './radio-argtypes';

const meta: Meta<MatRadioButton> = {
  title: 'Components/Radio button',
  component: MatRadioButton,
  tags: ['autodocs'],
  argTypes: {
    ...radioArgTypes,
  },
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, FormsModule, MatRadioModule],
    }),
  ],
  render: (args: MatRadioButton) => ({
    props: args,
    template: `<mat-radio-button ${argsToTemplate(
      args
    )}>Option 1</mat-radio-button>`,
  }),
};

export default meta;
type Story = StoryObj<MatRadioButton>;

export const Default: Story = {
  args: {
    color: 'accent',
    disabled: false,
    ariaDescribedby: 'radio',
    ariaLabel: 'radio',
    ariaLabelledby: 'radio',
    disableRipple: false,
    id: '1',
    checked: false,
    labelPosition: 'after',
    name: 'label radio',
    required: false,
    inputId: '1',
    value: 'radio1',
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
