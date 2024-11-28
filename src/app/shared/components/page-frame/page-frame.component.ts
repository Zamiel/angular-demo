import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page-frame',
  standalone: true,
  imports: [
    MatIcon,
    MatMiniFabButton,
    NgClass,
    MatNavList,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MatToolbar,
  ],
  templateUrl: './page-frame.component.html',
  styleUrl: './page-frame.component.scss'
})
export class PageFrameComponent {
  isSidenavOpened = true;
  links: any[] = [
    { title: 'Home', url: '/' },
  ];

  toggleSidenav() { this.isSidenavOpened = !this.isSidenavOpened; }
}
