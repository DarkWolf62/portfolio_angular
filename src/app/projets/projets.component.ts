import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/projets.json').subscribe(data => {
      this.projets = data;
    });
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
