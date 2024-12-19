import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'canFly'
})
export class canFlyPipe implements PipeTransform {
    
    transform(fly: boolean = false): 'Vuela' | 'No vuela' {
      return fly ? 'Vuela' : 'No vuela'
    }

}