import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  dark = false;
  menu = false;
  contenu = false;
  constructor() {}

  ngOnInit(): void {
    localStorage.setItem('color-theme', 'light');

    if (localStorage.getItem('color-theme') == 'light') {
      this.dark = false;
    }

    if (localStorage.getItem('color-theme') == 'dark') {
      this.dark = true;
    }
  }

  changeTheme() {
    this.dark = !this.dark;
    console.log(this.dark);

    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') == 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        console.log(localStorage.getItem('color-theme'));
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        console.log(localStorage.getItem('color-theme'));
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        console.log(localStorage.getItem('color-theme'));
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        console.log(localStorage.getItem('color-theme'));
      }
    }
  }
}
