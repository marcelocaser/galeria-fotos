import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css'],
})
export class GaleriaComponentComponent {
  titulo: string = 'Teste';
  pictures: string[] = ['']; 
}
