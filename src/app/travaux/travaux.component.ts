import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-travaux',
  templateUrl: './travaux.component.html',
  styleUrls: ['./travaux.component.css']
})
export class TravauxComponent {
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();
  projects = [
    { title: '', description: '', type: '', link: '', fileData: '' }
  ];

  addProject() {
    const project = {
      title: '',
      description: '',
      type: '',
      link: '',
      fileData: ''
    };
    this.projects.push(project);
  }

  onFileSelected(event: any, index: number) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result as string;
      console.log(base64);
      
      this.projects[index].fileData = base64;
    };
  }

  sendFormData() {
    return {
      projects: this.projects
    };
  }
}
