export const tabsMatTabGroupArgTypes = {
  color: {
    control: 'select',
    description: 'Theme color of the tab group. This API is supported in M2 themes only, it has no effect in M3 themes. For information on applying color variants in M3, see https://material.angular.io/guide/theming#using-component-color-variants.',
    options: ['primary', 'accent', 'warn'],
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: 'primary' },
      type: { summary: 'ThemePalette' },
    },
  },
  contentTabIndex: {
    control: 'number',
    description: 'Tabindex to be set on the inner element that wraps the tab content for accessibility. The tabindex will be removed for inactive tabs.',
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: null },
      type: { summary: 'number | null' },
    },
  },
  disablePagination: {
    control: 'boolean',
    description: 'Whether pagination should be disabled to avoid unnecessary layout recalculations.',
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  disableRipple: {
    control: 'boolean',
    description: 'Whether ripples in the tab group are disabled.',
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  dynamicHeight: {
    control: 'boolean',
    description: 'Whether the tab group should grow to the size of the active tab.',
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  fitInkBarToContent: {
    control: 'boolean',
    description: 'Whether the ink bar should fit its width to the size of the tab label content.',
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  headerPosition: {
    control: 'select',
    description: 'Position of the tab header.',
    options: ['above', 'below'],
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: 'above' },
      type: { summary: 'MatTabHeaderPosition' },
    },
  },
  preserveContent: {
    control: 'boolean',
    description: 'By default, tabs remove their content from the DOM while off-screen. Setting this to true will keep it in the DOM to prevent elements like iframes and videos from reloading.',
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  selectedIndex: {
    control: 'number',
    description: 'The index of the active tab.',
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: null },
      type: { summary: 'number | null' },
    },
  },
  stretchTabs: {
    control: 'boolean',
    description: 'Whether tabs should be stretched to fill the header.',
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  animationDone: {
    action: 'animationDone',
    description: 'Event emitted when the body animation has completed.',
    table: {
      category: 'MatTabGroup',
      type: { summary: 'EventEmitter<void>' },
    },
  },
  focusChange: {
    action: 'focusChange',
    description: 'Event emitted when focus has changed within a tab group.',
    table: {
      category: 'MatTabGroup',
      type: { summary: 'EventEmitter<MatTabChangeEvent>' },
    },
  },
  selectedIndexChange: {
    action: 'selectedIndexChange',
    description: 'Output to enable support for two-way binding on [(selectedIndex)].',
    table: {
      category: 'MatTabGroup',
      type: { summary: 'EventEmitter<number>' },
    },
  },
  selectedTabChange: {
    action: 'selectedTabChange',
    description: 'Event emitted when the tab selection has changed.',
    table: {
      category: 'MatTabGroup',
      type: { summary: 'EventEmitter<MatTabChangeEvent>' },
    },
  },
  backgroundColor: {
    control: 'select',
    description: 'Theme color of the background of the tab group. This API is supported in M2 themes only, and has no effect in M3 themes. For information on applying color variants in M3, see https://material.angular.io/guide/theming#using-component-color-variants.',
    options: ['primary', 'accent', 'warn'],
    table: {
      category: 'MatTabGroup',
      defaultValue: { summary: 'primary' },
      type: { summary: 'ThemePalette' },
    },
  },
  ariaLabel: {
    control: 'text',
    description: 'Aria label for the tab.',
    table: {
      category: 'MatTab',
      defaultValue: { summary: '' },
      type: { summary: 'string' },
    },
  },
  ariaLabelledby: {
    control: 'text',
    description: 'Reference to the element that the tab is labelled by. Will be cleared if aria-label is set at the same time.',
    table: {
      category: 'MatTab',
      defaultValue: { summary: '' },
      type: { summary: 'string' },
    },
  },
  bodyClass: {
    control: 'text',
    description: 'Classes to be passed to the tab mat-tab-body container.',
    table: {
      category: 'MatTab',
      defaultValue: { summary: '' },
      type: { summary: 'string | string[]' },
    },
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the tab is disabled.',
    table: {
      category: 'MatTab',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  labelClass: {
    control: 'text',
    description: 'Classes to be passed to the tab label inside the mat-tab-header container.',
    table: {
      category: 'MatTab',
      defaultValue: { summary: '' },
      type: { summary: 'string | string[]' },
    },
  },
  textLabel: {
    control: 'text',
    description: 'Plain text label for the tab, used when there is no template label.',
    table: {
      category: 'MatTab',
      defaultValue: { summary: '' },
      type: { summary: 'string' },
    },
  },
  isActive: {
    control: 'boolean',
    description: 'Whether the tab is currently active.',
    table: {
      category: 'MatTab',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  origin: {
    control: 'number',
    description: 'The initial relative index origin of the tab if created and selected after another tab is already selected.',
    table: {
      category: 'MatTab',
      defaultValue: { summary: null },
      type: { summary: 'number | null' },
    },
  },
  position: {
    control: 'number',
    description: 'The relatively indexed position where 0 represents the center, negative is left, and positive is right.',
    table: {
      category: 'MatTab',
      defaultValue: { summary: null },
      type: { summary: 'number | null' },
    },
  },
  templateLabel: {
    control: 'object',
    description: 'Content for the tab label given by <ng-template mat-tab-label>.',
    table: {
      category: 'MatTab',
      defaultValue: { summary: '' },
      type: { summary: 'MatTabLabel' },
    },
  },
};
