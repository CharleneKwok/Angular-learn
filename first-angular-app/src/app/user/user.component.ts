import { Component, signal } from '@angular/core';
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
  /** use zonejs to check and update all the components
   selectedUser = DUMMY_USERS[0]
 
   get imagePath () {
     return 'assets/users/' + this.selectedUser.avatar;
   }
 
   onSelectUser () {
     alert("first")
     // use zone.js to detect all the possible changes on ui
     this.selectedUser = DUMMY_USERS[1];
   }
  
  */
  //use signal
  selectedUser = signal(DUMMY_USERS[0]);

  get imagePath() {
    return 'assets/users/' + this.selectedUser().avatar;
  }

  onSelectUser() {
    alert('first');
    // use zone.js to detect all the possible changes on ui
    this.selectedUser.set(DUMMY_USERS[1]);
  }
}
