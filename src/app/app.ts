import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, transition, style, animate, group, query } from '@angular/animations';

const routeAnimations = trigger('routeAnimations', [
  transition(':increment', [
    group([
      query(':enter', [
        style({ position: 'absolute', top: 0, left: 0, width: '100%', transform: 'translateX(100%)', opacity: 0 }),
        animate('400ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ position: 'absolute', top: 0, left: 0, width: '100%', transform: 'translateX(0)', opacity: 1 }),
        animate('400ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ], { optional: true })
    ])
  ]),
  transition(':decrement', [
    group([
      query(':enter', [
        style({ position: 'absolute', top: 0, left: 0, width: '100%', transform: 'translateX(-100%)', opacity: 0 }),
        animate('400ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ position: 'absolute', top: 0, left: 0, width: '100%', transform: 'translateX(0)', opacity: 1 }),
        animate('400ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)', opacity: 0 }))
      ], { optional: true })
    ])
  ])
]);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [routeAnimations]
})
export class App {
  protected readonly title = signal('portfolio');

  getAnimationState(outlet: any): number {
    if (!outlet || !outlet.isActivated) {
      return 0;
    }
    const route = outlet.activatedRoute?.routeConfig?.path;
    switch (route) {
      case '': return 0; // Accueil
      case 'about': return 1; // À propos
      case 'projets': return 2;
      case 'contact': return 3;
      default: return 0;
    }
  }
}
