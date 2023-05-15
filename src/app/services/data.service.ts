import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  formData: any;
  constructor() {}
  getFormData() {
    return this.formData;
  }
  setFormData(formData: any) {
    this.formData = formData;
  }
}
