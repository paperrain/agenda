import { Injectable } from '@angular/core';
import axios from 'axios';
import { Usuarios } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getAllUsers() {
    return axios.get('http://localhost:3000/users').then((r) => r.data);
  }

  getUserId(id: string) {
    return axios.get('http://localhost:3000/users/' + id).then((r) => r.data);
  }

  addUser(user: Usuarios) {
    axios.post('http://localhost:3000/users', {
      name: user.name,
      phone: user.phone,
      email: user.email,
      alias: user.alias,
      location: user.location,
      photo: user.photo,
      contacted: false,
    });
  }

  editUserId(user: Usuarios) {
    axios.put('http://localhost:3000/users/' + user.id, {
      name: user.name,
      phone: user.phone,
      email: user.email,
      alias: user.alias,
      location: user.location,
      photo: user.photo,
      contacted: false,
    });
  }

  deleteUserId(id: string) {
    axios.delete('http://localhost:3000/users/' + id);
  }
}
