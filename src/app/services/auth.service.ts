import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

   private readonly userKey = 'user';
   private readonly currentUserKey = 'currentUser';

   register(user: any) {
      localStorage.setItem(this.userKey, JSON.stringify(user));
   }

   login(email: string, password: string): boolean {
      const user = this.getRegisteredUser();

      if (!user) return false;

      const valid = user.email === email && user.password === password;
      if (valid) {
         localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      }

      return valid;
   }

   getRegisteredUser(): any {
      return JSON.parse(localStorage.getItem(this.userKey) || 'null');
   }

   getCurrentUser(): any {
      return JSON.parse(localStorage.getItem(this.currentUserKey) || 'null');
   }

   isLoggedIn(): boolean {
      return !!this.getCurrentUser();
   }

   logout() {
      localStorage.removeItem(this.currentUserKey);
   }
}