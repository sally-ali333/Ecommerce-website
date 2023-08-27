import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDate',
})
export class GetDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): Date {
    return new Date(value)
  }
}
