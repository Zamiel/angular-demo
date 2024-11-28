import { Component, DestroyRef, inject } from '@angular/core';
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
export class AppComponent {
  title = 'angular-demo';

  protected isLogInPage: boolean = false;

  private destroyRef$: DestroyRef = inject(DestroyRef);
  private router: Router = inject(Router)

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef$),
      )
      .subscribe((event: NavigationEnd) => {
         this.isLogInPage = event.url.indexOf('login') !== -1;
      })
  }
}
