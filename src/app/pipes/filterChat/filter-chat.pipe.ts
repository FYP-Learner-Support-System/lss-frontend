import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChat',
  standalone: true
})
export class FilterChatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
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
    return value.filter((each:any)=>{return each.request.toLowerCase().includes(args) || each.response.toLowerCase().includes(args)});
  }

}
