import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  template: `
    <div class="accueil-container">
      <img ngSrc="profil.png" alt="Photo de profil" class="profil-img" height="3162" width="3162"/>
      <div class="btn-group">
        <a routerLink="about" class="accueil-btn">En savoir plus</a>
        <a routerLink="projets" class="accueil-btn">Mes projets</a>
      </div>
      <a routerLink="contact" class="accueil-btn contact-btn">Me contacter</a>
    </div>
  `,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {}
