import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueRoundoff',
})
export class ValueRoundoffPipe implements PipeTransform {
  transform(number, decPlaces) {
    var orig = number;
    var dec = decPlaces;

    decPlaces = Math.pow(10, decPlaces);

    var abbrev = ['k', ' Lacs', ' Cr'];

    for (var i = abbrev.length - 1; i >= 0; i--) {
      var size = Math.pow(10, (i + 1) * 3);

      if (size <= number) {
        var number: any = Math.round((number * decPlaces) / size) / decPlaces;

        if (number == 1000 && i < abbrev.length - 1) {
          number = 1;
          i++;
        }

        number += abbrev[i];

        // We are done... stop
        break;
      }
    }

    // console.log('abbrNum(' + orig + ', ' + dec + ') = ' + number);
    return number;
  }
}
