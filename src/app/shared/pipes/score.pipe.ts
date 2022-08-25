import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform
{

  transform(value: number): String
  {
    let sign = '';

    switch (Math.sign(value))
    {
      case 0:
      case 1:
        sign = '+ ';
        break;
      case -1:
        sign = '- ';
        break;
    }

    return sign + Math.abs(value);
  }
}
