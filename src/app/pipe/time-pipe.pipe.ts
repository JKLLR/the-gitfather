import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(value:any): number {
    let today:any = new Date();
    let dateDifference = Math.abs(Date.parse(today)-Date.parse(value))*0.001; //convert milliseconds to seconds
    let differenceInDays= dateDifference/(60*60*24);  //get time in days
    return Math.round(differenceInDays);
  }
}
