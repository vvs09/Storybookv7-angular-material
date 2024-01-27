import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import {
  MatSlideToggleModule,
  MatSlideToggle,
} from '@angular/material/slide-toggle';

const meta: Meta<MatSlideToggle> = {
  title: 'Components/Slide Toggle',
  component: MatSlideToggle,
  tags: ['autodocs'],
  argTypes: {
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
    ariaDescribedby: {
      control: 'text',
      description:
        'Used to set the aria-describedby attribute on the underlying input element.',
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
      description:
        'Used to set the aria-label attribute on the underlying input element.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
        type: {
          summary: 'string',
        },
      },
    },
    ariaLabelledby: {
      control: 'text',
      description:
        'Used to set the aria-labelledby attribute on the underlying input element.',
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
      description: 'Whether the slide-toggle element is checked or not.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
        type: {
          summary: 'boolean',
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
    id: {
      control: 'text',
      description:
        'A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
        type: {
          summary: 'string',
        },
      },
    },
    labelPosition: {
      control: 'radio',
      options: ['after', 'before'],
      description:
        'Whether the label should appear after or before the slide-toggle. Defaults to after',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: 'after' },
        type: {
          summary: 'after | before',
        },
      },
    },
    name: {
      control: 'text',
      description:
        'Name value will be applied to the input element if present.',
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
      description: 'Whether the slide-toggle is required.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
        type: {
          summary: 'boolean',
        },
      },
    },
    buttonId: {
      control: 'text',
      description: 'Returns the unique id for the visual hidden button.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
        type: {
          summary: 'string',
        },
      },
    },
    defaults: {
      control: 'number',
      description: '',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
        type: {
          summary: 'MatSlideToggleDefaultOptions',
        },
      },
    },
    inputId: {
      control: 'text',
      description: 'Returns the unique id for the visual hidden input.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    toggleChange: {
      action: 'toggleChange',
      control: '-',
      description:
        'An event will be dispatched each time the slide-toggle input is toggled. This event is always emitted when the user toggles the slide toggle, but this does not mean the slide toggles value has changed.',
      table: {
        category: 'OUTPUTS',
        defaultValue: { summary: '-' },
        type: {
          summary: 'EventEmitter<MatSlideToggleChange>',
        },
      },
    },
    change: {
      action: 'change',
      control: '-',
      description:
        'An event will be dispatched each time the slide-toggle changes its value.',
      table: {
        category: 'OUTPUTS',
        defaultValue: { summary: '-' },
        type: {
          summary: 'EventEmitter<void>',
        },
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule],
    }),
  ],
  render: (args: MatSlideToggle) => ({
    props: args,
    template: `<mat-slide-toggle ${argsToTemplate(
      args
    )}>Slide me!</mat-slide-toggle>
    `,
  }),
};

export default meta;
type Story = StoryObj<MatSlideToggle>;

export const Default: Story = {
  args: {
    ariaDescribedby: 'Silde Toggle',
    ariaLabel: 'Silde Toggle',
    ariaLabelledby: 'Silde Toggle',
    color: 'primary',
    checked: true,
    disableRipple: false,
    disabled: false,
    id: 'slide toggle storybook',
    labelPosition: 'after',
    name: 'Slide Toggle',
    required: false,
    buttonId: 'button id',
    // defaultColor: 'primary',
    inputId: 'input id',
  },
};

export const Warn: Story = {
  args: {
    ...Default.args,
    color: 'warn',
  },
};

export const Accent: Story = {
  args: {
    ...Default.args,
    color: 'accent',
  },
};

export const PositionBefore: Story = {
  args: {
    ...Default.args,
    labelPosition: 'before',
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: false,
  },
};

export const DisableRipple: Story = {
  args: {
    ...Default.args,
    disableRipple: true,
  },
};

export const Disable: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
