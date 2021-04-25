import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/app.component';
import { UsersService } from 'src/app/users.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
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

  contactDeleted = false;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    this.userService
      .getUserId(this.route.snapshot.paramMap.get('id') as string)
      .then((r) => (this.user = r));
  }

  removeUser() {
    this.userService.deleteUserId(
      this.route.snapshot.paramMap.get('id') as string
    );
    this.contactDeleted = true;
  }

  ngOnInit(): void {}
}
