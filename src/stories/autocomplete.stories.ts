import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import {
  MatAutocompleteModule,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

const meta: Meta<MatAutocomplete & { options: any }> = {
  title: 'Components/Autocomplete',
  component: MatAutocomplete,
  tags: ['autodocs'],
  //   argTypes: {
  //     color: {
  //       control: 'radio',
  //       options: ['accent', 'primary', 'warn'],
  //       description: 'Theme color palette for the component.',
  //       table: {
  //         category: 'INPUTS',
  //         defaultValue: { summary: 'null' },
  //         type: {
  //           summary: 'string',
  //         },
  //       },
  //     },
  //     disabled: {
  //       control: 'boolean',
  //       description:
  //         'Whether the checkbox is disabled. This fully overrides the implementation provided by mixinDisabled, but the mixin is still required because mixinTabIndex requires it.',
  //       table: {
  //         category: 'INPUTS',
  //         defaultValue: { summary: 'false' },
  //         type: {
  //           summary: 'boolean',
  //         },
  //       },
  //     },
  //     disableRipple: {
  //       control: 'boolean',
  //       description: 'Whether ripples are disabled.',
  //       table: {
  //         category: 'INPUTS',
  //         defaultValue: { summary: 'false' },
  //         type: {
  //           summary: 'boolean',
  //         },
  //       },
  //     },
  //     buttonType: {
  //       control: 'select',
  //       options: [
  //         'mat-button',
  //         'mat-raised-button',
  //         'mat-stroked-button',
  //         'mat-flat-button',
  //       ],
  //       description: 'Type of buton.',
  //       table: {
  //         defaultValue: { summary: 'mat-button' },
  //         type: {
  //           summary: 'string',
  //         },
  //       },
  //     },
  //     label: {
  //       control: 'text',
  //       description: 'Button label.',
  //       table: {
  //         defaultValue: { summary: 'button' },
  //         type: {
  //           summary: 'string',
  //         },
  //       },
  //     },
  //     ariaDisabled: {
  //       control: 'boolean',
  //       description: 'aria-disabled value of the button.',
  //       table: {
  //         category: 'INPUTS',
  //         defaultValue: { summary: 'undefined' },
  //         type: {
  //           summary: 'boolean | undefined',
  //         },
  //       },
  //     },
  //     disabledInteractive: {
  //       control: 'boolean',
  //       description:
  //         'Natively disabled buttons prevent focus and any pointer events from reaching the button. In some scenarios this might not be desirable, because it can prevent users from finding out why the button is disabled (e.g. via tooltip). Enabling this input will change the button so that it is styled to be disabled and will be marked as aria-disabled, but it will allow the button to receive events and focus. Note that by enabling this, you need to set the tabindex yourself if the button isnt meant to be tabbable and you have to prevent the button action (e.g. form submissions).',
  //       table: {
  //         category: 'INPUTS',
  //         defaultValue: { summary: 'false' },
  //         type: {
  //           summary: 'boolean',
  //         },
  //       },
  //     },
  //   },
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
      ],
    }),
  ],
  render: (args: MatAutocomplete & { options: any }) => ({
    props: {
      ...args,
      myControl: new FormControl(''),
    },
    template: `
    <form class="example-form">
    <mat-form-field class="example-full-width">
      <mat-label>Number</mat-label>
      <input type="text"
             placeholder="Pick one"
             aria-label="Number"
             matInput
             [formControl]="myControl"
             [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
        @for (option of options; track option) {
          <mat-option [value]="option">{{option}}</mat-option>
        }
      </mat-autocomplete>
    </mat-form-field>
  </form>
  
   `,
  }),
};

export default meta;
type Story = StoryObj<MatAutocomplete & { options: any }>;

export const Basic: Story = {
  args: {
    options: ['One', 'Two', 'Three'],
  },
};

// export const Primary: Story = {
//   args: {
//     ...accent.args,
//     color: 'primary',
//   },
// };

// export const Warn: Story = {
//   args: {
//     ...accent.args,
//     color: 'warn',
//   },
// };

// export const Disabled: Story = {
//   args: {
//     ...accent.args,
//     disabled: true,
//   },
// };

// export const matRaisedButtonAccent: Story = {
//   args: {
//     ...accent.args,
//     buttonType: 'mat-raised-button',
//   },
// };

// export const matRaisedButtonPrimary: Story = {
//   args: {
//     ...matRaisedButtonAccent.args,
//     color: 'primary',
//   },
// };

// export const matRaisedButtonWarn: Story = {
//   args: {
//     ...matRaisedButtonAccent.args,
//     color: 'warn',
//   },
// };

// export const MatRaisedButtonDisabled: Story = {
//   args: {
//     ...matRaisedButtonAccent.args,
//     disabled: true,
//   },
// };

// export const MatStrokedButtonAccent: Story = {
//   args: {
//     ...accent.args,
//     buttonType: 'mat-stroked-button',
//   },
// };

// export const MatStrokedButtonPrimary: Story = {
//   args: {
//     ...MatStrokedButtonAccent.args,
//     color: 'primary',
//   },
// };

// export const MatStrokedButtonWarn: Story = {
//   args: {
//     ...MatStrokedButtonAccent.args,
//     color: 'warn',
//   },
// };

// export const MatStrokedButtonDisabled: Story = {
//   args: {
//     ...MatStrokedButtonAccent.args,
//     disabled: true,
//   },
// };

// export const MatFlatButtonAccent: Story = {
//   args: {
//     ...accent.args,
//     buttonType: 'mat-flat-button',
//   },
// };

// export const MatFlatButtonPrimary: Story = {
//   args: {
//     ...MatFlatButtonAccent.args,
//     color: 'primary',
//   },
// };

// export const MatFlatButtonWarn: Story = {
//   args: {
//     ...MatFlatButtonAccent.args,
//     color: 'warn',
//   },
// };

// export const MatFlatButtonDisabled: Story = {
//   args: {
//     ...MatFlatButtonAccent.args,
//     disabled: true,
//   },
// };
