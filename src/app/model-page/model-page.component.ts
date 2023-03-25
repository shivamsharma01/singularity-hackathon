import { Component } from '@angular/core';

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.scss'],
})
export class ModelPageComponent {
  public onModelSelect(value: string) {
    // this.selectedModelName = null;
    // setTimeout(() => {
    //   this.selectedModelName = value;
    //   this.selectedDataset = null;
    //   this.imageSelectionObj = null;
    //   this.selectedRectangleObj = null;
    //   this.selectedkVal = 10;
    // }, 100);
  }
}
