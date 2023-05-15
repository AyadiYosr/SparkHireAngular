import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css']
})
export class Template2Component {
  selectedColor: string;
  selectedFont: string = '';
  constructor(public cvData:UserDataService) {
    this.selectedColor = '#fff'; // Default color
    
  }
  ngOnInit() {
    this.selectedColor = this.cvData.selectedColor // Get the color from the shared service
    
  }
  
  changeColor() {
    // Handle the color change logic here
    const newColor = this.cvData.selectedColor; // Get the new color from the color picker or any other source
    this.selectedColor = newColor;
   
  }
  changeFont() {
   return this.selectedFont = this.cvData.selectedFont;
}}

