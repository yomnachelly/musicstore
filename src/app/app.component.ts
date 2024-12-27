import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'music-store';
  
    isDivVisible: boolean = true; // Variable pour contrôler la visibilité du div
    
    iconClass: string = '';
    ispanVisible: boolean =false;
    hideDiv() {
      
      this.iconClass = 'fa-spin fa-spin-reverse';
      setTimeout(() => {
        this.isDivVisible = false;  // Cacher le div après l'animation
      }, 0);
    }
    hidepan() {
      
      
      setTimeout(() => {
        this.ispanVisible = false;  // Cacher le div après l'animation
      }, 500);
    }
    showDiv(){
      this.ispanVisible = !this.ispanVisible;
    }
  }

