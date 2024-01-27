import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<MatBadge & { label: string }> = {
  title: 'Components/Badge',
  component: MatBadge,
  tags: ['autodocs'],
  argTypes: {
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
  },
  decorators: [
    moduleMetadata({
      imports: [MatBadgeModule, MatButtonModule, MatIconModule],
    }),
  ],
  render: (args: MatBadge & { label: string }) => ({
    props: args,
    template: `
    <div matBadge style="display:inline" ${argsToTemplate(args)}>{{label}}</div>

   `,
  }),
};

export default meta;
type Story = StoryObj<MatBadge & { label: string }>;

export const accent: Story = {
  args: {
    label: 'Text with a badge',
    overlap: false,
    position: 'above after',
    content: '8',
    color: 'accent',
    disabled: false,
    description: 'badge',
    size: 'small',
    hidden: false,
  },
};

export const Primary: Story = {
  args: {
    ...accent.args,
    color: 'primary',
  },
};

export const Warn: Story = {
  args: {
    ...accent.args,
    color: 'warn',
  },
};

export const Disabled: Story = {
  args: {
    ...accent.args,
    disabled: true,
  },
};

export const overlap: Story = {
  args: {
    ...accent.args,
    overlap: true,
  },
};

export const content: Story = {
  args: {
    ...accent.args,
    content: '67',
  },
};

export const Position: Story = {
  args: {
    ...accent.args,
    position: 'before',
  },
};

export const Size: Story = {
  args: {
    ...accent.args,
    size: 'large',
  },
};

export const hidden: Story = {
  args: {
    ...accent.args,
    hidden: true,
  },
};
