import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthentificateComponent } from "./authentificate/authentificate.component";
import { SigninComponent } from "./signin/signin.component";
import { Container1Component } from "./container1/container1.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
import {FormComponent} from './form/form.component';
import { ChoiceComponent } from './choice/choice.component';
import { Portfolio2Component } from './portfolio2/portfolio2.component';
import { CreatecvComponent } from "./createcv/createcv.component";
import { PreviewCvComponent } from "./preview-cv/preview-cv.component";
import { Container2Component } from "./container2/container2.component";

const routes: Routes = [
    { path: '', component: AuthentificateComponent },
    { path: 'home', component: HomeComponent },
    { path: 'template1', component: Container1Component },
    { path: 'CreateCv', component: CreatecvComponent },
    { path: 'login', component: SigninComponent },
    { path: 'register', component: AuthentificateComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'previewtemp1', component: PreviewCvComponent },
    { path: 'portfolioform', component: FormComponent },
    { path: 'choice', component: ChoiceComponent },
    { path: 'template2', component: Container2Component },
    { path: 'portfolio2', component: Portfolio2Component },
   
  ];
  export const ROUTING = RouterModule.forRoot(routes);