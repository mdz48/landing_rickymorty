import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gif',
  standalone: true,
  imports: [],
  templateUrl: './gif.component.html',
  styleUrl: './gif.component.css'
})
export class GifComponent {
  @Input() video = {media: '', title: ''};
  
}
