import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  onSubmit() {
    throw new Error('Method not implemented.');
  }
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();
  name: string ='';
  job: string = '';
  parcours: string='';
  education: string='';
  experience: string='';
  resume: {
    name: string;
    type: string;
    size: number;
  } | undefined;
  dob: Date ;
  website: string='' ;
  age: number ;
  degree: string='' ;
  freelance: string='' ;
  photoDeProfil: string='';
  sendFormData() {
    const data = {
      name: this.name,
      job: this.job,
      parcours: this.parcours,
      education: this.education,
      experience: this.experience,
      resume: this.resume,
      dob: this.dob,
      website: this.website,
      age: this.age,
      degree: this.degree,
      freelance: this.freelance,
      photoDeProfil: this.photoDeProfil

    };
    // console.log(data);
  
    return data;
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result as string;
      console.log(base64);
      this.photoDeProfil=base64;
    };
  }
}
