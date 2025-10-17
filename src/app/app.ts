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
    // Si l'outlet n'est pas activé, on remonte quand même en haut.
    if (!outlet?.isActivated) {
      if (typeof globalThis !== 'undefined' && 'window' in globalThis) {
        try {
          (globalThis as any).window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        } catch {
          // fallback for older browsers/environments
          (globalThis as any).window.scrollTo(0, 0);
        }
      }
      return 0;
    }

    // Toujours remonter en haut avant de renvoyer l'état d'animation
    if (typeof globalThis !== 'undefined' && 'window' in globalThis) {
      try {
        (globalThis as any).window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } catch {
        (globalThis as any).window.scrollTo(0, 0);
      }
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
