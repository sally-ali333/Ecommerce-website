import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paidOrder',
})
export class PaidOrderPipe implements PipeTransform {
  transform(value: boolean, ...args: unknown[]): string {
    if (value == true) {
      return "Paid";
    }else {
      return "Not Paid"
    }
  }
}
