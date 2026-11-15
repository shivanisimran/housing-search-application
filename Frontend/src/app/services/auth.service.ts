import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly currentUser = signal<string | null>(localStorage.getItem('token'));

  setToken(userName: string): void {
    localStorage.setItem('token', userName);
    this.currentUser.set(userName);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUser.set(null);
  }

authUser(user: { userName: string; password: string }) {
   type StoredUser = Record<string, string | undefined>;
   const users = JSON.parse(localStorage.getItem('Users') || '[]') as StoredUser[];
   const normalizedUsers: StoredUser[] = users.map(({ username, ...savedUser }) => ({
     ...savedUser,
     userName: savedUser['userName'] || username
   }));

   if (users.some((savedUser) => !savedUser['userName'] && savedUser['username'])) {
     localStorage.setItem('Users', JSON.stringify(normalizedUsers));
   }

   return normalizedUsers.find((savedUser) =>
     savedUser['userName'] === user.userName && savedUser['password'] === user.password
   );
}

}
