import { Component } from '@angular/core';
import { Header } from './models/header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appGames';

  header: Header = {
    title: "Jueguitos",
    items: [
      {
        name: "item1",
        href: "#asdf",
        isDropdown: true,
        options: [
          {
            name: "opcion 1",
            href: "ahsd"
          },
          {
            name: "opcion 2",
            href: "ahsd"
          }
        ]
      },
      {
        name: "item2",
        href: "#2",
        isDropdown: false,
        options: [

        ]
      }
    ]
  }
}
