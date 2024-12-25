import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month',
  standalone: true
})
export class MonthPipe implements PipeTransform {

  transform(value: Date): string {
    return value.toLocaleString('en-US', { month: 'short' });
  }

}
