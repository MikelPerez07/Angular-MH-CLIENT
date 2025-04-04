import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rarity'
})
export class RarityPipe implements PipeTransform {

  transform(value: number): string {
    return "Rarity " + value.toString();
  }

}
