import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.sass'
})
export class BottomSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
