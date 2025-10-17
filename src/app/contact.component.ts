import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject as _Inject } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="contact-container">
      <div class="contact-intro">Pour me contacter :</div>
      <a href="mailto:nicolasnourry61@gmail.com" class="contact-mail">
        <img class="icon" [src]="baseHref + 'logo/gmail.png'" alt="Mail" />
        <span>nicolasnourry61&#64;gmail.com</span>
      </a>
      <div class="contact-cards">
        <a class="contact-card" href="https://github.com/DarkWolf62" target="_blank" rel="noopener">
          <img class="icon" [src]="baseHref + 'logo/github.png'" alt="GitHub" />
          <span>GitHub</span>
        </a>
        <a class="contact-card" href="https://discordapp.com/users/ton-discord" target="_blank" rel="noopener">
          <img class="icon" [src]="baseHref + 'logo/discord.png'" alt="Discord" />
          <span>Discord</span>
        </a>
        <a class="contact-card" href="https://linkedin.com/in/nicolas-nourrry1" target="_blank" rel="noopener">
          <img class="icon" [src]="baseHref + 'logo/linkedin.png'" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  `
})
export class ContactComponent {
  baseHref = '/';
  isBrowser = false;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {
    try {
      const baseEl = this.document?.querySelector('base');
      this.baseHref = baseEl?.getAttribute('href') ?? '/';
    } catch (e) {
      this.baseHref = '/';
    }
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
