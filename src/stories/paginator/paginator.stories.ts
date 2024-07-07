import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { paginatorArgTypes } from './paginator-argtypes';

const meta = {
  title: 'Components/Paginator',
  component: MatPaginator,
  tags: ['autodocs'],
  argTypes: {
    ...paginatorArgTypes,
  },
  decorators: [
    moduleMetadata({
      imports: [MatPaginatorModule],
    }),
  ],
  render: (args:any) => ({
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
