import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import {
  MatSliderModule,
  MatSlider,
  MatSliderThumb,
} from '@angular/material/slider';
import { sliderArgTypes } from './slider-argtypes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const meta = {
  title: 'Components/Slider',
  component: MatSlider,
  tags: ['autodocs'],
  argTypes: sliderArgTypes,
  decorators: [
    moduleMetadata({
      imports: [
        MatSliderModule,
        MatSliderThumb,
        FormsModule,
        ReactiveFormsModule,
      ],
    }),
  ],
  render: (args:any) => ({
    props: args,
    styles: [
      `
        .example-label-container {
            display: flex;
            justify-content: space-between;
            margin: 20px 10px 0;
            max-width: 284px;
          }
          .example-result-card .example-value-label {
            font-weight: 600;
          }
          .example-margin {
            margin: 8px;
          }
        `,
    ],
    template: `
    <div class="example-label-container">
  </div>
    <mat-slider
    ${argsToTemplate(args)}
    class="example-margin">
  <input matSliderThumb >
</mat-slider>
   `,
  }),
};

export default meta;
type Story = StoryObj<MatSlider>;

export const Basic: Story = {
  args: {
    disabled: false,
    showTickMarks: false,
    discrete: true,
    max: 100,
    min: 0,
    step: 1,
    color: 'primary',
    disableRipple: false,
  },
};

export const ShowTickMarks: Story = {
  args: {
    ...Basic.args,
    min: 0,
    max: 1000,
    step: 1000,
    showTickMarks: true,
    discrete: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};

export const Step: Story = {
  args: {
    ...Basic.args,
    step: 60,
  },
};

export const Discrete: Story = {
  args: {
    ...Basic.args,
    discrete: false,
  },
};

export const Accent: Story = {
  args: {
    ...Basic.args,
    color: 'accent',
  },
};

export const Warn: Story = {
  args: {
    ...Basic.args,
    color: 'warn',
  },
};

export const Limits: Story = {
  args: {
    ...Basic.args,
    min: 0,
    max: 1000,
  },
};
