export const chipsArgTypes = {
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
    description: 'Whether the component is disabled.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'boolean',
      },
    },
  },
  ariaDescription: {
    control: 'text',
    description: 'ARIA description for the content of the chip.',
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
  highlighted: {
    control: 'boolean',
    description: 'Colors the chip for emphasis as if it were selected.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'boolean',
      },
    },
  },
  id: {
    control: 'text',
    description:
      'A unique id for the chip. If none is supplied, it will be auto-generated.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'string',
      },
    },
  },
  removable: {
    control: 'boolean',
    description:
      'Determines whether or not the chip displays the remove styling and emits (removed) events.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'boolean',
      },
    },
  },
  role: {
    control: 'text',
    description: 'Role for the root of the chip.',
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
    description:
      'The value of the chip. Defaults to the content inside the mat-mdc-chip-action-label element.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'any',
      },
    },
  },
  destroyed: {
    control: 'object',
    description: 'Emitted when the chip is destroyed.',
    table: {
      category: 'OUTPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'EventEmitter<MatChipEvent>',
      },
    },
  },
  removed: {
    control: 'object',
    description: 'Emitted when a chip is to be removed.',
    table: {
      category: 'OUTPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'EventEmitter<MatChipEvent>',
      },
    },
  },
};
