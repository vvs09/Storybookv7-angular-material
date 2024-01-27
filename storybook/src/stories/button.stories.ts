import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatButtonModule, MatButton } from '@angular/material/button';

const meta: Meta<MatButton & { label: string; buttonType: string }> = {
  title: 'Components/Button',
  component: MatButton,
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
    disableRipple: {
      control: 'boolean',
      description: 'Whether ripples are disabled.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    // defaultColor: {
    //   control: 'text',
    //   description: 'Default color to fall back to if no value is set.',
    //   table: {
    //     category: 'INPUTS',
    //     defaultValue: { summary: '-' },
    //   },
    // },
    ripple: {
      control: 'object',
      description: 'Reference to the MatRipple instance of the button.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
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
    <button  *ngIf="buttonType === 'mat-button'" mat-button  ${argsToTemplate(args)} >{{label}}</button>
    <button *ngIf="buttonType === 'mat-raised-button' " mat-raised-button ${argsToTemplate(args)} >{{label}}</button>
    <button *ngIf="buttonType === 'mat-stroked-button' " mat-stroked-button ${argsToTemplate(args)} >{{label}}</button>
    <button *ngIf="buttonType === 'mat-flat-button' "  mat-flat-button ${argsToTemplate(args)} >{{label}}</button>
\    `,
  }),
};

export default meta;
type Story = StoryObj<MatButton & { label: string; buttonType: string }>;

export const accent: Story = {
  args: {
    color: 'accent',
    // defaultColor: 'accent',
    disabled: false,
    disableRipple: false,
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
  
  export const  MatFlatButtonPrimary: Story = {
    args: {
      ...MatFlatButtonAccent.args,
      color: 'primary',
    },
  };
  
  export const  MatFlatButtonWarn: Story = {
    args: {
      ...MatFlatButtonAccent.args,
      color: 'warn',
    },
  };
  
  export const  MatFlatButtonDisabled: Story = {
    args: {
      ...MatFlatButtonAccent.args,
      disabled: true,
    },
  };