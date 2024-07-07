import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import {
  MatSlideToggleModule,
  MatSlideToggle,
} from '@angular/material/slide-toggle';
import { slideToggleargTypes } from './slide-toggle-argtypes';

const meta= {
  title: 'Components/Slide Toggle',
  component: MatSlideToggle,
  tags: ['autodocs'],
  argTypes: {
    ...slideToggleargTypes,
  },
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule],
    }),
  ],
  render: (args:any) => ({
    props: args,
    template: `<mat-slide-toggle ${argsToTemplate(
      args
    )}>Slide me!</mat-slide-toggle>
    `,
  }),
};

export default meta;
type Story = StoryObj<MatSlideToggle>;

export const Default: Story = {
  args: {
    ariaDescribedby: 'Silde Toggle',
    ariaLabel: 'Silde Toggle',
    ariaLabelledby: 'Silde Toggle',
    color: 'primary',
    checked: true,
    disableRipple: false,
    disabled: false,
    id: 'slide toggle storybook',
    labelPosition: 'after',
    name: 'Slide Toggle',
    required: false,
    buttonId: 'button id',
    inputId: 'input id',
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

export const PositionBefore: Story = {
  args: {
    ...Default.args,
    labelPosition: 'before',
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: false,
  },
};

export const DisableRipple: Story = {
  args: {
    ...Default.args,
    disableRipple: true,
  },
};

export const Disable: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
