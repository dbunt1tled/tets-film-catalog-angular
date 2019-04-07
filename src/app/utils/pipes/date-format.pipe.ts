import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  localeLanguage = environment.filmApiLanguage.substring(0, 2);
  transform(value: string, args?: string): string {
    if (args === undefined) {
      args = 'LLLL';
    }
    moment.locale(this.localeLanguage);
    return moment(value).format(args);
  }

}
