import { Injectable } from '@angular/core';
import { Education  } from './Interfaces/Education';
import { Skill } from './Interfaces/Skills';
import { SocialLink } from './Interfaces/Social_Links';
import { Experiences } from './Interfaces/Experiences';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  educations: Education[] = [];
   selectedFont: string = '';
constructor() {
  this.selectedColor = '#ffffff';
}
//personal info 
name : string ='';
job:string='';
selectedColor='#B2D0DF';
adress:string='';
email:string='';
websitelink:string='';
phonenumber:string='';
image='';
Bio:string='';
Nationality:string='';
Gender:string='';

// Education section 
addEducation(education: Education): void {
  this.educations.push(education);
}

// Skills section 
skills: Skill[] = [];

addSkill(skill: Skill) {
  this.skills.push(skill);
}
//Social_Link 
SocialLinks: SocialLink[] = [];
addLink(Link: SocialLink) {
  this.SocialLinks.push(Link);
}
//Experience section 
Experience: Experiences[] = [];

addExprience(Experience: Experiences) {
  this.Experience.push(Experience);
}
}
