import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    
    const completeName = value.name + ' ' + value.surname
    
    return completeName;
  }

}
