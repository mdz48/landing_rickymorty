import { Component } from '@angular/core';
import { HorizontalCardComponent } from './horizontal-card/horizontal-card.component';
import { CommonModule } from '@angular/common';
import { CharacacterComponent } from "./characacter/characacter.component";
import { CardComponent } from "../landing/card/card.component";

@Component({
  selector: 'app-funfacts',
  standalone: true,
  imports: [HorizontalCardComponent, CommonModule, CharacacterComponent, CardComponent],
  templateUrl: './funfacts.component.html',
  styleUrl: './funfacts.component.css'
})
export class FunfactsComponent {
  layedCards = [
    {
      picture: 'assets/funfacts/dimensions/dimension35.png',
      title: 'Dimensión 35-C',
      text: 'La Dimensión 35-C consiste en una versión alternativa y muy extraña de la Tierra que está dirigida por innumerables alienígenas. Esta tiene una única aparición en la serie, siendo tambien la primera dimensión diferente a la tierra que Rick y Morty visitan.',
    },
    {
      picture: 'assets/funfacts/dimensions/dimensionPara.png',
      title: 'Dimensión Paramiano',
      text: 'La dimensión Paramiano es la dimensión de reemplazo a la que se muda la familia Smith después de que el Sr. Frundles infectara la dimensión C-131. La principal diferencia es que todos pronuncian la palabra "parmesano" como "para-mi-ano" (en inglés) "par-mee-zee-an".',
    }
  ]

  characters = [
    {
      picture: 'assets/funfacts/characters/c-137.jpeg',
      title: 'Rick',
      text : 'Tiene miedo a los piratas, Está basado en el Doc Emmett Brown de la serie de películas "Back to the Future"'
    },
    {
      picture: 'assets/funfacts/characters/morty.jpg',
      title: 'Morty Smith (Prime)',
      text : 'Su actor de voz es el mismo que interpreta a Rick, Se autodenomina de de la dimensión C-137 (Misma que la de Rick).'
    },
    {
      picture: 'assets/funfacts/characters/godJerry.png',
      title: 'God Jerry (X - 198)',
      text : 'En su dimensión sus hijos mueren, Se hizo omnisciente de todas las vidas de los jerrys, Su único deseo fue acabar con todos los Jerrys.'
    },
    {
      picture: 'assets/funfacts/characters/doofusJerry.png',
      title: 'Doofus Jerry',
      text : 'En su dimensión es alguien exitoso pero sin familia, Derrotó al Rick C-137, Murió debido a un gusano gigante. '
    },  
    {
      picture: 'assets/funfacts/characters/evil.webp',
      title: 'Evil Morty',
      text : 'Su apodo proviene directamente por los fans, Es de la Dimension 79⊢⊇V, Es el unico morty que pudo escapar de la curva central infinita'
    },
    {
      picture: 'assets/funfacts/characters/MortySmith304X.webp',
      title: 'Morty Smith (304-X)',
      text : 'En su dimensión, Rick Sanchez no existe, Es un morty genio, pudiendo ver las demas dimensiones pero no pudiendo viajar entre ellas'
    },
  ]
}
