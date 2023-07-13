import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[] | null> = new BehaviorSubject<
    string[] | null
  >(null);

  private users: string[] | null = [];

  constructor() {}

  public addUser(user: string): void {
    this.users.push(user);
    console.log(this.users);

    this.users$.next(this.users);
    console.log(this.users$);
  }
}
