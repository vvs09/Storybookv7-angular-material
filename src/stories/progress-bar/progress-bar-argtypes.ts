export const progressBarargTypes = {
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
  bufferValue: {
    control: 'number',
    description: 'Buffer value of the progress bar. Defaults to zero.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '0' },
      type: {
        summary: 'number',
      },
    },
  },
  mode: {
    control: 'radio',
    options: ['determinate', 'indeterminate', 'buffer', 'query'],
    description:
      'Mode of the progress bar.Input must be one of these values: determinate, indeterminate, buffer, query, defaults to determinate. Mirrored to mode attribute.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'string',
      },
    },
  },
  value: {
    control: 'number',
    description:
      'Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '0' },
      type: {
        summary: 'number',
      },
    },
  },
  animationEnd: {
    action: 'animationEnd',
    control: '-',
    description:
      'Event emitted when animation of the primary progress bar completes. This event will not be emitted when animations are disabled, nor will it be emitted for modes with continuous animations (indeterminate and query).',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '50' },
      type: {
        summary: 'EventEmitter<ProgressAnimationEnd>',
      },
    },
  },
};
