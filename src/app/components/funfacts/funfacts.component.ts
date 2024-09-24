import { Component } from '@angular/core';
import { HorizontalCardComponent } from './horizontal-card/horizontal-card.component';

@Component({
  selector: 'app-funfacts',
  standalone: true,
  imports: [HorizontalCardComponent],
  templateUrl: './funfacts.component.html',
  styleUrl: './funfacts.component.css'
})
export class FunfactsComponent {
  layedCards = [
    {
      picture: 'assets/landing/episodes/t3-e1.png',
      title: 'Dimensión 35-C',
      text: 'La Dimensión 35-C consiste en una versión alternativa y muy extraña de la Tierra que está dirigida por innumerables alienígenas. Esta tiene una única aparición en la serie, siendo tambien la primera dimensión diferente a la tierra que Rick y Morty visitan.0',
    },
    {
      picture: 'assets/landing/episodes/t7-e5.png',
      title: 'Dimensión Paramiano',
      text: 'La dimensión Paramiano es la dimensión de reemplazo a la que se muda la familia Smith después de que el Sr. Frundles infectara la dimensión C-131. La principal diferencia es que todos pronuncian la palabra "parmesano" como "para-mi-ano" (en inglés) "par-mee-zee-an".',
    }
  ]
}
