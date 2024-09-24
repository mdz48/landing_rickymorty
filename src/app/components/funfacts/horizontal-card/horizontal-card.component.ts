import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-card.component.html',
  styleUrl: './horizontal-card.component.css'
})
export class HorizontalCardComponent {
  @Input() layedCard = { img: '', title: '', text: ''}
}
