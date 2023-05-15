import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-portfolio2',
  templateUrl: './portfolio2.component.html',
  styleUrls: ['./portfolio2.component.css',
  "../../assets/vendor/bootstrap/css/bootstrap.min.css",
"../../assets/vendor/boxicons/css/boxicons.min.css",
"../../assets/vendor/glightbox/css/glightbox.min.css",
"../../assets/vendor/swiper/swiper-bundle.min.css",
"../../assets/css/style2.css",
]
})
export class Portfolio2Component {
  constructor(private dataService: DataService) {}
  formData: any;
     photoUrl: string;
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

}
