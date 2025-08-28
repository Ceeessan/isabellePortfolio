import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  clicked= false;
  menuOpen=false;

  onResumeClick() {
    this.clicked= true;
    setTimeout(() => {
      this.clicked = false;
    }, 2000);
  }

  toggleMenu() {
    this.menuOpen= !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside( e: MouseEvent) {
    const target = e.target as HTMLElement;

    const clickedNav = target.closest('nav');
    const clickedBurger = target.closest('#burgerMenu');

    if(!clickedNav && !clickedBurger) {
      this.closeMenu();
    }

  }
}
