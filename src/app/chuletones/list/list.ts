import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChuletonesService } from '../../services/chuletones.service';

@Component({
  selector: 'app-chuletones-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class ChuletonesListComponent {

  constructor(public service: ChuletonesService) { }
}