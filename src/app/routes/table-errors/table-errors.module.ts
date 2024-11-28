import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { authGuard } from '@shared/guards/auth/auth.guard';

import { TableErrorsComponent } from './table-errors.component';
import { ErrorsApiService } from './apis/errors-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableErrorsComponent,
    RouterModule.forChild([
      {
        path: '',
        component: TableErrorsComponent,
        canActivate: [authGuard],
      }
    ])
  ],
  providers: [
    ErrorsApiService,
  ]
})
export class TableErrorsModule { }
