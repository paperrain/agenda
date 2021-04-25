import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/app.component';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
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

  contactEdited = false;

  editUser() {
    this.userService.editUserId(this.user);
    this.contactEdited = true;
  }

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    this.userService
      .getUserId(this.route.snapshot.paramMap.get('id') as string)
      .then((r) => (this.user = r));
  }

  ngOnInit(): void {}
}
