import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact.component';
import { AboutMeComponent } from './aboutme/aboutme.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'contact', component: ContactComponent }
];
