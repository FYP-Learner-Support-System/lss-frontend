import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    // if search input is empty then toLowerCase() cant be used thus we will use args else we convert search input value to lower case
    // console.log("value: ",value)
    // console.log("arg: ",args)
    if(args[0]===undefined){
      args = args
    }
    else{
      // console.log(args[0])
      args = args[0].toLowerCase();
    }

    // Filter the product list by checking if each product's name includes search value if yes product is returned else not
    // console.log("filtered Value: ",value.filter((each:any)=>{return each.className.toLowerCase().includes(args)}))
    return value.filter((each:any)=>{return each.className.toLowerCase().includes(args) || each.description.toLowerCase().includes(args)});
  }

}
