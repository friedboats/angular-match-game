import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-match-game';
  tiles: { id: number, title: string, frontImg: string, backImg: string }[] = [
    {
      id: null,
      title: 'Pony 1',
      frontImg: 'assets/images/castle.png',
      backImg: 'assets/images/pony-blue.png'

    },
    {
      id: null,
      title: 'Pony 2',
      frontImg: 'assets/images/castle.png',
      backImg: 'assets/images/pony-orange.png'
    },
    {
      id: null,
      title: 'Pony 3',
      frontImg: 'assets/images/castle.png',
      backImg: 'assets/images/pony-pink.png'
    },
    {
      id: null,
      title: 'Pony 4',
      frontImg: 'assets/images/castle.png',
      backImg: 'assets/images/pony-white.png'
    },
    {
      id: null,
      title: 'Pony 5',
      frontImg: 'assets/images/castle.png',
      backImg: 'assets/images/pony-yellow.png'
    }
  ]; 
}
