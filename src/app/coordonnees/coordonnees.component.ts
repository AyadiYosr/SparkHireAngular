import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coordonnees',
  templateUrl: './coordonnees.component.html',
  styleUrls: ['./coordonnees.component.css']
})
export class CoordonneesComponent {
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();
  email = '';
  phone = '';
  address = '';
  logo:  {
    name: string;
    type: string;
    size: number;
  } | undefined;
  color = '';
  
  sendFormData() {
    const formValue = {
      email: this.email,
      phone: this.phone,
      address: this.address,
      logo: this.logo,
      color: this.color
    };
    // console.log(formValue);
    
    return formValue;
  }
}
