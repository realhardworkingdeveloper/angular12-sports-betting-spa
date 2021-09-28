import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pickOrder'
})
export class PickOrderPipe implements PipeTransform {

  transform(marketPicks: any): any {
    return marketPicks.sort((a: any, b: any) => {
      return a.order - b.order;
    });
  }

}
