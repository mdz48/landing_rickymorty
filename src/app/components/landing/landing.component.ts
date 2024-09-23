import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  episodes = [
    {
      picture: "assets/landing/episodes/t7-e5-episode.png",
      title: 'T7:E7',
      text: 'Este episodio por si solo cierra la trama mas esperada por los fans de la serie.'
    },
    {
      picture: "assets/landing/episodes/t7-e10.png",
      title: 'T7:E10',
      text: 'El mejor episodio sobre los sentimientos de los protagonistas'
    },
    {
      picture: "assets/landing/episodes/t3-e1.png",
      title: 'T3:E1',
      text: 'Un episodio que engrandece a Rick y sus acciones.'
    }
  ]
}
