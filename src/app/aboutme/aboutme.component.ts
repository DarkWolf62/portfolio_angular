import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="aboutme-page-center">
      <div class="aboutme-card">
        <div class="aboutme-text">
          <h2>À propos de moi</h2>
          <p>
            Depuis toujours attiré par la logique et la création, je me suis naturellement orienté vers le développement
            informatique. Mon parcours à l’IUT de Lens m’a permis d’acquérir de solides compétences en conception et
            développement d’applications, que j’ai pu mettre en pratique à travers divers projets : un jeu mobile
            réalisé sous Godot, un réseau social développé avec Spring et Angular, ainsi qu’un progiciel de gestion
            intégré conçu en Go et gRPC.
            <br><br>
            Aujourd’hui, je souhaite continuer à progresser en tant que développeur, en contribuant à des projets
            techniques stimulants. Curieux, rigoureux et motivé, j’aime apprendre de nouvelles technologies et
            collaborer avec des équipes passionnées pour créer des solutions à la fois utiles et bien conçues.
          </p>
        </div>
        <div class="aboutme-image">
          <img src="/bureau_pc.png" alt="Photo de bureau avec pc"/>
        </div>
      </div>
    </div>
    <div class="aboutme-technos-card">
      <h3>Technologies utilisées</h3>
      <div class="aboutme-technos-scroll">
        <button class="aboutme-arrow left" (click)="scrollTechnos(-1)" aria-label="Précédent">
          &#8592;
        </button>
        <div class="aboutme-technos-list" #technosList>
          <div *ngFor="let tech of technos" class="aboutme-tech-card">
            <a [href]="tech.link" target="_blank" rel="noopener noreferrer">
              <img [src]="tech.logo" [alt]="tech.name" class="aboutme-tech-logo" />
              <div class="aboutme-tech-name">{{ tech.name }}</div>
            </a>
          </div>
        </div>
        <button class="aboutme-arrow right" (click)="scrollTechnos(1)" aria-label="Suivant">
          &#8594;
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./aboutme.component.css']
})
export class AboutMeComponent {
  technos: any[] = [];
  @ViewChild('technosList') technosList!: ElementRef<HTMLDivElement>;

  constructor(private http: HttpClient) {
    this.http.get<any[]>('/technos.json').subscribe(data => {
      this.technos = data;
    });
  }

  scrollTechnos(direction: number) {
    const el = this.technosList?.nativeElement;
    if (el) {
      const scrollAmount = el.offsetWidth * 0.7;
      const maxScroll = el.scrollWidth - el.offsetWidth;
      if (direction > 0) {
        // Flèche droite
        if (Math.abs(el.scrollLeft - maxScroll) < 5) {
          // On est à la fin, on revient au début
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        // Flèche gauche
        if (el.scrollLeft <= 5) {
          // On est au début, on va à la fin
          el.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  }
}
