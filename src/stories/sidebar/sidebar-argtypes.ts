export const sideBarArgTypes = {
  autoFocus: {
    control: 'boolean',
    description:
      'Whether the drawer should focus the first focusable element automatically when opened. Defaults to false in when mode is set to side, otherwise defaults to true. If explicitly enabled, focus will be moved into the sidenav in side mode as well.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: 'false' },
      type: {
        summary: 'AutoFocusTarget | string | boolean',
      },
    },
  },
  disableClose: {
    control: 'boolean',
    description:
      'Whether the drawer can be closed with the escape key or by clicking on the backdrop.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: 'false' },
      type: {
        summary: 'boolean',
      },
    },
  },
  fixedBottomGap: {
    control: 'number',
    description:
      'The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in fixed mode.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'number',
      },
    },
  },
  fixedInViewport: {
    control: 'boolean',
    description: 'Whether the sidenav is fixed in the viewport.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: 'false' },
      type: {
        summary: 'boolean',
      },
    },
  },
  position: {
    control: 'radio',
    options: ['start', 'end'],
    description: 'The side that the drawer is attached to.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: "'start' | 'end'",
      },
    },
  },
  fixedTopGap: {
    control: 'number',
    description:
      'The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed mode.',
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
    options: ['over', 'push', 'side'],
    description: "Mode of the drawer; one of 'over', 'push' or 'side'.",
    table: {
      category: 'INPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: "'over' |'push' | 'side'",
      },
    },
  },
  opened: {
    control: 'boolean',
    description:
      'Whether the drawer is opened. We overload this because we trigger an event when it starts or end.',
    table: {
      category: 'INPUTS',
      defaultValue: { summary: 'false' },
      type: {
        summary: 'boolean',
      },
    },
  },
  closedStart: {
    control: '-',
    description: 'Event emitted when the drawer has started closing.',
    table: {
      category: 'OUTPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'Observable<void>',
      },
    },
  },
  onPositionChanged: {
    control: '-',
    description: "Event emitted when the drawer's position changes.",
    table: {
      category: 'OUTPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'EventEmitter<void>',
      },
    },
  },
  openedChange: {
    control: '-',
    description: 'Event emitted when the drawer open state is changed.',
    table: {
      category: 'OUTPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: ' EventEmitter<boolean>',
      },
    },
  },
  openedStart: {
    control: '-',
    description: 'Event emitted when the drawer has started opening.',
    table: {
      category: 'OUTPUTS',
      defaultValue: { summary: '-' },
      type: {
        summary: 'Observable<void>',
      },
    },
  },
};
