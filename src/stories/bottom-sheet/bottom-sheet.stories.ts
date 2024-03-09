import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Injector, importProvidersFrom } from '@angular/core';
import { injectInjectorToProps } from '../../../.storybook/inject-injector-to-props.decorator';
import { MatButtonModule } from '@angular/material/button';
import {
  MatBottomSheetModule,
  MatBottomSheet,
} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from 'src/app/bottom-sheet/bottom-sheet.component';

const meta: Meta<MatBottomSheet & { bottomSheetConfig: object }> = {
  title: 'Components/BottomSheet',
  component: MatBottomSheet,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [MatBottomSheetModule, MatButtonModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(MatBottomSheetModule)],
    }),
    injectInjectorToProps(),
  ],
  render: (args: MatBottomSheet & { bottomSheetConfig: object }) => ({
    props: {
      ...args,
      openBottomSheet: (injector: Injector) => {
        injector
          .get(MatBottomSheet)
          .open(BottomSheetComponent, args.bottomSheetConfig);
      },
    },
    template: `
     <button mat-raised-button (click)="openBottomSheet(injector)">Open bottom sheet</button>
    `,
  }),
};
export default meta;
type Story = StoryObj<MatBottomSheet & { bottomSheetConfig: object }>;

export const DefaultBottomSheet: Story = {
  args: {
    bottomSheetConfig: {
      ariaDescribedBy: 'Storybook BottomSheet',
      ariaLabel: 'Storybook BottomSheet',
      ariaModal: false,
      autoFocus: false,
      backdropClass: '',
      closeOnNavigation: false,
      data: null,
      direction: 'ltr', // Assuming LTR as default; could be 'rtl' for right-to-left languages
      disableClose: false,
      hasBackdrop: true, // Bottom sheets typically have a backdrop
      panelClass: '',
      restoreFocus: true,
    },
  },
};

export const HeightAndWidthBottomSheet: Story = {
  args: {
    bottomSheetConfig: {
      ...DefaultBottomSheet.args?.bottomSheetConfig,
      height: '500px',
      width: '350px',
    },
  },
};

export const FullScreenBottomSheet: Story = {
  args: {
    bottomSheetConfig: {
      ...DefaultBottomSheet.args?.bottomSheetConfig,
      height: '100vh',
      width: '100vw',
    },
  },
};

export const DisableCloseOnBackdropClick: Story = {
  args: {
    bottomSheetConfig: {
      ...DefaultBottomSheet.args?.bottomSheetConfig,
      disableClose: true,
    },
  },
};

export const DirectionalContent: Story = {
  args: {
    bottomSheetConfig: {
      ...DefaultBottomSheet.args?.bottomSheetConfig,
      direction: 'rtl',
    },
  },
};

export const WithInjectedData: Story = {
  args: {
    bottomSheetConfig: {
      ...DefaultBottomSheet.args?.bottomSheetConfig,
      data: { message: 'Hello from the parent component!' },
    },
  },
};
