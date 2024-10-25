import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }

  list(): Curso[] {
    return [
      {_id: '1', nome: 'Angular', categoria: 'Front-End'}
    ];
  }
}
