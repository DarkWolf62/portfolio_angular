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
  // Mémorise le dernier état d'animation pour ne scroller que lors d'un changement de route
  private lastRouteState: number | null = null;

  getAnimationState(outlet: any): number {
    // Si l'outlet n'est pas activé, retourner 0 sans scroller
    if (!outlet?.isActivated) {
      return 0;
    }

    const route = outlet.activatedRoute?.routeConfig?.path;
    let state: number;
    switch (route) {
      case '': state = 0; break; // Accueil
      case 'about': state = 1; break; // À propos
      case 'projets': state = 2; break;
      case 'contact': state = 3; break;
      default: state = 0; break;
    }

    // Si l'état de route a changé, on remonte en haut une seule fois
    if (this.lastRouteState !== state) {
      this.lastRouteState = state;
      if (typeof globalThis !== 'undefined' && 'window' in globalThis) {
        try {
          (globalThis as any).window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        } catch {
          (globalThis as any).window.scrollTo(0, 0);
        }
      }
    }

    return state;
  }
}
