import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DOCUMENT as DOC_TOKEN } from '@angular/common';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projets: any[] = [];
  selectedProjet: any = null;
  isModalOpen: boolean = false;
  baseHref = '/';
  isBrowser = false;

  constructor(private http: HttpClient, @Inject(DOC_TOKEN) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    try {
      const baseEl = this.document?.querySelector('base');
      this.baseHref = baseEl?.getAttribute('href') ?? '/';
    } catch (e) {
      this.baseHref = '/';
    }

    this.isBrowser = isPlatformBrowser(this.platformId);
    // N'effectuer la requête que côté client pour éviter les erreurs lors du prerender
    if (this.isBrowser) {
      this.http.get<any[]>(this.baseHref + 'projets.json').subscribe(data => {
        this.projets = data;
      });
    }
  }

  openModal(projet: any) {
    this.selectedProjet = projet;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProjet = null;
  }
}
