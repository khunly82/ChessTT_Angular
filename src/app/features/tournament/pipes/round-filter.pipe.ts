import { Pipe, PipeTransform } from '@angular/core';
import { MatchModel } from '../models/match.model';

@Pipe({
  name: 'roundFilter'
})
export class RoundFilterPipe implements PipeTransform {

  transform(matches: MatchModel[], round: number): MatchModel[] {
    return matches?.filter(m => m.round === round);
  }

}
