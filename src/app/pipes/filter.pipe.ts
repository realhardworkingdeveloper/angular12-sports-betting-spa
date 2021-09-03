import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(marketList: any, marketId: any): any {
    return marketList.filter((market: any) => market.marketId == marketId);
  }

}
