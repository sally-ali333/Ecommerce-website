import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  newRequest: any;
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    if (
      request.url ==
      'https://parseapi.back4app.com/classes/City?order=-population&keys=name'
    ) {
      this.newRequest = request.clone({
        headers: new HttpHeaders({
          'X-Parse-Application-Id': '45xTnNyaGp6x9HEIH77Y531d8L5dkIrYDN0tAP8y',
          'X-Parse-Master-Key': 'FqDeYeNqkOl13b0W26ClmmSVrEsY59ZzUgDfgAaS',
        }),
      });

      return next.handle(this.newRequest);
    } else {
      this.newRequest = request.clone({
        headers: request.headers.set(
          'token',
          `${localStorage.getItem('userToken')}`
        ),
      });

      if (request.url.includes('products') || request.url.includes('signIn')
      || request.url.includes('brands')     ) {
        this.loaderService.show();
        return next
          .handle(this.newRequest)
          .pipe(finalize(() => this.loaderService.hide()));
      } else {
        return next.handle(this.newRequest);
      }
    }
  }
}
