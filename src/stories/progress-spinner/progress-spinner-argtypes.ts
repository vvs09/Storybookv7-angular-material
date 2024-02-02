export const progressSpinnerargTypes = {
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
  diameter: {
    control: 'number',
    description:
      'The diameter of the progress spinner (will set width and height of svg).',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'number',
      },
    },
  },
  mode: {
    control: 'radio',
    options: ['determinate', 'indeterminate', 'buffer', 'query'],
    description:
      'Mode of the progress bar.Input must be one of these values: determinate, indeterminate, buffer, query, defaults to determinate.Mirrored to mode attribute.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: 'determinate' },
      type: {
        summary: 'string',
      },
    },
  },
  strokeWidth: {
    control: 'number',
    description: 'Stroke width of the progress spinner.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'number',
      },
    },
  },
  value: {
    control: 'number',
    description:
      'Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'number',
      },
    },
  },
};
