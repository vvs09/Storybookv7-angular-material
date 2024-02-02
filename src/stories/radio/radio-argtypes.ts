export const radioArgTypes = {
  color: {
    control: 'radio',
    options: ['accent', 'primary', 'warn'],
    description: 'Theme color palette for the component.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'string',
      },
    },
  },
  disabled: {
    control: 'boolean',
    description:
      'Whether the radio is disabled. This fully overrides the implementation provided by mixinDisabled, but the mixin is still required because mixinTabIndex requires it.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'boolean',
      },
    },
  },
  ariaDescribedby: {
    control: 'text',
    description:
      'The aria-describedby attribute is read after the elements label and field type.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'string',
      },
    },
  },
  ariaLabel: {
    control: 'text',
    description: 'ARIA label for the content of the chip.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'string',
      },
    },
  },
  disableRipple: {
    control: 'boolean',
    description: 'Whether ripples are disabled.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'boolean',
      },
    },
  },
  ariaLabelledby: {
    control: 'text',
    description:
      'Users can specify the aria-labelledby attribute which will be forwarded to the input element',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'string',
      },
    },
  },
  id: {
    control: 'text',
    description:
      'A unique id for the radio input. If none is supplied, it will be auto-generated.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'string',
      },
    },
  },
  checked: {
    control: 'boolean',
    description: 'Whether the radio is checked.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'boolean',
      },
    },
  },
  labelPosition: {
    control: 'radio',
    options: ['before', 'after'],
    description:
      'Whether the label should appear after or before the radio. Defaults to after',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: 'after' },
      type: {
        summary: 'before | after',
      },
    },
  },
  name: {
    control: 'text',
    description: 'Name value will be applied to the input element if present',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'string',
      },
    },
  },
  required: {
    control: 'boolean',
    description: 'Whether the radio is required.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'boolean',
      },
    },
  },
  change: {
    control: 'object',
    description: 'Event emitted when the radios checked value changes.',
    table: {
      category: 'OUTPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'EventEmitter<MatRadioChange>',
      },
    },
  },
  inputId: {
    control: 'text',
    description: 'Returns the unique id for the visual hidden input.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'string',
      },
    },
  },
  value: {
    control: 'text',
    description: 'The value attribute of the native input element.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'any',
      },
    },
  },
};
