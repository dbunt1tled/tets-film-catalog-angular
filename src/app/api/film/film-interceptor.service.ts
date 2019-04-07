import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {FilmApiService} from './film-api.service';

@Injectable({
  providedIn: 'root'
})
export class FilmInterceptorService {
  static readonly API_KEY = environment.filmApiKey;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(FilmApiService.BASE_URL)) {
      const paramsReq = req.clone({
        params: req.params.set('api_key', FilmInterceptorService.API_KEY)
      });
      return next.handle(paramsReq);
    }
    return next.handle(req);
  }
}
