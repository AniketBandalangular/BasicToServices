import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el:ElementRef,private rendere:Renderer2) { }

  @HostBinding('class.show')isOpen=false;


  @HostListener('click') toggleOpen(){
    this.isOpen= !this.isOpen;
    let part=this.el.nativeElement.querySelector('.dropdown-menu');
    if(this.isOpen)this.rendere.addClass(part,'show');
    else this.rendere.removeClass(part,'show');
  }


}
