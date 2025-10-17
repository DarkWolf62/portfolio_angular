import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="contact-container">
      <div class="contact-intro">Pour me contacter :</div>
      <a href="mailto:nicolasnourry61@gmail.com" class="contact-mail">
        <img class="icon" src="logo/gmail.png" alt="Mail" />
        <span>nicolasnourry61&#64;gmail.com</span>
      </a>
      <div class="contact-cards">
        <a class="contact-card" href="https://github.com/ton-github" target="_blank" rel="noopener">
          <img class="icon" src="logo/github.png" alt="GitHub" />
          <span>GitHub</span>
        </a>
        <a class="contact-card" href="https://discordapp.com/users/ton-discord" target="_blank" rel="noopener">
          <img class="icon" src="logo/discord.png" alt="Discord" />
          <span>Discord</span>
        </a>
        <a class="contact-card" href="https://linkedin.com/in/ton-linkedin" target="_blank" rel="noopener">
          <img class="icon" src="logo/linkedin.png" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  `
})
export class ContactComponent {}
