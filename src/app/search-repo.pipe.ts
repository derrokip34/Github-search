import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRepo'
})
export class SearchRepoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
