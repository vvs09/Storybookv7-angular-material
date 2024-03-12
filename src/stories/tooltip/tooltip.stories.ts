import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatTooltipModule, MatTooltip } from '@angular/material/tooltip';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { tooltipArgTypes } from './tooltip-argtypes';

const meta: Meta<MatTooltip> = {
  title: 'Components/Tooltip',
  component: MatTooltip,
  tags: ['autodocs'],
  argTypes: tooltipArgTypes,
  decorators: [
    moduleMetadata({
      imports: [
        MatTooltipModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    }),
  ],
  render: (args) => ({
    props: args,
    styles: [
      `
      .example-button {
        display: block;
        margin: 80px auto 400px;
      }
      
      .example-container {
        height: 200px;
        overflow: auto;
        border: 1px solid #ccc;
      }
        `,
    ],
    template: `
    <div class="example-container" cdkScrollable>
    <button mat-raised-button
    [matTooltip]
    ${argsToTemplate(args)}
    class="example-button">
     Tooltip
    </button>
    </div>
   `,
  }),
};

export default meta;
type Story = StoryObj<MatTooltip>;

export const Basic: Story = {
  args: {
    message: 'Tooltip',
    disabled: false,
    touchGestures: 'auto',
    hideDelay: 0,
    showDelay: 0,
    position: 'before',
    positionAtOrigin: false,
  },
};

export const hideDelay: Story = {
  args: {
    ...Basic.args,
    hideDelay: 1000,
  },
};

export const showDelay: Story = {
  args: {
    ...Basic.args,
    showDelay: 1000,
  },
};

export const PositionAbove: Story = {
  args: {
    ...Basic.args,
    position: 'above',
  },
};

export const PositionAfter: Story = {
  args: {
    ...Basic.args,
    position: 'after',
  },
};

export const PositionBefore: Story = {
  args: {
    ...Basic.args,
    position: 'before',
  },
};

export const PositionLeft: Story = {
  args: {
    ...Basic.args,
    position: 'left',
  },
};

export const PositionRight: Story = {
  args: {
    ...Basic.args,
    position: 'right',
  },
};
