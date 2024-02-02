export const buttonArgTypes= {
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
  }