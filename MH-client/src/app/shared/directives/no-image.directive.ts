import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {
  private nodoDom: ElementRef = inject(ElementRef);

  private renderer2: Renderer2 = inject(Renderer2);
  
  @HostListener("error")
  onError() {
  
    this.renderer2.setAttribute(this.nodoDom.nativeElement, "src", "assets/img/no-image.jpg");
  
  }
}
