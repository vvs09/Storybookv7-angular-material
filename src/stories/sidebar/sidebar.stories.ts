import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { sideBarArgTypes } from './sidebar-argtypes';

const meta = {
  title: 'Components/Sidenav',
  component: MatSidenav,
  tags: ['autodocs'],
  argTypes: {
    ...sideBarArgTypes,
  },
  decorators: [
    moduleMetadata({
      imports: [MatSidenavModule, MatButtonModule],
    }),
  ],
  render: (args:any) => ({
    props: args,
    styles: [
      `
     .sidebar{
      width: 500px;
      height: 300px;
      border: 1px solid rgba(0, 0, 0, 0.5);"
     }
    .sidebar-button{
     display: flex;
     height: 100%;
     align-items: center;
     justify-content: center;
     }
     .
     `,
    ],
    template: `
    <mat-drawer-container class="sidebar" autosize>
  <mat-drawer #drawer style=" padding: 20px;" ${argsToTemplate(args)}  >
    <p>Auto-resizing sidenav</p>
    @if (showFiller) {
      <p>Lorem, ipsum dolor sit amet consectetur.</p>
    }
    <button (click)="showFiller = !showFiller" mat-raised-button>
      Toggle extra text
    </button>
  </mat-drawer>
  <div class="sidebar-button">
    <button type="button" mat-button (click)="drawer.toggle()">
      Toggle sidenav
    </button>
  </div>
</mat-drawer-container>

   `,
  }),
};

export default meta;
type Story = StoryObj<MatSidenav>;

export const Basic: Story = {
  args: {
    mode: 'over',
    opened: false,
    autoFocus: false,
    disableClose: false,
    fixedInViewport: false,
    position: 'start',
  },
};

export const ModePush: Story = {
  args: {
    ...Basic.args,
    mode: 'push',
  },
};

export const Warn: Story = {
  args: {
    ...Basic.args,
    mode: 'side',
  },
};

export const PositionEnd: Story = {
  args: {
    ...Basic.args,
    position: 'end',
  },
};

export const AutoFocus: Story = {
  args: {
    ...Basic.args,
    autoFocus: true,
  },
};

export const DisableClose: Story = {
  args: {
    ...Basic.args,
    disableClose: true,
  },
};

export const Open: Story = {
  args: {
    ...Basic.args,
    opened: true,
  },
};

export const FixedInViewport: Story = {
  args: {
    ...Basic.args,
    fixedInViewport: true,
  },
};
