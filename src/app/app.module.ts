import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { FirstTemplateComponent } from './first-template/first-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Container1Component } from './container1/container1.component';
import { AuthentificateComponent } from './authentificate/authentificate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PreviewCvComponent } from './preview-cv/preview-cv.component';
import { ROUTING } from './app.routing';
import { Template2Component } from './template2/template2.component';
import { CreatecvComponent } from './createcv/createcv.component';
import { ChoiceComponent } from './choice/choice.component';
import { CompetencesComponent } from './competences/competences.component';
import { CoordonneesComponent } from './coordonnees/coordonnees.component';
import { FormComponent } from './form/form.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Portfolio2Component } from './portfolio2/portfolio2.component';
import { ResumeComponent } from './resume/resume.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';
import { TravauxComponent } from './travaux/travaux.component';
import { Container2Component } from './container2/container2.component';

 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    EditTemplateComponent,
    FirstTemplateComponent,
    Container1Component,
    AuthentificateComponent,
    NavbarComponent,
    PreviewCvComponent,
    Template2Component,
    CreatecvComponent,
    SigninComponent,
    ChoiceComponent,
    CompetencesComponent,
    CoordonneesComponent,
    FormComponent,
    IntroductionComponent,
    PortfolioComponent,
    Portfolio2Component,
    ResumeComponent,
    TemoignagesComponent,
    TravauxComponent,
    Container2Component
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTING,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
