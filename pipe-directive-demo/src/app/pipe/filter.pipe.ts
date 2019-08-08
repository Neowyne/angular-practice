import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, key: string, phrase: string): any {
<<<<<<< HEAD
    return value.filter(item => {
=======
    return value.filter( item => {
>>>>>>> ff5c46e34042d62e310f50f4b7d9cfe42d8dfe3f
      return item[key].toLowerCase().indexOf(phrase.toLowerCase()) > -1;
    });
  }

}
