import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [
    '../../assets/css/style.css',
    '../../assets/vendor/aos/aos.css',
    '../../assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '../../assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../assets/vendor/boxicons/css/boxicons.min.css',
    '../../assets/vendor/glightbox/css/glightbox.min.css',
    '../../assets/vendor/swiper/swiper-bundle.min.css'],
})
export class PortfolioComponent {
  formData: any;
  photoUrl: string;

    // photoUrl = this.formData.photoDeProfil;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // const script = this.renderer.createElement('script');
    // script.type = 'text/javascript';
    // script.src = 'assets/js/main.js';
    // script.addEventListener('load', () => {
    //     console.log('Script loaded successfully');
    //   });
    
    // this.renderer.appendChild(this.document.head, script);
    this.formData = this.dataService.getFormData();
    this.photoUrl = this.formData.photoDeProfil;
    console.log(this.formData['name']);
  }
  getTechnicalSkills() {
    return this.formData.technicalSkills;
  }
}
