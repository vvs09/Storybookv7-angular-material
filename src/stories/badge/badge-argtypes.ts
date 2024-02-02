export const badgeArgTypes = {
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
    description: 'Whether the badge is disabled.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: 'false' },
      type: {
        summary: 'boolean',
      },
    },
  },
  content: {
    control: 'text',
    description: 'Whether ripples are disabled.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: 'null' },
      type: {
        summary: 'string | number | undefined | null',
      },
    },
  },
  description: {
    control: 'text',
    description:
      'Message used to describe the decorated element via aria-describedby',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'string',
      },
    },
  },
  position: {
    control: 'select',
    options: [
      'above after',
      'above before',
      ' below before',
      'below after ',
      'before',
      'after',
      'above',
      'below',
    ],
    description:
      'Position the badge should reside. Accepts any combination of above | below and before|after.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '' },
      type: {
        summary:
          'above after| above before | below before| below after | before | after | above | below',
      },
    },
  },
  size: {
    control: 'radio',
    options: ['small', 'medium', 'large'],
    description: 'Size of the badge. Can be small, medium, or large.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '' },
      type: {
        summary: "'small' | 'medium' | 'large'",
      },
    },
  },
  hidden: {
    control: 'boolean',
    description: 'Whether the badge is hidden.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: 'false' },
      type: {
        summary: 'boolean',
      },
    },
  },
  overlap: {
    control: 'boolean',
    description: 'Whether the badge should overlap its contents or not',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: 'false' },
      type: {
        summary: 'boolean',
      },
    },
  },
};
