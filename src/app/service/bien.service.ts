import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Bien } from '../interface/bien';
import { Response } from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class BienService {

  constructor(private http: HttpClient) { }
  listBiens(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/list");
  }

  localite(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/localites");
  }
  types(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/types");
  }
}

