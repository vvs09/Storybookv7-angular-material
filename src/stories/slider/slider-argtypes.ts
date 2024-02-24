export const sliderArgTypes = {
  color: {
    control: 'select',
    description: 'Palette color of the slider.',
    options: ['primary', 'accent', 'warn'],
    table: {
      category: 'Appearance',
      defaultValue: { summary: 'primary' },
      type: { summary: 'ThemePalette' },
    },
  },
  disableRipple: {
    control: 'boolean',
    description: 'Whether ripples are disabled in the slider.',
    table: {
      category: 'Behavior',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the slider is disabled.',
    table: {
      category: 'Behavior',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  discrete: {
    control: 'boolean',
    description:
      'Whether the slider displays a numeric value label upon pressing the thumb.',
    table: {
      category: 'Appearance',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  displayWith: {
    control: 'text',
    description: 'Function to format the value displayed in the thumb label.',
    table: {
      category: 'Function',
      type: { summary: 'function' },
    },
  },
  max: {
    control: 'number',
    description: 'The maximum value that the slider can have.',
    table: {
      category: 'Limits',
      defaultValue: { summary: '100' },
      type: { summary: 'number' },
    },
  },
  min: {
    control: 'number',
    description: 'The minimum value that the slider can have.',
    table: {
      category: 'Limits',
      defaultValue: { summary: '0' },
      type: { summary: 'number' },
    },
  },
  showTickMarks: {
    control: 'boolean',
    description:
      'Whether the slider displays tick marks along the slider track.',
    table: {
      category: 'Appearance',
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  step: {
    control: 'number',
    description: 'The values at which the thumb will snap.',
    table: {
      category: 'Behavior',
      defaultValue: { summary: '1' },
      type: { summary: 'number' },
    },
  },
  value: {
    control: 'number',
    description: 'The current value of the slider.',
    table: {
      category: 'Value',
      defaultValue: { summary: '0' },
      type: { summary: 'number' },
    },
  },
  dragEnd: {
    control: false,
    description: 'Event emitted when the slider thumb stops being dragged.',
    table: {
      category: 'Events',
      type: { summary: 'EventEmitter<MatSliderDragEvent>' },
    },
    action: 'dragEnd',
  },
  dragStart: {
    control: false,
    description: 'Event emitted when the slider thumb starts being dragged.',
    table: {
      category: 'Events',
      type: { summary: 'EventEmitter<MatSliderDragEvent>' },
    },
    action: 'dragStart',
  },
  valueChange: {
    control: false,
    description: 'Event emitted when the value is changed.',
    table: {
      category: 'Events',
      type: { summary: 'EventEmitter<number>' },
    },
    action: 'valueChange',
  },
  // Assuming 'percentage' is for documentation purposes and not an @Input or @Output
  percentage: {
    control: false,
    description: 'The percentage of the slider that coincides with the value.',
    table: {
      category: 'Information',
      type: { summary: 'number' },
    },
  },
};
