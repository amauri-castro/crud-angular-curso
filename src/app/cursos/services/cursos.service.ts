import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Curso } from '../model/curso';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API_URL = 'api/cursos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>(this.API_URL)
    .pipe(
      first(),
      delay(2000),
      tap(cursos => console.log(cursos))
    )
  }
}
