export const paginatorArgTypes = {
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
  hidePageSize: {
    control: 'boolean',
    description: 'Whether to hide the page size selection UI from the user.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'boolean',
      },
    },
  },
  length: {
    control: 'number',
    description:
      'he length of the total number of items that are being paginated. Defaulted to 0.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '0' },
      type: {
        summary: 'number',
      },
    },
  },
  pageIndex: {
    control: 'number',
    description:
      'The zero-based page index of the displayed list of items. Defaulted to 0.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '0' },
      type: {
        summary: 'number',
      },
    },
  },
  pageSize: {
    control: 'number',
    description: 'Number of items to display on a page. By default set to 50.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '50' },
      type: {
        summary: 'number',
      },
    },
  },
  pageSizeOptions: {
    control: 'object',
    description:
      'The set of provided page size options to display to the user.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'array',
      },
    },
  },
  selectConfig: {
    control: 'object',
    description:
      'Used to configure the underlying MatSelect inside the paginator.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'object',
      },
    },
  },
  showFirstLastButtons: {
    control: 'boolean',
    description: 'Whether to show the first/last buttons UI to the user.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'boolean',
      },
    },
  },
  page: {
    action: 'page',
    control: '',
    description:
      'Event emitted when the paginator changes the page size or page index.',
    table: {
      category: 'OUTPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'EventEmitter<PageEvent>',
      },
    },
  },
};
