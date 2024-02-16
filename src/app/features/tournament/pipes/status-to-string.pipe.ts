import { Pipe, PipeTransform } from '@angular/core';
import { StatusEnum } from '../enums/status.enum';

@Pipe({
  name: 'statusToString'
})
export class StatusToStringPipe implements PipeTransform {

  transform(value: StatusEnum): string {
    switch(value) {
      case StatusEnum.WAITING_FOR_PLAYERS:
        return 'En Attente';
      case StatusEnum.IN_PROGRESS:
        return 'En Cours';
      case StatusEnum.CLOSED:
        return 'Terminé';
    }
  }

}
