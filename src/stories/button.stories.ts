import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatButtonModule, MatButton } from '@angular/material/button';

const meta: Meta<MatButton & { label: string; buttonType: string }> = {
  title: 'Components/Button',
  component: MatButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['accent', 'primary', 'warn'],
      description: 'Theme color palette for the component.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Whether the checkbox is disabled. This fully overrides the implementation provided by mixinDisabled, but the mixin is still required because mixinTabIndex requires it.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
    disableRipple: {
      control: 'boolean',
      description: 'Whether ripples are disabled.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
    buttonType: {
      control: 'select',
      options: [
        'mat-button',
        'mat-raised-button',
        'mat-stroked-button',
        'mat-flat-button',
      ],
      description: 'Type of buton.',
      table: {
        defaultValue: { summary: 'mat-button' },
        type: {
          summary: 'string',
        },
      },
    },
    label: {
      control: 'text',
      description: 'Button label.',
      table: {
        defaultValue: { summary: 'button' },
        type: {
          summary: 'string',
        },
      },
    },
    ariaDisabled: {
      control: 'boolean',
      description: 'aria-disabled value of the button.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: 'undefined' },
        type: {
          summary: 'boolean | undefined',
        },
      },
    },
    disabledInteractive: {
      control: 'boolean',
      description:
        'Natively disabled buttons prevent focus and any pointer events from reaching the button. In some scenarios this might not be desirable, because it can prevent users from finding out why the button is disabled (e.g. via tooltip). Enabling this input will change the button so that it is styled to be disabled and will be marked as aria-disabled, but it will allow the button to receive events and focus. Note that by enabling this, you need to set the tabindex yourself if the button isnt meant to be tabbable and you have to prevent the button action (e.g. form submissions).',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
  render: (args: MatButton & { label: string; buttonType: string }) => ({
    props: args,
    template: `
    <button  *ngIf="buttonType === 'mat-button'" mat-button  ${argsToTemplate(
      args
    )} >{{label}}</button>
    <button *ngIf="buttonType === 'mat-raised-button' " mat-raised-button ${argsToTemplate(
      args
    )} >{{label}}</button>
    <button *ngIf="buttonType === 'mat-stroked-button' " mat-stroked-button ${argsToTemplate(
      args
    )} >{{label}}</button>
    <button *ngIf="buttonType === 'mat-flat-button' "  mat-flat-button ${argsToTemplate(
      args
    )} >{{label}}</button>
\    `,
  }),
};

export default meta;
type Story = StoryObj<MatButton & { label: string; buttonType: string }>;

export const accent: Story = {
  args: {
    color: 'accent',
    disabled: false,
    ariaDisabled: false,
    disabledInteractive: false,
    disableRipple:false,
    label: 'Button',
    buttonType: 'mat-button',
  },
};

export const Primary: Story = {
  args: {
    ...accent.args,
    color: 'primary',
  },
};

export const Warn: Story = {
  args: {
    ...accent.args,
    color: 'warn',
  },
};

export const Disabled: Story = {
  args: {
    ...accent.args,
    disabled: true,
  },
};

export const matRaisedButtonAccent: Story = {
  args: {
    ...accent.args,
    buttonType: 'mat-raised-button',
  },
};

export const matRaisedButtonPrimary: Story = {
  args: {
    ...matRaisedButtonAccent.args,
    color: 'primary',
  },
};

export const matRaisedButtonWarn: Story = {
  args: {
    ...matRaisedButtonAccent.args,
    color: 'warn',
  },
};

export const MatRaisedButtonDisabled: Story = {
  args: {
    ...matRaisedButtonAccent.args,
    disabled: true,
  },
};

export const MatStrokedButtonAccent: Story = {
  args: {
    ...accent.args,
    buttonType: 'mat-stroked-button',
  },
};

export const MatStrokedButtonPrimary: Story = {
  args: {
    ...MatStrokedButtonAccent.args,
    color: 'primary',
  },
};

export const MatStrokedButtonWarn: Story = {
  args: {
    ...MatStrokedButtonAccent.args,
    color: 'warn',
  },
};

export const MatStrokedButtonDisabled: Story = {
  args: {
    ...MatStrokedButtonAccent.args,
    disabled: true,
  },
};

export const MatFlatButtonAccent: Story = {
  args: {
    ...accent.args,
    buttonType: 'mat-flat-button',
  },
};

export const MatFlatButtonPrimary: Story = {
  args: {
    ...MatFlatButtonAccent.args,
    color: 'primary',
  },
};

export const MatFlatButtonWarn: Story = {
  args: {
    ...MatFlatButtonAccent.args,
    color: 'warn',
  },
};

export const MatFlatButtonDisabled: Story = {
  args: {
    ...MatFlatButtonAccent.args,
    disabled: true,
  },
};
