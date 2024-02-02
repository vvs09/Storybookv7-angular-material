import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta<MatSidenav> = {
  title: 'Components/Sidenav',
  component: MatSidenav,
  tags: ['autodocs'],
  argTypes: {
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
        defaultValue: { summary: "-" },
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
  },
  decorators: [
    moduleMetadata({
      imports: [MatSidenavModule, MatButtonModule],
    }),
  ],
  render: (args: MatSidenav) => ({
    props: args,
    template: `
    <mat-drawer-container style="  
    width: 500px;
    height: 300px;
    border: 1px solid rgba(0, 0, 0, 0.5);" autosize>
  <mat-drawer #drawer style=" padding: 20px;" ${argsToTemplate(args)}  >
    <p>Auto-resizing sidenav</p>
    @if (showFiller) {
      <p>Lorem, ipsum dolor sit amet consectetur.</p>
    }
    <button (click)="showFiller = !showFiller" mat-raised-button>
      Toggle extra text
    </button>
  </mat-drawer>

  <div style="display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;">
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
    opened: true,
  },
};

// export const Primary: Story = {
//   args: {
//     ...accent.args,
//     color: 'primary',
//   },
// };

// export const Warn: Story = {
//   args: {
//     ...accent.args,
//     color: 'warn',
//   },
// };

// export const Disabled: Story = {
//   args: {
//     ...accent.args,
//     disabled: true,
//   },
// };

// export const overlap: Story = {
//   args: {
//     ...accent.args,
//     overlap: true,
//   },
// };

// export const content: Story = {
//   args: {
//     ...accent.args,
//     content: '67',
//   },
// };

// export const Position: Story = {
//   args: {
//     ...accent.args,
//     position: 'before',
//   },
// };

// export const Size: Story = {
//   args: {
//     ...accent.args,
//     size: 'large',
//   },
// };

// export const hidden: Story = {
//   args: {
//     ...accent.args,
//     hidden: true,
//   },
// };
