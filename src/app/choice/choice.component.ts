import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  constructor(private router: Router) {}

  selectTemplate1() {
    this.router.navigate(['/portfolio']);
  }

  selectTemplate2() {
    this.router.navigate(['/portfolio2']);
  }
}
