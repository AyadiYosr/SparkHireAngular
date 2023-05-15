import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  imageUrl: string='';
  resultUrl: string='';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
    }
  }

  removeBackground(): void {
    const formData = new FormData();
    formData.append('image_file', this.imageUrl);
    const headers = new HttpHeaders();
    headers.append('Yosr_key', 'bV7inyzyXqqk2UfMQ72ccwFC');
    const params = new HttpParams().set('size', 'auto');
    const apiUrl = 'https://api.remove.bg/v1.0';
    this.http.post(apiUrl, formData, { headers, params, responseType: 'blob' }).subscribe(
      (response: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(response);
        reader.onload = () => {
          this.resultUrl = reader.result as string;
        };
      },
      error => {
        console.log(error);
      }
    );
  }
}

