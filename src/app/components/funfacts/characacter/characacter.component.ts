import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characacter',
  standalone: true,
  imports: [],
  templateUrl: './characacter.component.html',
  styleUrl: './characacter.component.css'
})
export class CharacacterComponent {
  @Input() character = {picture: '', name: '', data: ''}
}
