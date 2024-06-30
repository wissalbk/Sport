import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  //name pipe : selector
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {
//methode s'execute automatiquement lors de l'appel de pipes par son name
  transform(ch:string){
    let voyels= ['a','e','i','o','u','y'];
    let result="";
    for (let i = 0; i < ch.length; i++) {
       let inter=ch[i];
       for (let j = 0; j < voyels.length; j++) {
          if (ch[i].toLowerCase() == voyels[j]) {
            inter = "*";
            break;
          }
        
       }
      result = result + inter;
    }
    return result;
  }

}
