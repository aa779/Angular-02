import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToCommas'
})

export class ConvertToCommasPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ',');
  }
}
