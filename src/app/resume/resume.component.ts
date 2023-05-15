import { Component , EventEmitter, Output} from '@angular/core';
interface Education {
  title: string;
  address: string;
  description: string;
}

interface Experience {
  title: string;
  address: string;
  description: string;
}
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();
  summary: string = '';
  educationList: Education[] = [{ title: '', address: '', description: '' }];
  experienceList: Experience[] = [{ title: '', address: '', description: '' }];
  sendFormData() {
    const formData = {
      summary: this.summary,
      education: this.educationList,
      experience: this.experienceList
    };
     console.log(formData);
     
     return{ formData };
  }
  addEducation(): void {
    this.educationList.push({ title: '', address: '', description: '' });
  }

  removeEducation(index: number): void {
    this.educationList.splice(index, 1);
  }

  addExperience(): void {
    this.experienceList.push({ title: '', address: '', description: '' });
  }

  removeExperience(index: number): void {
    this.experienceList.splice(index, 1);
  }
}
