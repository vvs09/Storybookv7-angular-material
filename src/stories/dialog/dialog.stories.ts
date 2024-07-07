import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Injector, importProvidersFrom } from '@angular/core';
import { injectInjectorToProps } from '../../../.storybook/inject-injector-to-props.decorator';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';

const meta = {
  title: 'Components/Dialog',
  component: MatDialog,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [MatDialogModule, MatButtonModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(MatDialogModule)],
    }),
    injectInjectorToProps(),
  ],
  render: ({ dialogConfig, ...args }: any) => ({
    props: {
      ...args,
      openDialog: (injector: Injector) => {
        injector.get(MatDialog).open(DialogComponent, dialogConfig);
      },
    },
    template: `
     <button mat-raised-button (click)="openDialog(injector)">Open dialog</button>
    `,
  }),
};

export default meta;
type Story = StoryObj<MatDialog & { dialogConfig: object }>;

export const Default: Story = {
  args: {
    dialogConfig: {
      ariaDescribedBy: 'Storybook Dialog',
      ariaLabel: 'Storybook Dialog',
      ariaModal: false,
      autoFocus: false,
      backdropClass: '',
      closeOnNavigation: false,
      delayFocusTrap: false,
      direction: '',
      disableClose: false,
      enterAnimationDuration: 0,
      exitAnimationDuration: 0,
      hasBackdrop: false,
      height: '',
      width: '',
      id: 'dialog',
      maxHeight: '',
      maxWidth: '',
      minHeight: '',
      minWidth: '',
      panelClass: '',
      position: 'bottom',
      restoreFocus: false,
    },
  },
};

export const HeightAndWidth: Story = {
  args: {
    dialogConfig: {
      ...Default.args?.dialogConfig,
      height: '500px',
      width: '350px',
    },
  },
};

export const WithBackdrop: Story = {
  args: {
    dialogConfig: {
      ...Default.args?.dialogConfig,
      hasBackdrop: true,
    },
  },
};

export const AnimatedEntranceAndExit: Story = {
  args: {
    dialogConfig: {
      ...Default.args?.dialogConfig,
      enterAnimationDuration: 300, // milliseconds
      exitAnimationDuration: 200, // milliseconds
    },
  },
};

export const MaxDimensions: Story = {
  args: {
    dialogConfig: {
      ...Default.args?.dialogConfig,
      maxHeight: '80vh',
      maxWidth: '90vw',
    },
  },
};

export const MinDimensions: Story = {
  args: {
    dialogConfig: {
      ...Default.args?.dialogConfig,
      minHeight: '200px',
      minWidth: '300px',
    },
  },
};

export const DisableClose: Story = {
  args: {
    dialogConfig: {
      ...Default.args?.dialogConfig,
      disableClose: true,
    },
  },
};
