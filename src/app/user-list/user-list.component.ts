import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/services/user.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users!: string[];
  public subscription?: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.users$.subscribe(
      (users: string[]) => (this.users = users)
    );
    console.log(this.users);
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }
}
