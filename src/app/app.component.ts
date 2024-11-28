import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PageFrameComponent } from '@shared/components/page-frame/page-frame.component';

@Component({
  selector: 'app-root',
  imports: [PageFrameComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-demo';

  protected currentUrl?: string;
  protected isLogInPage: boolean = false;

  private destroyRef$: DestroyRef = inject(DestroyRef);
  private router: Router = inject(Router)

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef$),
      )
      .subscribe(() => {
        const { url } = this.router;
        this.isLogInPage = url.indexOf('login') !== -1;
        this.currentUrl = url;
      })
  }
}
