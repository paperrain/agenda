import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/app.component';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  users: Usuarios[] = [];

  constructor(private userService: UsersService) {
    this.userService.getAllUsers().then((r) => (this.users = r));
  }

  ngOnInit(): void {}
}
