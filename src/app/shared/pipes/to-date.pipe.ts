import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDate'
})
export class ToDatePipe implements PipeTransform {

  transform(value?: string): Date|null {
    if(!value)
      return null;
    return new Date(value);
  }

}
