import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent {
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();

  technicalSkills: { name: string, percentage: number }[] = [{ name: '', percentage: 0 }];
  softSkills: { name: string, percentage: number }[] = [{ name: '', percentage: 0 }];

  sendFormData(): { technicalSkills: any, softSkills: any } {
    const technicalSkills: any = {};
    for (let i = 0; i < this.technicalSkills.length; i++) {
      technicalSkills[this.technicalSkills[i].name] = this.technicalSkills[i].percentage;
    }

    const softSkills: any = {};
    for (let i = 0; i < this.softSkills.length; i++) {
      softSkills[this.softSkills[i].name] = this.softSkills[i].percentage;
    }

    return { technicalSkills, softSkills };
  }
  addSkill(skills: { name: string, percentage: number }[]): void {
    skills.push({ name: '', percentage: 0 });
  }

  removeSkill(skills: { name: string, percentage: number }[], skill: { name: string, percentage: number }): void {
    const index = skills.indexOf(skill);
    if (index >= 0) {
      skills.splice(index, 1);
    }
  }
}
