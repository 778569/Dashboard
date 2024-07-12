import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host:{
    class:'control'
  }
})
export class ControlComponent {
@Input() title!: string


@HostListener('click') onClick(){
  console.log('Clicked')
}
}
