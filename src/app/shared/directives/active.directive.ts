import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {
  @HostBinding('style.backgroundColor') bgColor: string;
  @HostBinding('style.color') color: string;
  
  @Input('appActive') set isActive(condition){
    if(condition) {
      this.bgColor = '#3498db';
      this.color = 'white';
    } else {
      this.bgColor = 'transparent';
      this.color = 'black';
    }
  }

  constructor() {}

}
