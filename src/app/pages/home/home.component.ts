import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  scrollToBottom(): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Adds smooth scrolling
    });
  }

}
