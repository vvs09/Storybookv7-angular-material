export const tooltipArgTypes = {
    disabled: {
        control: 'boolean',
        description: 'Disables the display of the tooltip.',
        table: {
          category: 'Behavior',
          defaultValue: { summary: 'false' },
          type: { summary: 'boolean' },
        },
      },
      hideDelay: {
        control: 'number',
        description: 'The default delay in ms before hiding the tooltip after hide is called.',
        table: {
          category: 'Timing',
          defaultValue: { summary: '0' },
          type: { summary: 'number' },
        },
      },
      message: {
        control: 'text',
        description: 'The message to be displayed in the tooltip.',
        table: {
          category: 'Content',
          defaultValue: { summary: '' },
          type: { summary: 'string' },
        },
      },
      position: {
        control: 'select',
        description: 'Allows the user to define the position of the tooltip relative to the parent element.',
        options: ['above', 'below', 'left', 'right', 'before', 'after'],
        table: {
          category: 'Positioning',
          defaultValue: { summary: 'below' },
          type: { summary: 'TooltipPosition' },
        },
      },
      positionAtOrigin: {
        control: 'boolean',
        description: 'Whether tooltip should be relative to the click or touch origin instead of outside the element bounding box.',
        table: {
          category: 'Positioning',
          defaultValue: { summary: 'false' },
          type: { summary: 'boolean' },
        },
      },
      showDelay: {
        control: 'number',
        description: 'The default delay in ms before showing the tooltip after show is called.',
        table: {
          category: 'Timing',
          defaultValue: { summary: '0' },
          type: { summary: 'number' },
        },
      },
      tooltipClass: {
        control: 'object',
        description: 'Classes to be passed to the tooltip. Supports the same syntax as ngClass.',
        table: {
          category: 'Styling',
          type: { summary: 'any' },
        },
      },
      touchGestures: {
        control: 'select',
        description: 'How touch gestures should be handled by the tooltip.',
        options: ['auto', 'on', 'off'],
        table: {
          category: 'Behavior',
          defaultValue: { summary: 'auto' },
          type: { summary: 'TooltipTouchGestures' },
        },
      }
  };
  