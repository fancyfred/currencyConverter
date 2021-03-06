import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickStopPropogation]'
})
export class ClickStopPropogationDirective {
  @HostListener("click", ["$event"])
  public onClick(event: any): void
  {
    console.log('intercepted the click');
      event.stopPropagation();
  }
}
