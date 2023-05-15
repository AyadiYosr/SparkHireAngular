import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-temoignages',
  templateUrl: './temoignages.component.html',
  styleUrls: ['./temoignages.component.css']
})
export class TemoignagesComponent {
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();
  testimonials = [{ name: '', position: '', company: '', text: '', file: '' }];

  addTestimonial() {
    const testimonial = {
      name: '',
      position: '',
      company: '',
      text: '',
      file: ''
    };
    this.testimonials.push(testimonial);
  }

  sendFormData() {
    return {
      testimonials: this.testimonials
    };
  }

  onFileSelected(event: any, index: number) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result as string;
      this.testimonials[index].file = base64;
    };
  }
}
