import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: any, title?: string, args?: any): any {
    const currencySymbol = '<span class="rupee-symbol">₹</span>';
    // const output = new Intl.NumberFormat('en-IN').format(Number(value.toFixed(2)));
    let formattedValue: any = Number(Math.round(value * 100) / 100).toFixed(2);
    const output = new Intl.NumberFormat('en-IN').format(formattedValue);
    if (title === 'title') return '₹' + ' ' + output;
    return currencySymbol + ' ' + output;
  }
}
