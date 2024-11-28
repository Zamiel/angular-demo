import { Component, Input, OnChanges } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page-frame',
  standalone: true,
  imports: [
    MatIcon,
    MatMiniFabButton,
    NgClass,
    RouterLink,
    RouterLinkActive,
    MatToolbar,
  ],
  templateUrl: './page-frame.component.html',
  styleUrl: './page-frame.component.scss'
})
export class PageFrameComponent implements OnChanges {
  @Input() currentUrl?: string;

  isSidenavOpened = true;
  title:string = '';
  links: any[] = [
    { title: 'Home', url: '/' },
    { title: 'Errors Board', url: '/table-errors' },
  ];

  ngOnChanges() {
    console.log(this.currentUrl);
    this.title = this.links.find((l) => l.url === this.currentUrl)?.title;
  }

  toggleSidenav() { this.isSidenavOpened = !this.isSidenavOpened; }
}
