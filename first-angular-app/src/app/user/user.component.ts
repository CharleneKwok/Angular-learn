import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // not add anything type, then it will be pubilc by default
  // protected, public, private
  selectedUser = DUMMY_USERS[0]
}
