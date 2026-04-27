import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ChuletonesService } from '../../services/chuletones.service';
import { ChuletonesListComponent } from '../list/list';

@Component({
  selector: 'app-chuletones-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChuletonesListComponent],
  templateUrl: './form.html',
  styleUrls: ['./form.scss']
})
export class ChuletonesFormComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ChuletonesService
  ) {
    this.form = this.fb.group({
      tipo: [''],
      origen: [''],
      peso: [0],
      maduracion: [0],
      cantidad: [1]
    });
  }

  submit() {
    if (this.form.valid) {
      this.service.add(this.form.value as any);
      this.form.reset({ cantidad: 1 });
    }
  }
}