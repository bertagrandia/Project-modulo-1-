import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent implements OnInit {

  form: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: [''],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  submit() {

    const { email, password } = this.form.value;

    this.auth.register(email, password)
      .then(() => {
        alert('Registro correcto');
        this.form.reset();
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });

  }
}