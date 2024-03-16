import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Injector, importProvidersFrom } from '@angular/core';
import { injectInjectorToProps } from '../../../.storybook/inject-injector-to-props.decorator';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

const meta: Meta<MatSnackBar & { snackbarConfig: object }> = {
  title: 'Components/Snackbar',
  component: MatSnackBar,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [MatSnackBarModule, MatButtonModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(MatSnackBarModule)],
    }),
    injectInjectorToProps(),
  ],
  render: ({ snackbarConfig, ...args }) => ({
    props: {
      ...args,
      openSnackBar: (injector: Injector) => {
        injector
          .get(MatSnackBar)
          .openFromComponent(SnackbarComponent, snackbarConfig);
      },
    },
    template: `
     <button mat-raised-button (click)="openSnackBar(injector)">Open snackbar</button>
    `,
  }),
};
export default meta;

type Story = StoryObj<MatSnackBar & { snackbarConfig: object }>;

export const Basic: Story = {
  args: {
    snackbarConfig: {
      duration: 5000,
      announcementMessage: 'snackbar',
      data: null,
      direction: '',
      horizontalPosition: 'center',
      panelClass: '',
      politeness: '',
      verticalPosition: 'bottom',
    },
  },
};

export const HorizontalPositionStart: Story = {
  args: {
    snackbarConfig: {
      ...Basic.args?.snackbarConfig,
      horizontalPosition: 'start',
    },
  },
};

export const HorizontalPositionEnd: Story = {
  args: {
    snackbarConfig: {
      ...Basic.args?.snackbarConfig,
      horizontalPosition: 'end',
    },
  },
};
export const HorizontalPositionLeft: Story = {
  args: {
    snackbarConfig: {
      ...Basic.args?.snackbarConfig,
      horizontalPosition: 'left',
    },
  },
};
export const HorizontalPositionRight: Story = {
  args: {
    snackbarConfig: {
      ...Basic.args?.snackbarConfig,
      horizontalPosition: 'right',
    },
  },
};

export const VerticalPositionTop: Story = {
  args: {
    snackbarConfig: {
      ...Basic.args?.snackbarConfig,
      verticalPosition: 'top',
    },
  },
};