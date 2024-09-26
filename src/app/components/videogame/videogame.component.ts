import { Component } from '@angular/core';
import { GifComponent } from "./gif/gif.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videogame',
  standalone: true,
  imports: [GifComponent, CommonModule],
  templateUrl: './videogame.component.html',
  styleUrl: './videogame.component.css'
})
export class VideogameComponent {
  videos = [
    {
      media: 'assets/videogame/WubaLuba.gif',
      title: 'WubaLubaDubDuuub!'
    },
    {
      media: 'assets/videogame/ohjeez.gif',
      title: 'Oh Jeez Rick'
    },
    {
      media: 'assets/videogame/summer.gif',
      title: 'F@ck you Summer!'
    },
  ]
}
