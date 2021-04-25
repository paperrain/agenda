import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'agenda';
}

export interface Usuarios {
  id: number;
  name: string;
  phone: string;
  email: string;
  location: string;
  alias: string;
  photo: string;
  contacted: boolean;
}
