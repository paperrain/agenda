import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/app.component';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  user: Usuarios = {
    id: 0,
    name: '',
    alias: '',
    phone: '',
    email: '',
    location: '',
    photo: '',
    contacted: false,
  };

  // variables campos
  validName = true;
  validMail = true;
  validPhone = true;
  validLocation = false;

  contactAdded = false;

  onCheckName() {}

  onCheckMail() {}

  onCheckPhone() {}

  onCheckLocation() {}

  addUser() {
    this.userService.addUser(this.user);
    this.contactAdded = true;
  }

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}
}
