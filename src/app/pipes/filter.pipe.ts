import { Pipe, PipeTransform } from '@angular/core';
import { Market } from '../Event';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(marketList: Market[], marketId: number): Market[] {
    return marketList.filter((market: Market) => market.marketId == marketId.toString());
  }

}
