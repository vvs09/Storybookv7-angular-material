import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

const meta: Meta<MatPaginator> = {
  title: 'Components/Paginator',
  component: MatPaginator,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['accent', 'primary', 'warn'],
      description: 'Theme color palette for the component.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the component is disabled.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    hidePageSize: {
      control: 'boolean',
      description: 'Whether to hide the page size selection UI from the user.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    length: {
      control: 'number',
      description:
        'he length of the total number of items that are being paginated. Defaulted to 0.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '0' },
      },
    },
    pageIndex: {
      control: 'number',
      description:
        'The zero-based page index of the displayed list of items. Defaulted to 0.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '0' },
      },
    },
    pageSize: {
      control: 'number',
      description:
        'Number of items to display on a page. By default set to 50.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '50' },
      },
    },
    pageSizeOptions: {
      control: 'object',
      description:
        'The set of provided page size options to display to the user.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    selectConfig: {
      control: 'object',
      description:
        'Used to configure the underlying MatSelect inside the paginator.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    showFirstLastButtons: {
      control: 'boolean',
      description: 'Whether to show the first/last buttons UI to the user.',
      table: {
        category: 'INPUTS',
        defaultValue: { summary: '-' },
      },
    },
    page: {
      control: '',
      description:
        'Event emitted when the paginator changes the page size or page index.',
      table: {
        category: 'OUTPUTS',
        defaultValue: { summary: '-' },
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [MatPaginatorModule],
    }),
  ],
  render: (args: MatPaginator) => ({
    props: args,
    template: `<mat-paginator ${argsToTemplate(args)}> </mat-paginator>`,
  }),
};

export default meta;
type Story = StoryObj<MatPaginator>;

export const Default: Story = {
  args: {
    pageSize: 10,
    length: 50,
    pageIndex: 0,
    pageSizeOptions: [10, 20, 30],
    hidePageSize: false,
    showFirstLastButtons: true,
    disabled: false,
  },
};

export const HidePageSize: Story = {
  args: {
    ...Default.args,
    hidePageSize: true,
  },
};

export const ColorThemePrimary: Story = {
  args: {
    ...Default.args,
    color: 'primary',
  },
};

export const PageIndex: Story = {
  args: {
    ...Default.args,
    pageIndex: 1,
  },
};

export const ShowFirstLastButtons: Story = {
  args: {
    ...Default.args,
    showFirstLastButtons: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const SelectConfig: Story = {
  args: {
    ...Default.args,
    selectConfig: {
      disableOptionCentering: true,
    },
  },
};
