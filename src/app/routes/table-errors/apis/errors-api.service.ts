import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { ErrorDependencies, ErrorResponse } from '@routes/table-errors/models/errors-api.model';

@Injectable()
export class ErrorsApiService {
  private static apiUrl = environment.apiUrl;

  private http: HttpClient = inject(HttpClient);

  getDependencies(): Observable<ErrorDependencies> {
    return this.http.get<ErrorDependencies>(`${ErrorsApiService.apiUrl}/errors:dependencies`);
  }

  getList(): Observable<ErrorResponse[]> {
    return this.http.get<ErrorResponse[]>(`${ErrorsApiService.apiUrl}/errors`);
  }
}
