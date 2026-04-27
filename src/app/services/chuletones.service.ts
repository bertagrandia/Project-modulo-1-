import { Injectable, signal } from '@angular/core';
import { Chuleton } from '../models/chuleton.model';

@Injectable({ providedIn: 'root' })
export class ChuletonesService {

   private storageKey = 'chuletones';

   chuletones = signal<Chuleton[]>(this.load());
   count = signal<number>(this.load().length);

   private load(): Chuleton[] {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
   }

   private save(data: Chuleton[]) {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
   }

   add(chu: Chuleton) {
      const updated = [...this.chuletones(), chu];

      this.chuletones.set(updated);
      this.count.set(updated.length);

      this.save(updated);
   }
}