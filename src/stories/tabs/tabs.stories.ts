import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { tabsMatTabGroupArgTypes } from './tabs-argtypes';

const meta = {
  title: 'Components/Tabs',
  component: MatTabGroup && MatTab,
  tags: ['autodocs'],
  argTypes: tabsMatTabGroupArgTypes,
  decorators: [
    moduleMetadata({
      imports: [MatTabsModule],
    }),
  ],
  render: (args: any) => ({
    props: args,
    template: `
    <mat-tab-group  ${argsToTemplate(args)}>
    <mat-tab ${argsToTemplate(args)} >Content 1</mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
  </mat-tab-group>
   `,
  }),
};

export default meta;
type Story = StoryObj<MatTabGroup & MatTab>;

export const Basic: Story = {
  args: {
    color: 'primary',
    disableRipple: false,
    fitInkBarToContent: false,
    stretchTabs: false,
    disablePagination: false,
    preserveContent: false,
    selectedIndex: 0,
    headerPosition: 'above',
    textLabel: 'First',
  },
};

export const Accent: Story = {
  args: {
    color: 'accent',
    disableRipple: false,
    fitInkBarToContent: false,
    stretchTabs: false,
    disablePagination: false,
    dynamicHeight: false,
    preserveContent: false,
    selectedIndex: 0,
    textLabel: 'First',
  },
};

export const Warn: Story = {
  args: {
    color: 'warn',
    disablePagination: false,
    dynamicHeight: false,
    preserveContent: false,
    selectedIndex: 0,
    stretchTabs: false,
    fitInkBarToContent: false,
    disableRipple: false,
    textLabel: 'First',
  },
};

export const StrectchTabs: Story = {
  args: {
    color: 'warn',
    disablePagination: false,
    dynamicHeight: false,
    preserveContent: false,
    selectedIndex: 0,
    stretchTabs: true,
    fitInkBarToContent: false,
    disableRipple: false,
    textLabel: 'First',
  },
};

export const FitLinkToContent: Story = {
  args: {
    color: 'warn',
    disablePagination: false,
    dynamicHeight: false,
    preserveContent: false,
    selectedIndex: 0,
    stretchTabs: true,
    fitInkBarToContent: true,
    disableRipple: false,
    textLabel: 'First',
  },
};

export const BackGroundColor: Story = {
  args: {
    color: 'primary',
    disablePagination: false,
    dynamicHeight: false,
    preserveContent: false,
    selectedIndex: 0,
    stretchTabs: true,
    fitInkBarToContent: true,
    disableRipple: false,
    backgroundColor: 'primary',
    textLabel: 'First',
  },
};

export const AnimationDuration1000: Story = {
  args: {
    color: 'primary',
    disablePagination: false,
    dynamicHeight: true,
    preserveContent: false,
    selectedIndex: 1,
    stretchTabs: true,
    fitInkBarToContent: true,
    disableRipple: false,
    backgroundColor: 'accent',
    animationDuration: '1000',
    textLabel: 'First',
  },
};

export const HeaderPositionBelow: Story = {
  args: {
    color: 'accent',
    disablePagination: false,
    dynamicHeight: true,
    preserveContent: false,
    selectedIndex: 1,
    stretchTabs: true,
    fitInkBarToContent: true,
    disableRipple: false,
    backgroundColor: 'primary',
    animationDuration: '0',
    headerPosition: 'below',
    textLabel: 'First',
  },
};

export const Disabled: Story = {
  args: {
    color: 'accent',
    disablePagination: false,
    dynamicHeight: true,
    preserveContent: false,
    selectedIndex: 1,
    stretchTabs: true,
    fitInkBarToContent: true,
    disableRipple: false,
    backgroundColor: 'primary',
    animationDuration: '0',
    headerPosition: 'above',
    textLabel: 'First',
    disabled: true,
  },
};

export const TextLabel: Story = {
  args: {
    color: 'accent',
    disablePagination: false,
    dynamicHeight: true,
    preserveContent: false,
    selectedIndex: 1,
    stretchTabs: true,
    fitInkBarToContent: true,
    disableRipple: false,
    backgroundColor: 'primary',
    animationDuration: '0',
    headerPosition: 'above',
    textLabel: 'Tab',
    disabled: false,
  },
};
