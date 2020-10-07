import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css'],
})
export class GaleriaComponentComponent {
  currentPicture: number = 0;
  @Input() title: string;
  @Input() pictures: string[] = [''];

  nextPicture() {
    this.currentPicture++;
  }

  previousPicture() {
    this.currentPicture--;
  }

  firstPicture() {
    this.currentPicture = 0;
  }

  lastPicture() {
    this.currentPicture = this.pictures.length - 1;
  }

  validateNextAndLastPage(): boolean {
    return this.currentPicture === this.pictures.length - 1 || this.pictures.length === 0;
  }
}
