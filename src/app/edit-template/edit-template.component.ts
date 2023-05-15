import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Education } from '../Interfaces/Education';
import { Skill } from '../Interfaces/Skills';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialLink } from '../Interfaces/Social_Links';
import { Experiences } from '../Interfaces/Experiences';
@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent {
  fonts: string[] = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New'];
  selectedFont: string = 'Arial';
  educationForm!: FormGroup;
  education!: Education ; 
  SkillsForm!: FormGroup;
  Skill!:Skill;
  Social_Link!:SocialLink;  
  SocialForm!: FormGroup;
  Experiences!:Experiences
  ExperienceForm!:FormGroup;
  defaultname:string='Yosr';
  selectedcolor='#B2D0DF'

  ngOnInit(): void {
    this.educationForm = this.fb.group({
      fieldOfStudy: ['', Validators.required],
      degree: ['', Validators.required],
      school: ['', Validators.required],
      fromYear: ['', Validators.required],
      toYear: ['']
   
    });
       //skills : 
       this.SkillsForm = this.fb.group({
       name: ['', Validators.required],
       percentage: ['', Validators.required],  

      })
      //Social_link : 
      this.SocialForm = this.fb.group({
        name: ['', Validators.required],
        link: ['', Validators.required],  
        icon: ['', Validators.required],  
       })
       this.ExperienceForm = this.fb.group({
       Title: ['', Validators.required],
       Company: ['', Validators.required],  
       StartDate: ['', Validators.required],  
       EndDate: ['', Validators.required],  
       Description: ['', Validators.required],  

       })
    
  }
constructor(public CvData : UserDataService , private fb: FormBuilder) {
  this.CvData.educations.push({
    id: 1,
    fieldOfStudy: '',
    degree: '',
    school: '',
    fromYear: '',
    toYear: ''
  });
  //skills
  this.CvData.skills.push({
  name:'',
  percentage: 0

  });
    //Social_Links
    this.CvData.SocialLinks.push({
      name:'',
      link: '',
      icon: ''
    
      });
      //Experiences
      this.CvData.Experience.push({
        Title:'',
        Company: '',
        StartDate: '',
        EndDate:'',
        Description:''

      
        });

}
addExperience() {
  this.CvData.addExprience(this.ExperienceForm.value);
  this.ExperienceForm.reset();
  console.log(this.ExperienceForm)
}
addEducation() {
  this.CvData.addEducation(this.educationForm.value);
  this.educationForm.reset();
  console.log(this.educationForm)
}

removeEducation(education: Education) {
  const index = this.CvData.educations.indexOf(education);
  console.log(index)
  
    this.CvData.educations.splice(index, 1);
    
  
  console.log('removed ... ')
}
removeExperience(Experience:Experiences){
  const index = this.CvData.Experience.indexOf(Experience);
  console.log(index)
  
    this.CvData.Experience.splice(index, 1);
    
  
  console.log('removed ... ')

}
onImageChange(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    this.CvData.image = reader.result as string;
    //this.cd.detectChanges(); // detect changes after setting the image
  };
}
removeImage() {
  this.CvData.image = '';
}
addskill() {
  this.CvData.addSkill(this.SkillsForm.value);

  console.log(this.SkillsForm)
}
addLinks() {
  this.CvData.addLink(this.SocialForm.value);

}

//sociallink upload 
onImageChangeskill(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const imageUrl = reader.result as string;
    this.CvData.SocialLinks.forEach((link) => {
      link.icon = imageUrl;
    });
    //this.cd.detectChanges(); // detect changes after setting the image
  };
}

changeFont() {
  this.CvData.selectedFont=this.selectedFont
}


}
