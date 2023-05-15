import { Component, Input, ViewChild , EventEmitter, Output, ElementRef} from '@angular/core';
// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { IntroductionComponent } from '../introduction/introduction.component';
import { TemoignagesComponent } from '../temoignages/temoignages.component';
import { TravauxComponent } from '../travaux/travaux.component';
import { CoordonneesComponent } from '../coordonnees/coordonnees.component';
import { CompetencesComponent } from '../competences/competences.component';
import { ResumeComponent } from '../resume/resume.component';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AfterViewInit } from '@angular/core';

// (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements AfterViewInit{
  
  formData: any = {};
  @Output() data = new EventEmitter<any>();
  constructor(private dataService: DataService,private router: Router,private elementRef: ElementRef) {
   }
   ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = "black";
        this.elementRef.nativeElement.ownerDocument
        .body.style.color = "white";

}
  goToPortfolio() {
    
  }
  @ViewChild(IntroductionComponent)
  introductionComponent!: IntroductionComponent;
  @ViewChild(ResumeComponent)
  ResumeComponent!: ResumeComponent;
  @ViewChild(TravauxComponent)
  travauxComponent!: TravauxComponent;
  @ViewChild(TemoignagesComponent)
  temoignagesComponent!: TemoignagesComponent;
  @ViewChild(CoordonneesComponent)
  coordonneesComponent!: CoordonneesComponent;
  @ViewChild(CompetencesComponent)
  competencesComponent!: CompetencesComponent;

  montrerTravaux : boolean = false;
  montrerCoordonnees : boolean = false;
  montrerTemoignages : boolean = false;
  montrerResume : boolean = false;
  montrerIntroduction : boolean = true;
  montrerGenerer : boolean = false;
  montrerCompetences : boolean = false;
  montrerSuivantButton : boolean= true;
 
 
  title: any;

 
  generatePdf() {
    this.formData = {...this.formData,...this.coordonneesComponent.sendFormData() };
    this.dataService.setFormData(this.formData);

    // (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

    // const documentDefinition = {
    //   content: [
    //     { text: 'Hello, PDF!', fontSize: 24 },
    //   ],
    // };
 
    // pdfMake.createPdf(documentDefinition).open();
    this.router.navigate(['/choice']);
  }
  onsubmit(formData: any) {
   
    console.log(formData); // Affichez les données soumises dans la console
  }

  showNext() {
    if (this.montrerIntroduction) {
      this.formData = {...this.introductionComponent.sendFormData() };
      console.log(this.formData);
      
      // this.introductionComponent.sendFormData();
      this.montrerIntroduction = false;
      this.montrerCoordonnees = true;
    } else if (this.montrerCoordonnees) {
      this.formData = { ...this.formData, ...this.coordonneesComponent.sendFormData()};
      console.log(this.formData);
      // this.coordonneesComponent.sendFormData();
      this.montrerCoordonnees = false;
      this.montrerCompetences = true;
    } else if (this.montrerCompetences) {
      this.formData = { ...this.formData, ... this.competencesComponent.sendFormData()};
      console.log(this.formData);
      // this.competencesComponent.sendFormData();
      this.montrerCompetences = false;
      this.montrerResume = true;
    } else if (this.montrerResume) {
      this.formData = { ...this.formData, ... this.ResumeComponent.sendFormData()};
      console.log(this.formData);
      // this.ResumeComponent.sendFormData();
      this.montrerResume = false;
      this.montrerTravaux = true;
    } else if (this.montrerTravaux) {
      this.formData = { ...this.formData, ...this.travauxComponent.sendFormData()};
      console.log(this.formData);
      // this.travauxComponent.sendFormData();ytu
      this.montrerTravaux = false;
      this.montrerTemoignages = true;
    } else if (this.montrerTemoignages) {
      this.formData = { ...this.formData, ...this.temoignagesComponent.sendFormData()};
      console.log(this.formData);
      // this.temoignagesComponent.sendFormData();
      this.montrerTemoignages=false ;
      this.montrerSuivantButton = false;
      this.montrerGenerer = true;
      this.dataService.setFormData(this.formData);
      this.router.navigate(['/choice']);
    }
  }

  // formData: any;
  // onIntroductionFormSubmit(data: any) {
  //   this.formData = { ...this.formData, ...data };
  // }
  // onTravauxFormSubmit(data: any) {
  //   this.formData = { ...this.formData, ...data };
  // }
  // onTemoignagesFormSubmit(data: any) {
  //   this.formData = { ...this.formData, ...data };
  // }
  // onCoordonneesFormSubmit(data: any) {
  //   this.formData = { ...this.formData, ...data };
  // }
  // onCompetencesFormSubmit(data: any) {
  //   this.formData = { ...this.formData, ...data };
  // }
}
